import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import PrazoSerivice from '../services/PrazoService';
import PrazosRepository from '../repositories/PrazosRepository';


const PrazoCreatedSchema = z.object({
    id: z.string().optional(),
    id_cliente: z.string(),
    tipo_prazo: z.enum(['Audiência', 'Prazo']),
    data_audiencia: z.string().nullable(),
    data_inicio: z.string().nullable(),
    data_fim: z.string().nullable()
})

export type PrazoCreatedBody = z.infer<typeof PrazoCreatedSchema>;

interface PrazoParams {
    id: string;
}

export default class PrazoController {
    private prazoService: PrazoSerivice;

    constructor(){
        const repository = new PrazosRepository();
        this.prazoService = new PrazoSerivice(repository);
    }

    public async createdPrazo(req: FastifyRequest, reply:FastifyReply) {
        try {
            const body: PrazoCreatedBody = PrazoCreatedSchema.parse(req.body);
            const response = await this.prazoService.createdPrazo(body);
            return reply.status(201).send(response);
        } catch (error) {
           throw error;
        }
    }

    public async getPrazoById(req: FastifyRequest, reply:FastifyReply) {

        try {
            const params= req.params as PrazoParams;
            const id = params.id;
            const cliente = await this.prazoService.getPrazoById(id);
            return reply.status(200).send(cliente);

        } catch (error) {
            throw error;
        }

    }

    public async getAllPrazos(req: FastifyRequest, reply:FastifyReply) {
        try {
            throw new Error('Erro');
            const clientes = await this.prazoService.getAllPrazos();
            return reply.status(200).send(clientes);
        } catch (error) {
            throw error;
        }
    }

    public async updatePrazo(req: FastifyRequest, reply:FastifyReply) {
        try {
            const { id } = req.params as PrazoParams;
            const body: PrazoCreatedBody = PrazoCreatedSchema.parse(req.body);

            const cliente = await this.prazoService.updatePrazo(id, body);
            return reply.status(200).send(cliente);
        } catch (error) {
            throw error;
        }
    }

    public async deletePrazo(req: FastifyRequest, reply:FastifyReply) {
        try {
            const { id } = req.params as PrazoParams;
            const cliente = await this.prazoService.deletePrazo(id);
            return reply.status(200).send(cliente);
        } catch (error) {
            throw error;
        }
    }


}