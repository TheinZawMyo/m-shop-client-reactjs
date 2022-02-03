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

		case "UPDATE_SUCCESS":
			return {
				...state,
				user: action.payload.user,
			}

		case "USER_DETAIL":
			return {
				...state,
				user: action.payload.user_detail,
			}

		case "LOGOUT":
			return {
				...state, 
				user: "",
				token: "",
				errorMessage: ""
			};
		default:
			break;
	}
};
