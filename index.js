const http = require("http"); // Importando o módulo http do Node.js
const server = http.createServer(); // Criando o servidor http
const socketIO = require("socket.io"); // Importando o socket.io
const io = socketIO(server); // Criando o servidor socket usando o servidor http criado
const welcome = require("./events/welcome");
const ask = require("./events/chat");
io.on("connection", (socket) => {
  welcome(socket)
  console.log(`Um cliente acaba de entrar ${socket.id}`);
  ask(socket)
  socket.on("disconnect", () => {
    console.log(`Cliente desconectado (ID: ${socket.id})`);
  });
});
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Servidor socket rodando na porta ${PORT}`);
});
