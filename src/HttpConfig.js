// import axios from "axios";
// export default axios.create({
//     baseURL: 'http://127.0.0.1:8000/api/',
//     headers: {
//         "Content-type": "application/json"
//     }
// });

import axios from "axios";

const http = () => {
	const defaultOptions = {
		baseURL: "http://m-shop-mm.herokuapp.com/api/",
		headers: {
			"Content-type": "application/json",
		},
	};

	// Create instance
	let instance = axios.create(defaultOptions);

	// Set the AUTH token for any request
	instance.interceptors.request.use(function (config) {
		let token = localStorage.getItem("m-shop-token")
			? JSON.parse(localStorage.getItem("m-shop-token"))
			: "";
		config.headers.Authorization = token ? `Bearer ${token}` : "";
        // console.log(token);
		return config;
	});

	return instance;
};

export default http();
