import { ClienteCreatedBody } from "../../controllers/Clientes/create-client-controller";
import { ClienteAlerdyExist } from "../../erros/user-alerdy-exist";
import createdCliente from "../../repositories/create-cliente";
import verifyClienteExistByNumberOfProcess from "../../repositories/verify-cliente-exist-by-number-of-process";


export default async function createClientService(body: ClienteCreatedBody) {
    try {
        const existeNumeroProcesso = await verifyClienteExistByNumberOfProcess(body.numero_processo)

        if (existeNumeroProcesso) {
            throw new ClienteAlerdyExist()
        }

        const cliente = await createdCliente(body)

        return cliente

    } catch (error) {
        throw new Error('Erro ao criar cliente')
    }

}