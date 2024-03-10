
import {Response,Express, Request} from 'express'
export default class Controllers {
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