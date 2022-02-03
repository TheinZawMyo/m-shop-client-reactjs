import http from "../HttpConfig";

class Service {
	getAllItem(page, keyword) {
		return http.get(`/products/list?query=${keyword}&page=${page}`);
	}

	getDetail(id) {
		return http.get(`/products/detail?product_id=${id}`);
	}

	register(name, email, password) {
		return http.post("/register", {
			name,
			email,
			password,
		});
	}

	login(email, password) {
		return http.post("/login", {
			email,
			password,
		});
	}

	updateProfile(phone, address, id) {
		return http.post("/update/profile", {
			phone,
			address,
			id,
		});
	}

	userDetail(id) {
		return http.get(`/user/detail?id=${id}`);
	}

	placeOrder(orders) {
		return http.post("/order", {
			orders,
		});
	}
}

export default new Service();
