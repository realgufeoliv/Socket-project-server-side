class Order {
    constructor() {
        this.id = 0;
        this.date = new Date();
        this.items = [];
        this.total = 0;
        this.status = "pending";
        this.adress = "";
    }
    addItem(item) {
        this.total += item.price;
        console.log(item.name);
        this.items.push(item.name);
        console.log(this.items);
    }
    removeItem(item) {
        this.total -= item.price;
        this.items.splice(this.items.indexOf(item), 1);
    }
    statusUpdate(status) {
        this.status = status;
    }
    adressDelivery(adress) {
        this.adress = adress;
    }
    getItemsList() {
        return this.items;
    }
    printOrder(){
        let printItems = this.items.join(', ');
        return`---------------------------------------------------------------------------\n`+ `Itens: ${this.items ? this.items: 'vazio'} | Valor Total: ${this.total} | Quantidade de itens: ${this.items.length}`+`\n---------------------------------------------------------------------------\n`;

    }
}

module.exports = Order;