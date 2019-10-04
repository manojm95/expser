import express, { Router, Request, Response } from "express";

class ScoreController {
    async getScoreType1(req: Request, res: Response) {
        res.send('Hi Score1');
      }
    
      async getScoreType2(req: Request, res: Response) {
        res.send('Hi Score2');
      }
}


export default function configure(
  router = Router(),
  controller = new ScoreController()
) {
    router.get("/getScoresType1", controller.getScoreType1);
    router.get("/getScoresType2", controller.getScoreType2);
  return router
}