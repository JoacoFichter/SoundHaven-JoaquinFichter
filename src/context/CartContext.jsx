import { createContext, useState } from "react"

export const CartContext = createContext({})

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    
    const addToCart = (newProduct) => {
        if(cartList.some((element) => element.product == newProduct.product)) {
            const updatedCart = cartList.map((element) => {
                if(element.product == newProduct.product)element.quantity += newProduct.quantity
                return element
            })
            setCartList(updatedCart)
        }else {
            setCartList([...cartList, newProduct])
        }
    } 

    const updateCart = (updatedProduct) => {
            if(cartList.some((element) => element.product == updatedProduct.product)) {
                let updatedCart
                if(updatedProduct.quantity != 0){
                    updatedCart = cartList.map((element) => {
                        if(element.product == updatedProduct.product)element.quantity = updatedProduct.quantity
                        return element
                    })
                    
                }else{
                    updatedCart = cartList.filter((element) => element.product != updatedProduct.product)
                }
                setCartList(updatedCart)
            }else {
                setCartList([...cartList, updatedProduct])
            }
    }


    const storeCartTotal = () => {setCartTotal(
        cartList.reduce((acc, element)=> {
        return acc + (element.quantity * element.product.price)
    }, 0))}

    const resetCart = () => {
        setCartList([])
    }

    const deleteProduct = (deletedProduct) => {
        let updatedCart = cartList.filter(element => element.product != deletedProduct.product)
        setCartList(updatedCart)
    }

    return  <CartContext.Provider value={{
                cartList,
                cartTotal,
                addToCart,
                storeCartTotal,
                updateCart,
                deleteProduct,
                resetCart
            }}>
                {children}
            </CartContext.Provider>
}