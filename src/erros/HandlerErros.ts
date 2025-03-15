import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";



export async function HandlerError(error: FastifyError, request: FastifyRequest, reply: FastifyReply) {
    console.log(error);

    if (error instanceof ZodError) {
        let messageError = error.errors[0].message;
        messageError = messageError + ' ' + error.errors[0].path.join(' ');
        return reply.status(400).send({ message: messageError });
    }

    if (error?.statusCode && error?.message) {
        const { statusCode, message } = error;
        return reply.status(statusCode).send({ message });
    }

    return reply.status(500).send({ message: 'Erro interno no servidor' });
}