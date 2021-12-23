const { request, response } = require('express')


const userCount = ( req = request, res = response ) => {

    res.json({msg: 'controllers respons finally'})



    //const antCokie = req.cookies.session_gabi;

    //const seconds = Math.floor((antCokie / 1000) % 60)

    //let time = new Date().getTime();

    //const timeSeconds = Math.floor((time / 1000) % 60)

    //console.log(req.secret);
    
    
    //const pasarASeconds = timeSeconds - seconds
    
    //const timeFinaly = Math.floor((pasarASeconds / 1000) % 60);
    //console.log( pasarASeconds );
    
    //let x = 1
    //if( pasarASeconds < 3600 ){
    //    x++
    //}else{
    //    console.log(' crear un nuevo usuario con un conteo nuevo ');
    //}

    // if( ( antCokie - time ) < 3600000  ){
        //     console.log( 'Se cumple la condicion y reinicia la sesion')
        // }
        
    
        
    //res.cookie('session_gabi', time).status(200).json({
    //    Views: `${x}`
    //})

};

module.exports = userCount;