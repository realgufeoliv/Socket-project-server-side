const ask = (socket)=> 

socket.on("pergunta", (pergunta) => {
    console.log(`Pergunta recebida do cliente (ID: ${socket.id}): ${pergunta}`);
    const resposta = `Resposta para: ${pergunta}`;
    socket.emit("resposta", resposta);
  });
module.exports = ask;