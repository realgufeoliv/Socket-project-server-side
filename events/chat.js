/*
 * Steps chooseOption, chooseMenu, cancel
 */
const data = require("../data");
const menu = require("../menu");
const colors = require("colors");
const strings = require("../strings");
const helpers = require("../helpers");

let menuOption = 0; // Opção do menu selecionada

const chooseMenu = (socket, resposta, order) => {
  menuSelected = menu.getMenu(menuOption); // Pega o cardápio do menu selecionado

  if (resposta <= menuSelected.length && resposta > 0) {
    menuSelected.forEach((item, index) => {
      // Percorre o cardápio do menu selecionado e encontra opção escolhida
      if (resposta == index + 1) {
        order.addItem(item); // Adiciona item ao pedido
        socket.send(
          // Envia mensagem com o item adicionado ao pedido e retorna ao menu principal(chooseOption)
          helpers.buildMessage(
            "chooseOption",
            `Item '${
              order.getItemsList()[order.getItemsList().length - 1]
            }' adicionado ao pedido com sucesso! \n`.green +
              order.printOrder().yellow +
              `Continue pedindo, digite ${
                "'concluir'".green
              } para finalizar o pedido, ou digite ${
                `'cancelar'`.red
              } para cancelar algum item.` +
              strings.chooseOptionMessage +
              `\nDigite o número da opção desejada:`
          )
        );
      }
    });
  } else {
    socket.send(
      helpers.buildMessage(
        "chooseMenu",
        "Opção inválida, digite novamente:".red
      )
    );
    return;
  }
};
// Recebe a opção do menu inicial escolhida(pizzas, bebidas, etc)
const chooseOption = (socket, resposta, order) => {
  menuOption = parseInt(resposta); // Transforma a string para int
  if (resposta <= data.options.length && resposta > 0) {
    for (let i = 0; i < data.options.length; i++) {
      if (resposta == i + 1) {
        socket.send(
          // Envia mensagem com o cardápio do menu escolhido e encaminha para o step chooseMenu
          helpers.buildMessage(
            "chooseMenu",
            `Aqui está o cardápio de ${data.options[i].blue}...\n` +
              menu.printMenu(i + 1) +
              `${order.printOrder().yellow}` +
              `\nDigite o número do item que deseja adicionar ao pedido:`
          )
        );
      }
    }
  } else {
    socket.send(
      //Opção inválida
      helpers.buildMessage(
        "chooseOption",
        "Opção inválida, digite novamente:".red
      )
    );
  }
};

const cancel = (socket, resposta, order) => {
  let removedItem = order.getItemsList()[resposta - 1]; //Acha posição do item a ser removido
  if (resposta == "limpar") {
    order.removeAllItens(); // Limpa todos os itens do pedido
    socket.send(
      helpers.buildMessage(
        "chooseOption", // retporna ao menu principal
        `Itens removidos com sucesso! \n`.green +
          order.printOrder().yellow +
          `Continue pedindo ou digite ${`'sair'`.red}` +
          strings.chooseOptionMessage +
          `\nDigite o número da opção desejada:`
      )
    );
    return;
  }
  order.removeItem(resposta - 1); // Remove item do pedido
  socket.send(
    helpers.buildMessage(
      "chooseOption", // retorna ao menu principal
      `Item '${removedItem}' removido com sucesso! \n`.green +
        order.printOrder().yellow +
        `Continue pedindo ou digite ${
          "'concluir'".green
        } para finalizar o pedido.` +
        strings.chooseOptionMessage +
        `\nDigite o número da opção desejada:`
    )
  );
};

module.exports = { chooseOption, chooseMenu, cancel };
