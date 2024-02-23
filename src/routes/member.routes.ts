import * as express from "express";
import { MemberController } from "../controllers/member.controller";
const Router = express.Router();


Router.post("/", MemberController.getInstance().create);

Router.get("/", MemberController.getInstance().getAll);

Router.get("/:id", MemberController.getInstance().get);

Router.delete("/:id", MemberController.getInstance().get);



export { Router as memberRouter };