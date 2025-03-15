import { FastifyInstance } from "fastify";

export default async function UserRoute(router: FastifyInstance) {

    router.get('/', async (request, reply) => {
        return reply.status(200).send({message: 'Rotas de usuarios'})
    });

    router.post('/', async (request, reply) => {
        return { hello: 'world' }
    });
    
}