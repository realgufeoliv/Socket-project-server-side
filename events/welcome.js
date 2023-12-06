/**
 * Mensagem de boas vindas
 */
const strings = require("../strings");
const helpers = require("../helpers");
const welcome = (socket) => {
  // Envia mensagem de boas vindas e encaminha para o step chooseOption
  socket.send(
    helpers.buildMessage(
      "chooseOption",
      strings.welcomeMessage + "\nDigite o número da opção desejada:"
    )
  );
};
module.exports = welcome;
