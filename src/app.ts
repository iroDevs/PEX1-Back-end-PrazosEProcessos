import Fastify from 'fastify';

import fastifyCors from '@fastify/cors';
import ClienteRoute from './routes/ClienteRoute';
import PrazosRoute from './routes/PrazosRoute';
import { HandlerError } from './erros/HandlerErros';

const app = Fastify({ logger: true });
//handler de erro
/*app.setErrorHandler((error, request, reply) => {
    console.log(error);
    reply.status(500).send({ message: 'Erro interno no servidor' });
});*/

app.register(fastifyCors, { origin: '*' })

//error handler
app.setErrorHandler(HandlerError);

//rouutes
app.register(ClienteRoute, { prefix: '/user' });
app.register(PrazosRoute, { prefix: '/prazos' });
export default app;