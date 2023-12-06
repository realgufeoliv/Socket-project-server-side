/**
 * Bibliotecas externas:
 * https://github.com/websockets/ws
 * https://www.npmjs.com/package/colors
 * https://www.npmjs.com/package/figlet
 */
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3001 }); // Criando servidor WebSocket na porta 3001
const colors = require("colors");

/*Funções, classes e helpers do programa*/
const welcome = require("./events/welcome");
const strings = require("./strings");
const getStep = require("./getStep");
const chat = require("./events/chat");
const Order = require("./classes/Order");
const helpers = require("./helpers");

// Evento de conexão
wss.on("connection", (ws) => {
  let order = new Order(); // Criando um novo pedido
  welcome(ws); // Enviando mensagem de boas vindas
  ws.on("message", (message) => {
    console.log(`Mensagem recebida => ${message}`);
    if (helpers.getMessage(message) == "sair") {
      return ws.close(); // Chamando evento de fechamento de conexão
    }
    if (
      helpers.getMessage(message) == "concluir" &&
      order.getItemsList().length > 0
    ) {
      //conclusão do pedido
      return ws.send(
        helpers.buildMessage("address", strings.paymentOptionsMessage)
      ); // encaminha para o step endereço e manda opções de pagamento
    }
    if (
      helpers.getMessage(message) == "cancelar" &&
      order.getItemsList().length > 0
    ) {
      //cancelamento do pedido
      let cancelList = "";
      order.getItemsList().forEach((item, index) => {
        cancelList += `${index + 1} - ${item}\n`.cyan; // Lista de itens do pedido
      });
      return ws.send(
        helpers.buildMessage(
          "cancel", // encaminha para o step cancel e manda lista de itens do pedido
          "\nItens do pedido:\n" +
            cancelList +
            `Digite o número da opção que deseja cancelar ou limpar(para remover tudo):`
        )
      );
    }
    getStep.getStep(ws, message, order); // Chamando função que retorna o passo atual do pedido
  });
  ws.on("close", () => {
    // Evento de fechamento de conexão
    chat.order = null;
    console.log("Conexão fechada");
  });
});
