/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { apiUrl } from '../api'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart * Increment Quantity
    const [count, setCount] = useState(0)
    // Shopping Cart * show products
    const [cartProducts, setCartProducts] = useState([])
    // Shopping Cart * order
    const [order, setOrder] = useState([])
    
    // Product Detail * Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout side Menu  * Open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    
    // Product Detail * Show PRoduct
    const [productToShow, setProductToShow] = useState({})

    // Get products
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch(`${apiUrl}/products`)
          .then(response => response.json())
          .then(data => {
            setItems(data)
          })
      }, [])

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
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder,
            items,
            setItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
