/**
 * Classe responsável por gerenciar os pedidos
 */
class Order {
  constructor() {
    console.log("Order created");
    this.items = []; // Lista de itens do pedido
    this.itemsWithPrice = []; // Lista de itens do pedido com preço
    this.total = 0; // Valor total do pedido
  }
  addItem(item) {
    // Adiciona item ao pedido
    this.itemsWithPrice.push(item);
    this.total += item.price;
    this.items.push(item.name);
    console.log(this.items);
  }
  removeItem(index) {
    // Remove item do pedido
    let itemWithPrice = this.itemsWithPrice[index];
    console.log(itemWithPrice);
    this.total -= itemWithPrice.price;
    this.items.splice(index, 1);
  }

  removeAllItens() {
    // Remove todos os itens do pedido
    this.items = [];
    this.itemsWithPrice = [];
    this.total = 0;
  }
  getItemsList() {
    // Retorna lista de itens do pedido
    return this.items;
  }
  printOrder() {
    // Imprime o pedido
    let printItems = this.items.join(", ");
    return (
      `---------------------------------------------------------------------------\n` +
      `Itens: ${this.items.length > 0 ? this.items : "vazio"} | Valor Total: ${
        this.total
      } | Quantidade de itens: ${this.items.length}` +
      `\n---------------------------------------------------------------------------\n`
    );
  }
}

module.exports = Order;
