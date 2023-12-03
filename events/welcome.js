const strings = require('../strings');


const welcome = (socket) => {
  socket.emit('welcome',
      strings.welcomeMessage
      
  );
  socket.emit('chooseOption',"Digite o número da opção desejada:");
};
module.exports = welcome;
