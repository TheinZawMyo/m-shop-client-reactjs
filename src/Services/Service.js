import http from "../HttpConfig";

class Service {
    getAllItem(){
        return http.get('/products/list');
    }
}

export default new Service();