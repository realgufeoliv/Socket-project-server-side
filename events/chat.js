const data = require("../data");
const menu = require("../menu");
const Order = require("../classes/Order");
const colors = require("colors");
const strings = require("../strings");
const dataAtual = new Date();

const ask = (socket) => {
  let order = new Order();
  let menuOption = 0;
  socket.on("chooseMenu", (resposta) => {
    menuSelected = menu.getMenu(menuOption);
    if (resposta == "sair") {
      socket.disconnect();
    }
    if (resposta <= menuSelected.length && resposta > 0) {
      menuSelected.forEach((item, index) => {
        if (resposta == index + 1) {
          order.addItem(item);
          socket.emit(
            "chooseOption",
            `Item '${
              order.getItemsList()[order.getItemsList().length - 1]
            }' adicionado ao pedido com sucesso! \n`.green +
              order.printOrder().yellow +
              `Continue pedindo ou digite ${
                "'concluir'".green
              } para finalizar o pedido.` +
              strings.chooseOptionMessage +
              `\nDigite o número da opção desejada:`
          );
        }
      });
    } else {
      socket.emit("chooseMenu", "Opção inválida, digite novamente:".red);
      return;
    }
  });

  socket.on("checkout", (resposta) => {
    if (resposta == "sair") {
      socket.disconnect();
    }
    data.payment.forEach((payment, index) => {
      if (resposta == index + 1) {
        socket.emit(
          "adress",
          `Forma de pagamento escolhida: ${payment.green}.\n` +
            `Digite o endereço de entrega:`
        );
      }
    });
  });

  socket.on("adress", (resposta) => {
    if (resposta == "sair") {
      socket.disconnect();
    }
    socket.emit(
      "adress",
      `Endereço de entrega: ${resposta.green}.\n` +
        `Pedido finalizado com sucesso! - ${new Date()}\n` +
        order.printOrder().yellow +
        `\nPrevisão de entrega: 30 minutos\n`
    );
    socket.disconnect();
  });

  socket.on("chooseOption", (resposta) => {
    menuOption = parseInt(resposta);
    if (resposta === "concluir") {
      socket.emit("checkout", strings.paymentOptionsMessage);
    }
    if (resposta == "sair") {
      socket.disconnect();
    }
    if (resposta > 4 || resposta < 1) {
      socket.emit("chooseOption", "Opção inválida, digite novamente:");
      return;
    }
    if (resposta <= data.options.length && resposta > 0) {
      for (let i = 0; i < data.options.length; i++) {
        if (resposta == i + 1) {
          socket.emit(
            "chooseMenu",
            `Aqui está o cardápio de ${data.options[i].blue}...\n` +
              menu.printMenu(i + 1) +
              `${order.printOrder().yellow}` +
              `\nDigite o número do item que deseja adicionar ao pedido:`
          );
        }
      }
    } else {
      socket.emit("chooseOption", "Opção inválida, digite novamente:".red);
    }
  });
};
module.exports = ask;
