# Mensageria
Mensageria com RabbitMQ

Exercício: Implementação Básica de Sistema de Mensageria

Objetivo
  Compreender os conceitos de mensageria e suas técnicas, aplicando-os na construção de uma aplicação básica utilizando uma das seguintes tecnologias: RabbitMQ, BullMQ ou Kafka.

Descrição
  A mensageria é uma técnica fundamental em arquiteturas de software modernas, permitindo a comunicação assíncrona entre diferentes partes de um sistema. Neste exercício, você irá explorar os conceitos de mensageria e implementar um sistema simples que utiliza filas de mensagens para processar tarefas de forma eficiente.

Requisitos 
Estudo Prévio:

Compreender os conceitos básicos de mensageria: filas, produtores, consumidores, tópicos, partições, etc.
Conhecer as diferenças e casos de uso de RabbitMQ, BullMQ e Kafka.
Lembre-se de fazer um resumo desses conceitos em um arquivo txt junto de sua atividade
Implementação:

Escolher uma das tecnologias de mensageria mencionadas (RabbitMQ, BullMQ ou Kafka).
Desenvolver uma aplicação que consiste em:
Produtor: Envia mensagens/tarefas para uma fila.
Consumidor: Recebe e processa as mensagens/tarefas da fila.
Tecnologias Sugeridas:

Linguagem de programação: JavaScript/TypeScript, Python, Java ou outra de sua preferência.
Ferramentas: Utilize Docker para facilitar a configuração do ambiente de mensageria, se necessário.


- Desenvolvimento da Aplicação
Escolha uma das tecnologias de mensageria e desenvolva os seguintes componentes:

a. Produtor
Função: Enviar mensagens/tarefas para a fila.
Exemplo de Tarefa: Processamento de pedidos, envio de e-mails, geração de relatórios, etc.

============================================================================================

# Conceitos básicos da mensageria: 

 - Descrição: A mensageria é uma técnica fundamental em arquiteturas de software modernas, permitindo a comunicação assíncrona entre diferentes partes de um sistema. 

 - Filas: As filas são um armazenamento temporário de mensagens. Funciona como FIFO (First In First Out), as mensagens recebidas são processadas por ordem de chegada.

 - Produtor: É o componente que cria as mensagens e envia as mensagens para a fila ou tópico. 

 - Consumidor: É quem recebe e processa as mensagens da fila ou tópico.

 - Tópico: São os canais de distribuição para mensagens em sistemas de publicação/assinatura (Pub/Sub). Em vez de direcionar as mensagens para uma fila, elas são publicadas em um tópico e ficam disponíveis para os consumidores. 

 - Partições: São divisões de um tópico, permitindo que um mesmo tópico seja distribuído e processado em paralelo.

 - Exchange: O conceito de exchange ou troca, é exclusivo do RabbitMQ. Uma exchange recebe mensagens dos produtores e decide para quais filas elas devem ser direcionadas.

 - Persistência: Nos sistemas de mensageria, mensagens podem ser voláteis ou persistentes, persistentes ficam armazenadas em disco para evitar falha do sistema, as voláteis ficam salvas em memória para rápido acesso.

 - Acknowledge: O acknowledge é uma confimação enviada por um consumidor para um broker, indicando que a mensagem foi processada com sucesso, caso não envie um ack a mensagem pode ser reenviada para garantir.
 Também temos o Negative Acknowledge que é é uma resposta que um consumidor envia ao broker para indicar que não conseguiu processar a mensagem corretamente.

 - DLQ: É uma fila especial usada para armazenar mensagens que não puderam ser processadas com sucesso após um determinado número de tentativas.


 -> Diferenças entre RabbitMQ, BullMQ e Kafka: 
 - RabbitMQ: utilizado em sistemas que precisam de comunicação assíncrona confiável e gerenciamento de filas. Usa exchanges e filas para rotear mensagens e oferece várias estratégias de roteamento. Não é o ideal para grandes volumes de dados em streaming.
 - BullMQ: é uma biblioteca de filas de mensagens para Node.js baseada em Redis. Foi projetada para filas de trabalho de alta performance, ótima escolha para aplicativos Node.js que precisam gerenciar filas simples e rápidas. Menos robusto para confiabilidade e retenção de mensagens.
 - Kafka: é uma plataforma com foco em processamento de grandes volumes de dados em tempo real. Usa um modelo baseado em logs distribuídos e permite alta disponibilidade e escalabilidade. Complexo de configurar, melhor para Big Data e eventos contínuos.
 
