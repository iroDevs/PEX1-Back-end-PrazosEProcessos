import Fastify from 'fastify';

import fastifyCors from '@fastify/cors';
import ClienteRoute from './routes/ClienteRoute';
import PrazosRoute from './routes/PrazosRoute';
import { HandlerError } from './erros/HandlerErros';
import Teste from './utils/Emails/html/teste';
import { sendEmail } from './utils/Emails/SendEmail';

const app = Fastify({ logger: true });


app.register(fastifyCors, { origin: '*' })

const testeHtml = Teste()
/*const objEmail = {
    sendTo:"pedrohenriquelouresoliveira@gmail.com",
    subject:"Teste",
    html: testeHtml
}
sendEmail(objEmail)*/


//error handler
app.setErrorHandler(HandlerError);

//rouutes
app.register(ClienteRoute, { prefix: '/user' });
app.register(PrazosRoute, { prefix: '/prazos' });
export default app;