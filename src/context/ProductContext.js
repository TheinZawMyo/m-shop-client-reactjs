import { createContext, useReducer } from "react";
import { ProductReducer } from "../reducers/ProductReducer";

export const ProductContext = createContext();

const initialState = {
	per_page: null,
	isLoading: true,
	current_page: null,
	total: 0,
	products: [],
	detail: {}
};

const ProductContextProvider = (props) => {
	const [state, dispatch] = useReducer(ProductReducer, initialState);

	return (
		<ProductContext.Provider
			value={{
				products: state.products,
				per_page: state.per_page,
				current_page: state.current_page,
				total: state.total,
				dispatch,
				isLoading: state.isLoading
			}}
		>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
