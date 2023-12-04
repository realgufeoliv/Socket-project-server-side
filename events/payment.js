 const data = require("../data");
 const chat = require("../events/chat");

 buildMessage = (step,message) => {
  return JSON.stringify({step,message});
}
 
const address = (socket, resposta) => {
  if(['1','2','3'].includes(resposta)){
    data.payment.forEach((payment, index) => {
      if (resposta == index + 1) {
        socket.send(buildMessage(
          "finish",
          `Forma de pagamento escolhida: ${payment.green}.\n` +
            `Digite o endereço de entrega:`)
        );
      }
    });}else{
      socket.send(buildMessage(
        "address",
        `Opção inválida, digite novamente:`)
      );
    }
  };

  const finish = (socket,resposta,order) => {
    socket.send(buildMessage('',
      `Endereço de entrega: ${resposta.green}.\n` +
        `Pedido finalizado com sucesso! - ${new Date()}\n` +
        order.printOrder().yellow +
        `\nPrevisão de entrega: 30 minutos\n`)
    );
    socket.close();
  }

module.exports = { address, finish };