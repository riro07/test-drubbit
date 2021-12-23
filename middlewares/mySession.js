const { request }=require('express')
const uid = require('uid-safe');
const cookie = require('cookie-signature');



const session = {
    ttl: 10,
    cookieName: 'sessionId',
}



const configSession = (req = request , res, next ) => {
    
    try {
        
        req.session = session
        const { ttl = 3600, cookieName = 'sessionId', secret = 'mysecret'} = session;
        req.session.secret = secret;
        req.session.cookieName = cookieName;
        req.session.ttl = ttl;
        
        //ttl: Tiempo que puede durar la sesion inactiva(segundos). Si pasa el tiempo se debe crear
        //  otro usuario con diferente id ( default: 3600 )
        
        //cookieName: nombre de la cookie para almacenar el id de sesion( default: sessionId)
                
        //secret: para utilizar junto con cookie-signature darle mas seguridad al ID de sesión 
        //  guardado en la cookie. (Default: “mysecret”)
        
        
        let userId = uid.sync(18);
        if( !req.cookies.cookieName ){
            res.cookie(req.session.cookieName, userId);
        }
        const idSession = req.cookies[req.session.cookieName];
        res.cookie( req.session.cookieName, idSession );
        // guardar usuario en bd


        const time = new Date().getTime();
        const timeSeconds = Math.floor((time / 1000) );
        res.cookie('time', timeSeconds)
        

        
        const cookieTime = req.cookies.time;
        const sessionInactive = timeSeconds - cookieTime
        console.log('Segundos de sesion inactiva: ', sessionInactive);
        

        if( sessionInactive > req.session.ttl ){
            userId = uid.sync(18);
            res.cookie(req.session.cookieName, userId);
        }

        



        //if(req.cookies.time){
        //    
//
        //        //    const antCokieseconds = Math.floor((antCokie / 1000) % 60)
        //    
        //    
        //    
        //            const pasarASeconds = time - antCokie
        //    
        //            const timeFinaly = Math.floor((pasarASeconds / 1000) % 60);
        //            console.log( timeFinaly );
//
        //}


        //let x = 1
        //if( pasarASeconds < 3600 ){
        //    x++
        //}else{
        //    console.log(' crear un nuevo usuario con un conteo nuevo ');
        //}
//

        //if( ( antCokie - time ) < 3600000  ){
        //        console.log( 'Se cumple la condicion y reinicia la sesion')
        //    }
        



        next();    
        
    } catch (error) {
        console.log(error)
    }    
}

module.exports = configSession;