import {Response,Express, Request} from 'express'

export class Routes {
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

export class Controllers {
    private rute:string;
    private body:Function;
    private erro:Function;

    constructor (rute:string, body:Function,erro:Function){
        this.rute=rute;
        this.body=body;
        this.erro=erro;
    }

    public getRute(){
        return this.rute;
    }
    public getHandler(){
        return async (req: Request, res: Response) => {
        try {
            req = this.body();
            return res.status(200).json({message: req})
        }
        catch {
            this.erro();
            return res.status(500).json({ message: 'Ha ocurrido un error en el servidor' })
        }
    }
    }
}


export class Server {
    private app:Express;
    private port:number;
    constructor(app:Express, port:number){
        this.app=app;
        this.port=port;
    }
    public run():void{
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);

        }).on('error', (error: any) => {
            console.error(`Failed to start server: ${error}`);
            process.exit(1); // Exit the process if server fails to start
        });
    }
}
