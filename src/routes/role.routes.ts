import * as express from "express";
import { RoleController } from "../controllers/role.controller";
const Router = express.Router();


Router.post("/", RoleController.getInstance().create);

Router.get("/", RoleController.getInstance().getAll);

Router.get("/:id", RoleController.getInstance().get);

Router.delete("/:id", RoleController.getInstance().get);



export { Router as roleRouter };