const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');

const dbConnection = require('../database/connection');

// Este seria el remplazo de express-session
const configSession = require('../middlewares/mySession')


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.path = '/';

        // Conectar a la DB
        this.conectarDB();

        // Middlewares: usan el 'use'
        this.middlewares();

        // Rutas de mi aplicación           
        this.routes();
    }

    async conectarDB(){

        try {
            await dbConnection.authenticate();
            console.log('database online')

        } catch (error) {
            console.log( error )
            throw new Error( error )
            
        }

    }

    middlewares(){
        
        // CORS
        this.app.use( cors() );

        // Habilita la manipulacion de los cookies
        this.app.use( cookieParser() );
        
        // Lectura y parseo del body( habilita la captura de info del body )
        this.app.use( express.json() );

        // config de session: ttl, cookieName, secret
        this.app.use( configSession );

    }

    routes(){
        // endpoint api
        this.app.use( this.path, require('../routes/users'));
    }

    listen(){
        
        this.app.listen( this.port, () => {
            console.log('Server on port', this.port)  
        })
    }

}

module.exports = Server;