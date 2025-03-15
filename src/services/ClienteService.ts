import { ClienteCreatedBody } from "../controllers/ClienteController";
import { ClienteAlerdyExist } from "../erros/cliente-alerdy-exist";
import { ClienteNotFound } from "../erros/cliente-not-found";
import ClienteRepository from "../repositories/ClienteRepository";



export default class ClienteService {
    constructor(
        private readonly ClienteRepository: ClienteRepository
    ){}

    public async createCliente(cliente: ClienteCreatedBody) {
        const clienteExist = await this.ClienteRepository.findClienteByNumeroProcesso(cliente.numero_processo);

        if (clienteExist) {
            throw new ClienteAlerdyExist();
        }

        return this.ClienteRepository.create(cliente);
    }

    public async getClienteById(id: string) {
        return this.ClienteRepository.findById(id);
    }

    public async getAllClientes() {
        return this.ClienteRepository.findAll();
    }

    public async updateCliente(id: string, cliente: ClienteCreatedBody) {
        const clienteExist = await this.ClienteRepository.findById(id);

        if (!clienteExist) {
            throw new ClienteNotFound();
        }

        return this.ClienteRepository.update(id, cliente);
    }

    public async deleteCliente(id: string) {
        const clienteExist = await this.ClienteRepository.findById(id);

        if (!clienteExist) {
            throw new ClienteNotFound();
        }

        return this.ClienteRepository.delete(id);
    }

    public async getClienteByNumeroProcesso(numero_processo: string) {
        return this.ClienteRepository.findClienteByNumeroProcesso(numero_processo);
    }


}