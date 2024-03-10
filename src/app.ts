import Server from './classes/Server';
import express, {} from 'express'
const app= express();


export default app;

const server = new Server(app,3000);
server.run()


