import cors from "cors";
import morgan from "morgan";
import apiRouter from "../api/routes";

export default app => {
    app.use(cors());
    app.use(morgan("dev"));
    app.use("/api", apiRouter);
};
