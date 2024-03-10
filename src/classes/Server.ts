
import {Response,Express, Request} from 'express'
export default class Server {

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