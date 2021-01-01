 const { io } = require('../server');

 //DONDE SE ESCUCHA O EMITE
 io.on('connection', (client) => {

     console.log('User Connect');

     //
     client.emit('enviarMensaje', {
         user: 'Admin',
         mensaje: 'Welcome of this app'
     });

     client.on('disconnect', () => {
         console.log('User Offline');
     });

     //ESCUCHAR AL CLIENTE
     client.on('enviarMensaje', (data, callback) => {
         console.log(data);

         //enviar a diferentes usuarios
         //broadcast para enviar a direfentes users a todos

         client.broadcast.emit('enviarMensaje', data);

         /*
                  if (mensaje.user) {
                      callback({
                          res: 'TODO SALIO BIEN'
                      });
                  } else {
                      callback({
                          res: 'TODO SALIO MAL'
                      });
                  }
         */
     });

 });