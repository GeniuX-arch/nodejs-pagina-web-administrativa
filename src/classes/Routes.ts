import {Response,Express, Request} from 'express'
import Controllers from './Controllers';
export default class Routes {
    private app:Express;
    private controllers:Controllers[];

    constructor(app:Express, controllers:Controllers[]){
        this.controllers=controllers;
        this.app=app;
    }

    public routes(): void {
        this.controllers.map((controller)=>{
                this.app.get(controller.getRute(), controller.getHandler());
            }
        )
    }
}

