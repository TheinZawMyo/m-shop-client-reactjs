export const AuthReducer = (state, action) => {
	switch (action.type) {
		case "REGISTER_SUCCESS":
			return {
				...state,
				isAuth: true,
				user: action.payload.user,
				token: action.payload.token,
			};

		case "REGISTER_ERROR":
			return {
				...state,
                isAuth:false,
				errorMessage: action.payload.error,
			};

		case "LOGIN_SUCCESS":
			return {
				...state,
				isAuth: true,
				user: action.payload.user,
				token: action.payload.token,
			};

		case "LOGIN_ERROR":
			return {
				...state,
                isAuth:false,
				errorMessage: action.payload.error,
			};

		case "LOGOUT":
			return {
				...state, 
				isAuth: false,
				user: "",
				token: "",
				errorMessage: ""
			};
		default:
			break;
	}
};
