/**
 * Contém os steps de checkout do pedido Address e Finish
 */
const data = require("../data");
const chat = require("../events/chat");
const helpers = require("../helpers");

const address = (socket, resposta) => {
  if (["1", "2", "3"].includes(resposta)) {
    // Verifica se a opção escolhida é válida
    data.payment.forEach((payment, index) => {
      // Percorre as opções de pagamento e encontra a escolhida
      if (resposta == index + 1) {
        socket.send(
          helpers.buildMessage(
            // Envia mensagem com a opção escolhida e encaminha para o step finish
            "finish",
            `Forma de pagamento escolhida: ${payment.green}.\n` +
              `Digite o endereço de entrega:`
          )
        );
      }
    });
  } else {
    socket.send(
      helpers.buildMessage(
        // Opção inválida
        "address",
        `Opção inválida, digite novamente:`
      )
    );
  }
};

const finish = (socket, resposta, order) => {
  socket.send(
    helpers.buildMessage(
      "", // Envia mensagem com o endereço de entrega e o pedido finalizado
      `Endereço de entrega: ${resposta.green}.\n` +
        `Pedido finalizado com sucesso! - ${new Date()}\n` +
        order.printOrder().yellow +
        `\nPrevisão de entrega: 30 minutos\n`
    )
  );
  socket.close(); // Encerra a conexão
};

module.exports = { address, finish };
