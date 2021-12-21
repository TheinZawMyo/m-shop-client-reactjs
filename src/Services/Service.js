import http from "../HttpConfig";

class Service {
    getAllItem(keyword){
        // console.log(keyword)
        return http.post(`/products/list?query=${keyword}`);
    }
}

export default new Service();