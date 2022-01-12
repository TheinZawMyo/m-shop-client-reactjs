import Service from "../Services/Service";
export const GetItem = (dispatch, keyword, page) => {
	Service.getAllItem(page, keyword)
		.then((res) => {
			dispatch({
				type: "RETRIEVE_SUCCESS",
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

export const RegisterUser = (authDispatch, values) => {
	const { name, email, password } = values;
	Service.register(name, email, password)
		.then((res) => {
			let data = res.data;
			console.log(data);
			if (data.status === 0) {
				authDispatch({ type: "REGISTER_ERROR", payload: data });
			} else {
				localStorage.setItem("m-shop-user", JSON.stringify(data));
				authDispatch({ type: "REGISTER_SUCCESS", payload: data });
			}
		})
		.catch((err) => console.log(err));
};

export const LoginUser = (authDispatch, values) => {
	const { email, password } = values;
	Service.login(email, password)
		.then((res) => {
			let data = res.data;
			console.log(data);
			if (data.status === 0) {
				authDispatch({ type: "LOGIN_ERROR", payload: data });
			} else {
				localStorage.setItem("m-shop-user", JSON.stringify(data));
				authDispatch({ type: "LOGIN_SUCCESS", payload: data });
			}
		})
		.catch((err) => console.log(err));
};
