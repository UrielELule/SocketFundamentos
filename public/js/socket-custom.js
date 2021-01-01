      //indicamos que esta conectada con el backend
      var socket = io();
      //on = escuchar procesos
      socket.on('connect', function() {
          console.log('Server Connect');
      });


      socket.on('disconnect', function() {
          console.log('Lose Connection with server');
      });

      ///emit = enviar informacion al servidor
      socket.emit('enviarMensaje', {
          user: 'Uriel Lule',
          mensaje: 'stack MEAN'
      }, function(resp) {
          console.log('Respuesta: ', resp);
      });

      //escuchar servidor
      socket.on('enviarMensaje', function(res) {
          console.log('Server:', res);
      });