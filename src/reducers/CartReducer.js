import { v4 as uuid } from 'uuid';
export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADDTOCART":
            return [
                ...state, {
                    cart_id: uuid(),
                    id: action.payload.product.id,
                    image: action.payload.product.image,
                    name: action.payload.product.p_name,
                    price: action.payload.product.price,
                    specs: action.payload.product.specs,
                    brand: action.payload.product.brand,
                    order: action.payload.count,
                    subtotal: action.payload.subtotal
                }
            ];
        
        case "REMOVE_CART": 
            return state.filter(cart => cart.cart_id !== action.id)
        case "CLEAR_CART":
            return state.filter(cart => cart.cart_id === "");
            
        default:
            return state;
    }
}