import { createContext, useState } from 'react'
// import {Products} from '../components/pages/Products'
import { useAPI } from './DataContext'

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteFromCart: () => { },
    getTotalAmount: () => { }
})

export function CartProvider({ children }) {

    const { products } = useAPI()

    const [cartProducts, setCartProducts] = useState([])

    function getProductQuantity(id) {
        const quantity = cartProducts.find((data) => data.id === id)?.quantity

        if (quantity === undefined) {
            return 0
        }
        return quantity
    }

    function addItemToCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 0) {
            setCartProducts(
                [...cartProducts, { id: id, quantity: 1 }]
            )
        } else {
            setCartProducts(
                //     cartProducts.map((data) =>
                //     data.id === id ? { ...data, quantity: data.quantity + 1 } : data
                //   )
            )
        }
    }

    function addItemToCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 0) {
            setCartProducts(
                [...cartProducts, { id: id, quantity: 1 }]
            )
        } else {
            setCartProducts(
                cartProducts.map((data) => data.id === id ? { ...data, quantity: data.quantity + 1 } : data)
            )
        }

    }

    function deleteFromCart(id) {
        setCartProducts((cartProducts) => cartProducts.filter((data) => { return data.id != id }))

    }

    function removeItemFromCart(id) {
        const quantity = getProductQuantity(id)
        if (quantity === 1) {
            deleteFromCart(id)
        } else {
            setCartProducts(cartProducts.map((data) => data.id === id ? { ...data, quantity: data.quantity - 1 } : data))
        }
    }

    function getProductData(id) {
        let productData = products.find((product) => product.id === id)

        return productData
    }

    function getTotalAmount() {
        let totalAmount = 0

        cartProducts.map((data) => {
            const productData = getProductData(data.id)

            totalAmount += productData.price * data.quantity
        })

        return totalAmount
    }

    const ContextValue = {
        items: cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteFromCart,
        getTotalAmount
    }

    return (
        <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
    )
}