const data = require("../data");
const menu = require("../menu");
const colors = require("colors");
const strings = require("../strings");
const dataAtual = new Date();
buildMessage = (step,message) => {
  return JSON.stringify({step,message});
}
  
  let menuOption = 0;

 const chooseMenu = (socket,resposta,order) => {
    menuSelected = menu.getMenu(menuOption);

    if (resposta <= menuSelected.length && resposta > 0) {
      menuSelected.forEach((item, index) => {
        if (resposta == index + 1) {
          order.addItem(item);
          socket.send(
            buildMessage('chooseOption',
            `Item '${
              order.getItemsList()[order.getItemsList().length - 1]
            }' adicionado ao pedido com sucesso! \n`.green +
              order.printOrder().yellow +
              `Continue pedindo ou digite ${
                "'concluir'".green
              } para finalizar o pedido.` +
              strings.chooseOptionMessage +
              `\nDigite o número da opção desejada:`
          ))
        }
      });
    } else {
      socket.send(buildMessage("chooseMenu", "Opção inválida, digite novamente:".red));
      return;
    }
  }



  const chooseOption =  (socket,resposta,order) => {
    menuOption = parseInt(resposta);
    if (resposta <= data.options.length && resposta > 0) {
      for (let i = 0; i < data.options.length; i++) {
        if (resposta == i + 1) {
          socket.send(
            buildMessage('chooseMenu',
            `Aqui está o cardápio de ${data.options[i].blue}...\n` +
              menu.printMenu(i + 1) +
              `${order.printOrder().yellow}` +
              `\nDigite o número do item que deseja adicionar ao pedido:`)
          );
        }
      }
    } else {
      socket.send(buildMessage('chooseOption',"Opção inválida, digite novamente:".red) );
    }
  }

module.exports = { chooseOption, chooseMenu};
