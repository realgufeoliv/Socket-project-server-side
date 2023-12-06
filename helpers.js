/*Builda a mensagem enviada e decodifica a recebida*/
buildMessage = (step,message) => {
    return JSON.stringify({step,message});
  }
  getMessage = (message) => {
    return JSON.parse(message).message;
}
  module.exports = {buildMessage, getMessage};