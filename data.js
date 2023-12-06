/**
 * Dados do cardápio e opções
 */
pizzas = [
  {name:"Pizza de de Portuguesa", price: 38},
    {name:"Pizza de Queijo", price: 43},
    {name:"Pizza de Calabresa", price: 48},
    {name:"Pizza de Frango", price: 47},
    {name:"Pizza de Marguerita", price: 39},
    {name:"Pizza de Mussarela", price: 35},
    {name:"Pizza de Peperoni", price: 42},
    {name:"Pizza de Quatro Queijos", price: 46},
    {name:"Pizza de Rúcula com Tomate Seco", price: 44},
    {name:"Pizza de Strogonoff", price: 40},
    {name:"Pizza de Vegetariana", price: 41},
    {name:"Pizza de Brócolis", price: 39},
    {name:"Pizza de Lombo Canadense", price: 50},
    {name:"Pizza de Lombo Canadense com Catupiry", price: 55},
    {name:"Pizza de Carne Seca", price: 45},
    {name:"Pizza de Carne Seca com Catupiry", price: 50},
];
esfihas = [
  {name:"Esfiha de Portuguesa", price: 11},
    {name:"Esfiha de Queijo", price: 13},
    {name:"Esfiha de Calabresa", price: 16},
    {name:"Esfiha de Frango", price: 18},
    {name:"Esfiha de Marguerita", price: 10},
    {name:"Esfiha de Mussarela", price: 10},
    {name:"Esfiha de Peperoni", price: 18},
    {name:"Esfiha de Quatro Queijos", price: 19},
    {name:"Esfiha de Rúcula com Tomate Seco", price: 14},
    {name:"Esfiha de Strogonoff", price: 16},
    {name:"Esfiha de Vegetariana", price: 17},
    {name:"Esfiha de Brócolis", price: 13},
    {name:"Esfiha de Lombo Canadense", price: 18},
    {name:"Esfiha de Lombo Canadense com Catupiry", price: 20},
    {name:"Esfiha de Carne Seca", price: 16},
    {name:"Esfiha de Carne Seca com Catupiry", price: 19},
];

options = ["Pizzas", "Esfihas", "Bebidas", "Sobremesas"];

payment = ["Dinheiro", "Cartão", "Pix"];

drinks = [
  {name: 'Coca-Cola', price: 5, },
  {name: 'Guaraná', price: 5, },
  {name: 'Fanta', price: 5, },
  {name: 'Água', price: 3, },
  {name: 'Suco de Laranja', price: 8, },
  {name: 'Suco de Uva', price: 8, },
  {name: 'Suco de Maracujá', price:8, },
  {name: 'Suco de Morango', price: 8, },
  {name: 'Suco de Abacaxi', price: 8, },
  {name: 'Cerveja', price: 12, },
];

desserts = [{name:"Pudim",price:8},{name:'Sorvete', price:7}, {name:'Petit Gateau', price:16},{name:'Torta de Limão', price:9}];

module.exports  = {
    esfihas,
    pizzas,
    options,
    drinks,
    desserts,
    payment
}