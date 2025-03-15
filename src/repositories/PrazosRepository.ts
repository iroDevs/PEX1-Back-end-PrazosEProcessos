import database from '../database/prisma';
import moment from 'moment';



export default class PrazosRepository {
    public async create(prazo: any) {
        return database.prazos.create({
            data: {
                id_cliente: prazo.id_cliente,
                tipo_prazo: prazo.tipo_prazo,
                data_audiencia: prazo.data_audiencia,
                data_inicio: prazo.data_inicio,
                data_fim: prazo.data_fim
            }
        })
    }

    public async findByClienteId(cliente_id: string) {
        return database.prazos.findMany({
            where: {
                id_cliente: cliente_id
            }
        })
    }

    public async findById(id: string) {
        return database.prazos.findFirst({
            where: {
                id
            }
        })
    }

    public async findAll() {
        return database.prazos.findMany();
    }

    public async update(id: string, prazo: any) {
        return database.prazos.update({
            where: {
                id
            },
            data: {
                id_cliente: prazo.id_cliente,
                tipo_prazo: prazo.tipo_prazo,
                data_audiencia: prazo.data_audiencia,
                data_inicio: prazo.data_inicio,
                data_fim: prazo.data_fim,
                data_atualizacao: moment().format('YYYY-MM-DD HH:mm')
            }
        })

    }

    public async delete(id: string) {
        return database.prazos.delete({
            where: {
                id
            }
        })
    }
}