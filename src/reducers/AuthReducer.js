export const AuthReducer = (state, action) => {
	switch (action.type) {
		case "REGISTER_SUCCESS":
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
			};

		case "REGISTER_ERROR":
			return {
				...state,
				errorMessage: action.payload.error,
			};

		case "LOGIN_SUCCESS":
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
			};

		case "LOGIN_ERROR":
			return {
				...state,
				errorMessage: action.payload.error,
			};

		case "LOGOUT":
			return {
				...state, 
				isCompleted:false,
				user: "",
				token: "",
				errorMessage: ""
			};
		default:
			break;
	}
};
