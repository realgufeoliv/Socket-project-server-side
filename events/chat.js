const data = require("../data");
const menu = require("../menu");
const Order = require("../classes/Order");
console.log(data.funcionarios[0], "aqui");
data.funcionarios.forEach((funcionario) => {
  console.log(funcionario.name);
});
//const Order = require("../classes/Order");
const ask = (socket) => {
  let order = new Order();
  let menuOption = 0;
  socket.on("chooseMenu", (resposta) => {
    menuSelected = menu.getMenu(menuOption);
    if (resposta <= menuSelected.length && resposta > 0) {
      menuSelected.forEach((item, index) => {
        if (resposta == index + 1) {
          order.addItem(item);
          socket.emit(
            "chooseOption",`Item ${order.getItemsList()[0]} adicionado ao pedido com sucesso! \n`+order.printOrder()+ 
            `Continue pedindo ou digite 'concluir' para finalizar o pedido.` +
              "\nO que deseja pedir? Selecione uma opção por vez, Temos:\n1 - Pizzas\n2 - Esfihas\n3 - Bebidas\n4 - Sobremesas\n" + `\n Digite o número da opção desejada:`
          );
    
        }
      });

    } else {
      socket.emit("chooseMenu", "Opção inválida, digite novamente:");
      return;
    }
  });
  socket.on("chooseOption", (resposta) => {
    menuOption = parseInt(resposta);
    if (resposta === "concluir") {
    }
    if (resposta == "sair") {
      socket.disconnect();
    }
    if (resposta > 4 || resposta < 1) {
      socket.emit("chooseOption", "Opção inválida, digite novamente:");
      return;
    }

    for (let i = 0; i < data.options.length; i++) {
      if (resposta == i + 1) {
        socket.emit(
          "chooseMenu",
          `Aqui está o cardápio de ${data.options[i]}\n` +
            menu.printMenu(i + 1) +
            `${order.printOrder()}` +
            `\nDigite o número do item que deseja adicionar ao pedido:`
        );
      }
    }
  });
};
module.exports = ask;
