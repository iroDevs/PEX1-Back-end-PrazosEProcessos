import Fastify from 'fastify';

import fastifyCors from '@fastify/cors';
import ClienteRoute from './routes/ClienteRoute';

const app = Fastify({ logger: true });
//handler de erro
app.setErrorHandler((error, request, reply) => {
    console.log(error);
    reply.status(500).send({ message: 'Erro interno no servidor' });
});
app.register(fastifyCors, { origin: '*' })

app.register(ClienteRoute, { prefix: '/user' });

export default app;