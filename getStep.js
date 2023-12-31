/*Função auxiliar getStep para encaminhar a mensagem ao step dela*/

const chat = require('./events/chat');
const payment = require('./events/payment');
const helpers = require('./helpers');


const getStep = (socket,message,order)=>{
    let step = JSON.parse(message).step;
    let Parsedmessage = helpers.getMessage(message)
    switch(step){
        case 'chooseOption':
            chat.chooseOption(socket,Parsedmessage,order);
        break;
        case 'chooseMenu':
            chat.chooseMenu(socket,Parsedmessage,order);
        break;
        case 'address':
            payment.address(socket,Parsedmessage);
        break;
        case 'finish':
            payment.finish(socket,Parsedmessage,order);
        break;
        case 'cancel':
            chat.cancel(socket,Parsedmessage,order);
        break;
    }
}
module.exports = {getStep};