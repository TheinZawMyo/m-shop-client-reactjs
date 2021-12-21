export const ProductReducer = (state, action) => {
    switch(action.type){
        case 'GET_ALL':
            return [action.data];
            
        default: 
            return state;
    }
}