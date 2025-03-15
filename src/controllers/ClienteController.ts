import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import ClienteService from '../services/ClienteService';
import ClienteRepository from '../repositories/ClienteRepository';



const clienteCreatedSchema = z.object({
    id: z.string().optional(),
    nome: z.string(),
    numero_processo: z.string(),
    descricao: z.string(),
})

export type ClienteCreatedBody = z.infer<typeof clienteCreatedSchema>;

interface ClienteParams {
    id: string;
}

export default class ClienteController {
    private clienteService: ClienteService;

    constructor(){
        const repository = new ClienteRepository();
        this.clienteService = new ClienteService(repository);
    }

    public async createdCliente(req: FastifyRequest, reply:FastifyReply) {
        try {
            const body: ClienteCreatedBody = clienteCreatedSchema.parse(req.body);
            const cliente = await this.clienteService.createCliente(body);
            return reply.status(201).send(cliente);
        } catch (error) {
           throw error;
        }
    }

    public async getClienteById(req: FastifyRequest, reply:FastifyReply) {

        try {
            const params= req.params as ClienteParams;
            const id = params.id;
            const cliente = await this.clienteService.getClienteById(id);
            return reply.status(200).send(cliente);

        } catch (error) {

        }

    }

    public async getAllClientes(req: FastifyRequest, reply:FastifyReply) {
        try {
            const clientes = await this.clienteService.getAllClientes();
            return reply.status(200).send(clientes);
        } catch (error) {

        }
    }

    public async updateCliente(req: FastifyRequest, reply:FastifyReply) {
        try {
            const { id } = req.params as ClienteParams;
            const body: ClienteCreatedBody = clienteCreatedSchema.parse(req.body);

            const cliente = await this.clienteService.updateCliente(id, body);
            return reply.status(200).send(cliente);
        } catch (error) {
            throw error;
        }
    }

    public async deleteCliente(req: FastifyRequest, reply:FastifyReply) {
        try {
            const { id } = req.params as ClienteParams;
            const cliente = await this.clienteService.deleteCliente(id);
            return reply.status(200).send(cliente);
        } catch (error) {
            throw error;
        }
    }


}