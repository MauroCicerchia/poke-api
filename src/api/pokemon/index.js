import express from "express";
import Controller from "./pokemon.controller";
import Service from "../../domain/services/pokemon.service";

let router = express.Router();
let { route } = require("endpoint-handler")(router);
const controller = new Controller();

router.use((req, res, next) => {
  req.service = new Service(req.user);
  next();
});

route.get("/", controller.get)
route.get("/:id", controller.getOne);
route.get("/:id/full", controller.getOneFull);

export default router;
