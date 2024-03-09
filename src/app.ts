import {Server, Controllers, Routes} from './presentation/routes/routes'
import express, {} from 'express'
const app= express();

const server = new Server(app,3000);
server.run()

const controller = [new Controllers('/hola',
()=>'Hola',
()=>console.log("no funciona"))];
const routes = new Routes(app,controller);
routes.routes();
