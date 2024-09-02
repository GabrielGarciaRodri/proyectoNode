import {connect} from '../../helpers/db/connect.js'


export class lugar extends connect {
    static instance; 
    constructor() {
        if(typeof lugar.instance === "object") {
            return lugar.instance;
        }
        super();
        this.collection = this.db.collection("lugar");
        lugar.instance = this;
        return this;
    }

    async getAllLugares(){
        let res = await this.collection.find({}).toArray()
        return res;
    }

}