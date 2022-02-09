import react, { createContext, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

let user = localStorage.getItem("m-shop-user")
	? JSON.parse(localStorage.getItem("m-shop-user"))
	: "";
let token = localStorage.getItem("m-shop-user")
	? JSON.parse(localStorage.getItem("m-shop-token"))
	: "";

export const initialState = {
	user: "" || user,
	token: "" || token,
	errorMessage: "",
	orderList: [],
};
const AuthContextProvider = (props) => {
	const [auth, authDispatch] = useReducer(AuthReducer, initialState);
	return (
		<AuthContext.Provider
			value={{
				user: auth.user,
				token: auth.token,
				message: auth.errorMessage,
				orderList: auth.orderList,
				authDispatch,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
