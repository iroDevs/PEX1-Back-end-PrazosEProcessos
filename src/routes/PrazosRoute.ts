import { FastifyInstance } from "fastify";
import PrazoController from "../controllers/PrazoController";

export default async function PrazosRoute(router: FastifyInstance) {
    const prazoController = new PrazoController();

    router.get('/', prazoController.getAllPrazos.bind(prazoController));

    router.post('/', prazoController.createdPrazo.bind(prazoController));

    router.get('/:id', prazoController.getPrazoById.bind(prazoController));

    router.put('/:id', prazoController.updatePrazo.bind(prazoController));

    router.delete('/:id', prazoController.deletePrazo.bind(prazoController));

    return router;

}