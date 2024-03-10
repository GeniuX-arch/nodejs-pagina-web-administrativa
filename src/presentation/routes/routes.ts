import Routes from "../../classes/Routes";
import Controllers from "../../classes/Controllers";
import app from "../../app";



const controller = [
    new Controllers('/hola',
    ()=>'Hola',
    ()=>console.log("no funciona"))

];



const routes = new Routes(app,controller);
routes.routes();