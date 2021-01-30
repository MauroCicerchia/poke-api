import expressInit from "./init/express";
import mongoInit from "./init/mongo";
import config from "./config";
import express from "express";
const app = express();
const { port } = config;

expressInit(app);
mongoInit().then(() =>
    app.listen(port, () => console.log("Listening in port", port))
);
