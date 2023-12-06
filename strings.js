/*Arquivo com strings bastante utilizadas */
/*Bibliotecas de estilização*/
var figlet = require("figlet");   
const colors = require("colors");
/*data e hora atuais*/
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

const chooseOptionMessage =
  "\nO que deseja pedir? Selecione uma opção por vez, Temos:\n1 - Pizzas\n2 - Esfihas\n3 - Bebidas\n4 - Sobremesas\n";

const paymentOptionsMessage = `Formas de pagamento:\n ${
  `'1 - Dinheiro' , '2 - Cartão' ou '3 - Pix'`.magenta
}\nDigite o número da forma de pagamento desejada:`;

const welcomeMessage =
  `Pizzaria aberta! Rua Local http://localhost, número:3001\n` +
  figlet.textSync("Bem vindo à Node Pizzaria!", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  }) +
  `\nOlá ${periodo} eu sou o chatbot e irei realizar o seu pedido! Caso Deseje sair, digite a qualquer momento ${
    "'sair'".red
  }.` +
  chooseOptionMessage;

const invalidOptionMessage = "Opção inválida, digite novamente:".red;

module.exports = {
  periodo,
  paymentOptionsMessage,
  welcomeMessage,
  invalidOptionMessage,
  chooseOptionMessage
};
