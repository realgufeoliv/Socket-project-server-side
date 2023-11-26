var figlet = require("figlet");
let name = "Jéssica";
const dataAtual = new Date();
const hora = dataAtual.getHours()
const periodo = hora >= 12 ? hora >= 18 ? "Boa noite!" : "Boa tarde!"  : hora < 6 ? "Bateu fome na Madrugada?": "Bom dia!";
const welcome = (socket) => {
  socket.emit(
    "boasvindas",
    `Pizzaria aberta! Rua Local http://localhost, número:3001\n` +
      figlet.textSync("Bem vindo à Node Pizzaria!", {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      }) +
      `\n Olá ${periodo} Meu nome é ${name} e irei realizar o seu pedido! Caso Deseje sair, digite 'sair'.\n` +
      `\n O que deseja pedir? Selecione uma opção por vez, Temos: \n 1- Pizzas \n 2- Esfihas \n 3- Bebidas \n 4- Sobremesas \n ` +
      `\n Digite o número da opção desejada:`
  );
};

module.exports = welcome;
