import { createContext, useState } from "react"

export const CartContext = createContext({})

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    
    const addToCart = (newProduct) => {
        if(cartList.some((element) => element.id == newProduct.id)) {
            const updatedCart = cartList.map((element) => {
                if(element.id == newProduct.id)element.quantity += newProduct.quantity
                return element
            })
            setCartList(updatedCart)
        }else {
            setCartList([...cartList, newProduct])
        }
    } 

    const updateCart = (updatedProduct) => {
            if(cartList.some((element) => element.id == updatedProduct.id)) {
                let updatedCart
                if(updatedProduct.quantity != 0){
                    updatedCart = cartList.map((element) => {
                        if(element.id == updatedProduct.id) element.quantity = updatedProduct.quantity
                        return element
                    })
                    
                }else{
                    updatedCart = cartList.filter((element) => element.id != updatedProduct.id)
                }
                setCartList(updatedCart)
            }else {
                setCartList([...cartList, updatedProduct])
            }
    }


    const storeCartTotal = () => {setCartTotal(
        cartList.reduce((acc, element)=> {
        return acc + (element.quantity * element.price)
    }, 0))}

    const resetCart = () => {
        setCartList([])
    }

    const deleteProduct = (deletedProduct) => {
        let updatedCart = cartList.filter(element => element.id != deletedProduct.id)
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