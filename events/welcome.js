const strings = require("../strings");
buildMessage = (step,message) => {
  return JSON.stringify({step,message});
}
const welcome = (socket) => {
  socket.send(buildMessage('chooseOption',strings.welcomeMessage+'\nDigite o número da opção desejada:'));
};
module.exports = welcome;
