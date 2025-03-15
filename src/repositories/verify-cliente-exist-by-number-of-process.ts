import database from "../database/prisma";

export default async function verifyClienteExistByNumberOfProcess(numberOfProcess: string) {

    const existeNumeroProcesso = await database.cliente.findFirst({
        where: {
            numero_processo: numberOfProcess
        }
    })

    return existeNumeroProcesso
}