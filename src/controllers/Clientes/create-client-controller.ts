import { FastifyReply, FastifyRequest } from "fastify";
import createClientService from "../../services/Clientes/created-client-service";
import { z } from "zod";

const clienteCreatedSchema = z.object({
    nome: z.string(),
    numero_processo: z.string(),
    descricao: z.string(),
})


export type ClienteCreatedBody = z.infer<typeof clienteCreatedSchema>;

export default async function createClientController(req: FastifyRequest, res: FastifyReply) {
 const data = clienteCreatedSchema.parse(req.body);
 const response = await createClientService(data);
  
    return response
}