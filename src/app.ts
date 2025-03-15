import Fastify from 'fastify';
import UserRoute from './routes/UserRoute';
import fastifyCors from '@fastify/cors';

const app = Fastify({ logger: true });

app.register(fastifyCors, { origin: '*' })

app.register(UserRoute, { prefix: '/user' });

export default app;