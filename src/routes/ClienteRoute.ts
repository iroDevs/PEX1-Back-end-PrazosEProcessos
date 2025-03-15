import { FastifyInstance } from "fastify";
import ClienteController from "../controllers/ClienteController";

export default async function ClienteRoute(router: FastifyInstance) {
    const clienteController = new ClienteController();

    router.get('/', clienteController.getAllClientes.bind(clienteController));

    router.post('/', clienteController.createdCliente.bind(clienteController));

    router.get('/:id', clienteController.getClienteById.bind(clienteController));

    router.put('/:id', clienteController.updateCliente.bind(clienteController));

    router.delete('/:id', clienteController.deleteCliente.bind(clienteController));

    return router;

}