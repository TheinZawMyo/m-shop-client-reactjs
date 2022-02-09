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
			// console.log(data);
			if (data.status === 0) {
				authDispatch({ type: "REGISTER_ERROR", payload: data });
			} else {
				localStorage.setItem("m-shop-token", JSON.stringify(data.token));
				localStorage.setItem("m-shop-user", JSON.stringify(data.user));
				authDispatch({ type: "REGISTER_SUCCESS", payload: data });
			}
		})
		.catch((err) => console.log(err));
};

// export const googleLogin = (authDispatch) => {
// 	Service.loginWithGoogle()
// 			.then((res) => {
// 				localStorage.setItem("m-shop-token", JSON.stringify(res.data.token));
// 				localStorage.setItem("m-shop-user", JSON.stringify(res.data.user));
// 				authDispatch({ type: "REGISTER_SUCCESS", payload: res.data });
// 			})
// 			.catch(err => console.log(err));
// }

export const LoginUser = (authDispatch, values) => {
	const { email, password } = values;
	Service.login(email, password)
		.then((res) => {
			let data = res.data;
			console.log(data);
			if (data.status === 0) {
				authDispatch({ type: "LOGIN_ERROR", payload: data });
			} else {
				if(data.user.phone !== null && data.user.address !== null){
					localStorage.setItem('info-completed', 'true');
				}else {
					localStorage.setItem('info-completed', 'false');
				}
				localStorage.setItem("m-shop-token", JSON.stringify(data.token));
				localStorage.setItem("m-shop-user", JSON.stringify(data.user));
				authDispatch({ type: "LOGIN_SUCCESS", payload: data });
			}
		})
		.catch((err) => console.log(err));
};

export const updateProfile = (authDispatch, info, id) => {
	const {phone, address} = info;
	Service.updateProfile(phone, address, id)
		.then((res) => {
			// console.log(res);
			let data = res.data;
			localStorage.setItem("m-shop-user", JSON.stringify(data.user));
			localStorage.setItem('info-completed', 'true');
			authDispatch({ type: "UPDATE_SUCCESS", payload: data });
		})
		.catch((err) => console.log(err));
};

export const userDetail = (authDispatch, id) => {
	Service.userDetail(id)
		.then((res) => {
			// console.log(res);
			authDispatch({ type: "USER_DETAIL", payload: res.data });
		})
		.catch(err => console.log(err));
}
