import { z } from 'zod';
import { ClienteCreatedBody } from '../controllers/ClienteController';
import database from '../database/prisma';
import moment from 'moment';

export default class ClienteRepository {
    public async create(cliente: ClienteCreatedBody) {
        return database.cliente.create({
            data: {
                nome: cliente.nome,
                numero_processo: cliente.numero_processo,
                descricao: cliente.descricao
            }
        });
    }

    public async findClienteByNumeroProcesso(numero_processo: string) {
        return database.cliente.findFirst({
            where: {
                numero_processo
            }
        });
    }

    public async findById(id: string) {
        return database.cliente.findFirst({
            where: {
                id
            }
        });
    }

    public async findAll() {
        return database.cliente.findMany();
    }

    public async update(id: string, cliente: ClienteCreatedBody) {
        return database.cliente.update({
            where: {
                id
            },
            data: {
                nome: cliente.nome,
                numero_processo: cliente.numero_processo,
                descricao: cliente.descricao,
                data_atualizacao: moment().format('YYYY-MM-DD HH:mm')
        }
    });

    }

    public async delete(id: string) {
        return database.cliente.delete({
            where: {
                id
            }
        });
    }
}