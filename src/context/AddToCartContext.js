import { useReducer, createContext, useEffect } from "react";
import { CartReducer } from "../reducers/CartReducer";

export const AddToCartContext = createContext();


const AddToCartContextProvider = (props) => {
	const [cart, cartDispatch] = useReducer(CartReducer, [], () => {
		const cartData = localStorage.getItem("m-shop-cart");
		return cartData ? JSON.parse(cartData) : [];
	});

	useEffect(() => {
		localStorage.setItem("m-shop-cart", JSON.stringify(cart));
        console.log(cart);
	}, [cart]);

	return (
		<AddToCartContext.Provider value={{ cart: cart, cartDispatch }}>
			{props.children}
		</AddToCartContext.Provider>
	);
};

export default AddToCartContextProvider;
