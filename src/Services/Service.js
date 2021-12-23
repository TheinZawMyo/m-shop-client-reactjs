import http from "../HttpConfig";

class Service {
    getAllItem(page, keyword){
        return http.get(`/products/list?query=${keyword}&page=${page}`);
    }
}

export default new Service();