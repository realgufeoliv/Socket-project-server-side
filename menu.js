const data = require("./data");
var figlet = require("figlet");

const getMenu = (option) => {
  switch (option) {
    case 1:
      return data.pizzas;
    case 2:
      return data.esfihas;
    case 3:
      return data.drinks;
    case 4:
      return data.desserts;
  }
};
const printMenu = (option) => {
  let menu = getMenu(option);
  let menuString =
    `---------------------------------------------------------------------------\n` +
    figlet.textSync(`Cardápio de ${data.options[option - 1]}`, {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    }) +
    "\n";
  menu.forEach((item, index) => {
    menuString += `${index + 1} - ${item.name} - R$${item.price}\n`;
  });
  return (
    menuString

  );
};

module.exports = {
    printMenu,
    getMenu}
