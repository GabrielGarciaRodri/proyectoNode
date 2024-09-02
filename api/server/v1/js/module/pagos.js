import {connect} from '../../helpers/db/connect.js'


export class pagos extends connect {
    static instance; 
    constructor() {
        if(typeof pagos.instance === "object") {
            return pagos.instance;
        }
        super();
        this.collection = this.db.collection("pagos");
        pagos.instance = this;
        return this;
    }

    async getAllPagos(){
        let res = await this.collection.find({}).toArray()
        return res;
    }

}