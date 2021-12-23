const { request, response } = require('express');
const DataSession = require('../models/user');


const userCount = async ( req = request, res = response ) => {

    
    try {
        const { session } = req;
    
        const x = 0;
        
        await DataSession.findOne({
            where: {
                idSession: session.cookieName,
                visit: x++
            }
        });

        // if (existeEmail) {
        //     return res.status(400).json({
        //         msg: 'Ya existe un usuario con el email ' + body.email
        //     });
        // }


        const dataSession = new DataSession(session);
        await dataSession.save();

        res.json( dataSession );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }


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