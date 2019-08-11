'use strict';


// Require the framework and instantiate it
const server = require('fastify')({ logger: true });

// Declare a route
server.get('/', async (request, reply) => {
  console.log('123');

  const min = 1;
  const max = 1000;

  reply.send({ number: Math.floor(Math.random() * (max - min + 1)) + min });
});

// Run the server!
const start = async () => {
  try {
    await server.listen(3000);
    server.log.info(`server listening on ${ server.server.address().port }`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
