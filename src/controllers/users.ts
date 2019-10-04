import express, { Router, Request, Response } from "express";


export class UserController {
    async getUsersType1(req: Request, res: Response) {
        res.send('Hi User1');
      }
    
      async getUsersType2(req: Request, res: Response) {
        res.send('Hi User2');
      }
}


export default function configure(
  router = Router(),
  controller = new UserController()
) {
    router.get("/getUsersType1", controller.getUsersType1);
    router.get("/getUsersType2", controller.getUsersType2);  
  return router
}