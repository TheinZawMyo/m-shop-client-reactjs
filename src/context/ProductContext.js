import react, {createContext,useEffect, useState, useReducer} from "react";
import { ProductReducer } from "../reducers/ProductReducer";
import Service from "../Services/Service";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        const getData = async() => {
            keyword !== '' && console.log(keyword);
            await Service.getAllItem(keyword)
            .then((res) => {
                console.log(res.data.products)
                setProducts(res.data.products);
            })
            .catch((err) => console.log(err));
        }

        getData();
        
    }, [keyword]);

    
    const liveSearch = (key) => {
        setKeyword(key);
    }


    return (
        <ProductContext.Provider value={{products, liveSearch}} >
            {props.children}
        </ProductContext.Provider>
    )

}

export default ProductContextProvider;