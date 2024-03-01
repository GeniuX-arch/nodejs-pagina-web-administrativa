import {Response,Express, Request} from 'express'



class Routes {
    private app:Express;
    private port:number;
    constructor(app:Express, port:number){
        this.app=app;
        this.port=port;

    }

    public routesn(): void {
        this.app.get('/hola', function (req:Request,res:Response){
            res.send("hola");
        });
        
    }

    public run():void{
        this.app.listen(this.port);
    }

}

export default Routes;