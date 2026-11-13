import express, { Request, Response } from 'express';
import * as routers from './routes';

const server = express()

server.use(express.json())

server.use("/api/pdf", routers.routerPDF)


server.listen(4500)