'use strict';


// Require the framework and instantiate it
const server = require('fastify')({ logger: true });

// Declare a route
server.get('/', async (request, reply) => {
  const min = process.env.MIN_NUMBER;
  const max = process.env.MAX_NUMBER;

  reply.send({ number: Math.floor(Math.random() * (max - min + 1)) + min });
});

// Run the server!
const start = async () => {
  try {
    await server.listen(process.env.SERVER_PORT);
    server.log.info(`server listening on ${ server.server.address().port }`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
