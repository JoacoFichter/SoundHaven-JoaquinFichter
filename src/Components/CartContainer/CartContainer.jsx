import { useEffect, useState } from "react"
import { useCartContext } from "../../customHooks/useCartContext"
import { instrumentsImgs } from "../../utils/images"
import { ItemCount } from "../ItemCount/ItemCount"
import "./CartContainer.css"

export const CartContainer = () => {
    const { cartList, cartTotal, resetCart, storeCartTotal, updateCart, deleteProduct } = useCartContext()
    
    useEffect(() =>{
        storeCartTotal()
    }, [cartList])

    return (    
        <>
        {cartList.length != 0 
        ?
            <div className="cartContainer">
                <div className="cartItems w-50">
                    {cartList.map((element) => {
                        const handleDelete = () => {
                            deleteProduct(element)
                        }
                        const onAdd = (quantity) => {
                            updateCart({...element, quantity})
                        }
                        return  <div key={element.product.id} className="cartItem w-75">
                                    <div className="w-50">
                                        <img src={instrumentsImgs[element.product.imgSrc]} className="w-25" alt={element.product.name} />
                                    </div>
                                    <div className="w-50 cartItemDetail">
                                        <li>{element.product.name}</li>
                                        <li>Quantity:</li>  
                                        <ItemCount initial={element.quantity} stock={element.product.stock} min={0} onAdd={onAdd} buttonMessage={'Update Cart'}/>
                                        <button onClick={handleDelete}>Delete product</button>
                                    </div>
                                </div>
                    })}
                </div>
                <div className="cartDetail w-25">
                    <h3>Cart totals</h3>
                    <h4>{cartTotal}</h4>
                    <button onClick={resetCart}>Reset Cart</button>
                    <button onClick={()=>{}}>Checkout</button>
                </div>
            </div>
        :
            <h1 className="noItemsMessage">No items in the Cart</h1>
        }
        </>
    )
}