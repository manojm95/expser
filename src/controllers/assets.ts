import express, { Router, Request, Response } from "express";

class AssetController {
    async getAssetsType1(req: Request, res: Response) {
        res.send('Hi Asset1');
      }
    
      async getAssetsType2(req: Request, res: Response) {
        res.send('Hi Asset2');
      }
}


export default function configure(
  router = Router(),
  controller = new AssetController()
) {
    router.get("/getAssetsType1", controller.getAssetsType1);
    router.get("/getAssetsType2", controller.getAssetsType2);
  return router
}