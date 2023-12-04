const WebSocket = require('ws');
const welcome = require("./events/welcome");
const strings = require("./strings");
const getStep = require("./getStep");
const http = require('http');
const chat = require('./events/chat');
const server = http.createServer();
const wss = new WebSocket.Server({ noServer: true });
const Order = require("./classes/Order");
buildMessage = (step,message) => {
  return JSON.stringify({step,message});
}
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

wss.on('connection', (ws) => {
  let order = new Order();
  welcome(ws);
  ws.on('message', (message) => {
    if (getStep.getMessage(message) == "sair") {
      return ws.close();
    }
    if (getStep.getMessage(message) == "concluir") {
     return  ws.send(JSON.stringify({step:'address',message:strings.paymentOptionsMessage}));
    }
    getStep.getStep(ws,message,order);
    console.log(`Mensagem recebida => ${message}`);
    
  });
  ws.on('close', () => {
    chat.order = null;

    console.log('Conexão fechada');
  });
});

server.listen(3001, () => {
  console.log('Servidor está ouvindo na porta 3001');
});