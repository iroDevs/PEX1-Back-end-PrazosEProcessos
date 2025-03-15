import { PrazoNotFound } from "../erros/prazo-not-found";
import PrazosRepository from "../repositories/PrazosRepository";



export default class PrazoSerivice {
    constructor(
        private readonly PrazoRepository: PrazosRepository
    ){}

    public async createdPrazo(prazo: any) {

        return this.PrazoRepository.create(prazo);
    }

    public async getPrazoById(id: string) {
        return this.PrazoRepository.findById(id);
    }

    public async getAllPrazos() {
        return this.PrazoRepository.findAll();
    }

    public async updatePrazo(id: string, prazo: any) {
        return this.PrazoRepository.update(id, prazo);
    }

    public async deletePrazo(id: string) {
        const prazoExist = await this.PrazoRepository.findById(id);

        if (!prazoExist) {
            throw new PrazoNotFound();
        }

        return this.PrazoRepository.delete(id);
    }
}