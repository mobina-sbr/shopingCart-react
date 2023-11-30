import { useContext, createContext, useEffect, useState } from "react"

const APIContext = createContext()

export function ApiContextProvider({ children }) {

    const [products, setProducts] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <APIContext.Provider value={{ products }}>
            {children}
        </APIContext.Provider>
    )
}
export default ApiContextProvider;


export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}