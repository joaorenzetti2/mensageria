const amqp = require ('amqplib');

const rabbitmq_url = require ('amqp://localhost');
const QUEUE_NAME   = require ('task_queue');

async function processMessage(messageContent) {
    console.log(`Processando mensagem: ${messageContent}`);
    await new Promise ((resolve) => setTimeout(resolve, 2000));
    console.log(`Processo concluído: ${messageContent}`);
}

async function consumeMessage() {
    try {
        const connection = await amqp.connect(rabbitmq_url);
        const channel    = await connection.createChannel();
        
        await channel.assertQueue(QUEUE_NAME, {durable : true});

        console.log(`Conectado ao RabbitMQ. Aguardando mensagens "${QUEUE_NAME}"...`);

        channel.consume(
            QUEUE_NAME,
            async (message) => {
              if (message !== null) {
                const content = message.content.toString();
      
                try {
                  await processMessage(content);
      
                  channel.ack(message);
                } catch (error) {
                  console.error('Falha ao carregar conteudo da mensagem:', error);
                  
                  channel.nack(message);
                }
              }
            },
            { noAck: false }
          );
        } catch (error) {
          console.error('Falha na conexão ao RabbitMQ:', error);
          setTimeout(consumeMessage, 3000);
        }
    }

    consumeMessage();
