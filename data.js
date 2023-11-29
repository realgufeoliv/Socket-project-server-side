funcionarios = [
  { name: "Luis", cargo: "Gerente" , status: "livre"},
  { name: "Jéssica", cargo: "Atendente", status: "livre" },
  { name: "Laura", cargo: "Atendente", status: "livre" },
  { name: "João", cargo: "Entregador", status: "livre" },
  { name: "Pedro", cargo: "Entregador", status: "livre" },
  { name: "Henrique", cargo: "Entregador", status: "livre" },
];
pizzas = [
  {name:"Pizza de de Portuguesa", price: 38},
    {name:"Pizza de Queijo", price: 38},
    {name:"Pizza de Calabresa", price: 38},
    {name:"Pizza de Frango", price: 38},
    {name:"Pizza de Marguerita", price: 38},
    {name:"Pizza de Mussarela", price: 38},
    {name:"Pizza de Peperoni", price: 38},
    {name:"Pizza de Quatro Queijos", price: 38},
    {name:"Pizza de Rúcula com Tomate Seco", price: 38},
    {name:"Pizza de Strogonoff", price: 38},
    {name:"Pizza de Vegetariana", price: 38},
    {name:"Pizza de Brócolis", price: 38},
    {name:"Pizza de Lombo Canadense", price: 38},
    {name:"Pizza de Lombo Canadense com Catupiry", price: 38},
    {name:"Pizza de Carne Seca", price: 38},
    {name:"Pizza de Carne Seca com Catupiry", price: 38},
];
esfihas = [
  {name:"Esfiha de Portuguesa", price: 38},
    {name:"Esfiha de Queijo", price: 38},
    {name:"Esfiha de Calabresa", price: 38},
    {name:"Esfiha de Frango", price: 38},
    {name:"Esfiha de Marguerita", price: 38},
    {name:"Esfiha de Mussarela", price: 38},
    {name:"Esfiha de Peperoni", price: 38},
    {name:"Esfiha de Quatro Queijos", price: 38},
    {name:"Esfiha de Rúcula com Tomate Seco", price: 38},
    {name:"Esfiha de Strogonoff", price: 38},
    {name:"Esfiha de Vegetariana", price: 38},
    {name:"Esfiha de Brócolis", price: 38},
    {name:"Esfiha de Lombo Canadense", price: 38},
    {name:"Esfiha de Lombo Canadense com Catupiry", price: 38},
    {name:"Esfiha de Carne Seca", price: 38},
    {name:"Esfiha de Carne Seca com Catupiry", price: 38},
];

options = ["Pizzas", "Esfihas", "Bebidas", "Sobremesas"];

bebidas = [
  {name: 'Coca-Cola', price: 5, },
  {name: 'Guaraná', price: 5, },
  {name: 'Fanta', price: 5, },
  {name: 'Água', price: 5, },
  {name: 'Suco de Laranja', price: 5, },
  {name: 'Suco de Uva', price: 5, },
  {name: 'Suco de Maracujá', price: 5, },
  {name: 'Suco de Morango', price: 5, },
  {name: 'Suco de Abacaxi', price: 5, },
  {name: 'Cerveja', price: 5, },
];

sobremesas = [{name:"Pudim",price:8},{name:'Sorvete', price:7}, {name:'Petit Gateau', price:16},{name:'Torta de Limão', price:9}];

module.exports  = {
    funcionarios,
    esfihas,
    pizzas,
    options,
    bebidas,
    sobremesas
}