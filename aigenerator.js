class aigenerator{
    constructor(){
        this.api = "https://us-central1-conquer-apps-2ad61.cloudfunctions.net"
        this.headers={"Accept":"application/json","Connection":"Keep-Alive","Content-Type":"application/json; charset=UTF-8","Host":"us-central1-conquer-apps-2ad61.cloudfunctions.net","User-Agent":"okhttp/3.12.1"}
    }
    async generate_message(prompt){
        let req=await fetch(`${this.api}/prod/api.live`,{method:"POST",headers: this.headers,body:JSON.stringify({"n":1,"prompt":prompt,"temperature":0.2,"top_p":0.2})});
        return req.json();
    }
}
module.exports = {aigenerator};