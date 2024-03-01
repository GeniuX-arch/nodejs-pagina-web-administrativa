
import Routes from './presentation/routes/routes'
import express, {} from 'express'
const app= express();

const routes= new Routes(app,3000);

routes.routesn();
routes.run();