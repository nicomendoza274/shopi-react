/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart * Increment Quantity
    const [count, setCount] = useState(0)
    const [cartProducts, setCartProducts] = useState([])
    
    // Product Detail * Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    // Product Detail * Show PRoduct
    const [productToShow, setProductToShow] = useState({})


    
    return(
        <ShoppingCartContext.Provider value= {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
