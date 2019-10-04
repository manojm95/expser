'use strict'
const awsServerlessExpress = require('aws-serverless-express');
import { APIGatewayEvent, Context, Handler } from "aws-lambda";

import app from "./app";
const server = awsServerlessExpress.createServer(app);

const handler: Handler = (event: APIGatewayEvent ,context: Context) => {
    return awsServerlessExpress.proxy(server,event,context,"PROMISE").promise;
}

export = handler;