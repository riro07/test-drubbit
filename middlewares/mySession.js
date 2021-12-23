const { request }=require('express')
const uid = require('uid-safe');
const cookie = require('cookie-signature');

//const { validationResult } = require('express-validator');


const session = {
    ttl: 3600,
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

        
        if( !req.session.cookieName ){
            let userId = uid.sync(18);
            res.cookie(req.session.cookieName, userId);
        }

        
        let time = new Date().getTime();
        const timeSeconds = Math.floor((time / 1000) )
        
        res.cookie('time', timeSeconds)

        const x = req.cookies.time;
        
        console.log( timeSeconds - x );

        const comparar = timeSeconds - x;

        if( comparar > 3600 ){
            
            userId = uid.sync(18);
            res.cookie(req.session.cookieName, userId);

        }

        const val = cookie.sign()
        



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
        


        
        //cookieName: nombre de la cookie para almacenar el id de sesion( default: sessionId)
    


        //secret: para utilizar junto con cookie-signature darle mas seguridad al ID de sesión 
        //  guardado en la cookie. (Default: “mysecret”)
    

        next()    
        
    } catch (error) {
        console.log(error)
    }    
}

module.exports = configSession;