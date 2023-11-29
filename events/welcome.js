var figlet = require("figlet");
let name = "Jéssica";
const dataAtual = new Date();
const hora = dataAtual.getHours();
const periodo =
  hora >= 12
    ? hora >= 18
      ? "Boa noite!"
      : "Boa tarde!"
    : hora < 6
    ? "Bateu fome na Madrugada?"
    : "Bom dia!";
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
      "O que deseja pedir? Selecione uma opção por vez, Temos:\n1 - Pizzas\n2 - Esfihas\n3 - Bebidas\n4 - Sobremesas\n"
  );
  socket.emit("chooseOption", "Digite o número da opção desejada:");
};

module.exports = welcome;
