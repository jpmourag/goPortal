import { Router } from "express";
import { CloseSolicitationController } from "../../../../../modules/solicitations/useCases/closeSolicitation/CloseSolicitationController";
import { CreateSolicitationController } from "../../../../../modules/solicitations/useCases/createSolicitation/CreateSolicitationController";
import { GetAllSolicitationsController } from "../../../../../modules/solicitations/useCases/getAllSolicitations/GetAllSolicitationsController";
import { ListSolicitationsController } from "../../../../../modules/solicitations/useCases/listSolicitations/ListSolicitationsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const solicitationsRouter = Router();

const createSolicitationController = new CreateSolicitationController();
const listSolicitationsController = new ListSolicitationsController();
const closeSolicitationController = new CloseSolicitationController();
const getAllSolicitationsController = new GetAllSolicitationsController();

solicitationsRouter.use(ensureAuthenticated);

solicitationsRouter.post("/", createSolicitationController.handle);
solicitationsRouter.get("/", listSolicitationsController.handle);
solicitationsRouter.post("/close", closeSolicitationController.handle);
solicitationsRouter.get("/all", getAllSolicitationsController.handle);

export { solicitationsRouter };
