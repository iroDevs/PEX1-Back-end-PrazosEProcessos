import { ClienteCreatedBody } from "../controllers/Clientes/create-client-controller";
import database from "../database/prisma";

export default async function createdCliente(cliente: ClienteCreatedBody) {

    try {
        const clienteCreated = await database.cliente.create({
            data: {
                nome: cliente.nome,
                numero_processo: cliente.numero_processo,
                descricao: cliente.descricao
            }
        })

        return clienteCreated

    } catch (error) {
        throw new Error('Erro ao criar cliente')
    }
}