export const ProductReducer = (state, action) => {
    switch(action.type){
        case 'RETRIEVE_SUCCESS':
            return {
                ...state,
                current_page: action.payload.current_page,
                per_page: action.payload.per_page,
                total: action.payload.total, 
                products: action.payload.products,
            };
            
        default: 
            return state;
    }
}