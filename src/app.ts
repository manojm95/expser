import express, { Router, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import UserController from "./controllers/users";
import AssetController from "./controllers/assets";
import ScoreController from "./controllers/score";


const app = express();
app.use(cors());
app.use(bodyParser.json());

const api = Router();

// app.use(AssetController);
api.use('/users', UserController());
api.use('/assets', AssetController());
api.use('/scores', ScoreController());

app.use("/api", api);

app.use((_req, res, _next) => {
    res.status(404).end();
  });
  app.use((_err: any, _req: Request, res: Response, _next: NextFunction) => {
    res.status(500).end();
  });

export default app;
