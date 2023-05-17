import { Link } from "react-router-dom"
import { useEffect } from "react"
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
            <div className="cartContainer flex-row flex-md-row flex-sm-column-reverse">
                <div className="cartItems w-50">
                    {cartList.map((element) => {
                        const handleDelete = () => {
                            deleteProduct(element)
                        }
                        const onAdd = (quantity) => {
                            updateCart({...element, quantity})
                        }
                        return  <div key={element.id} className="cartItem w-75">
                                    <div className="cartItemImg">
                                        <img src={instrumentsImgs[element.imgSrc]} className="cartItemImg" alt={element.name} />
                                    </div>
                                    <div className="w-50 cartItemDetail">
                                        <li>product: <h2>{element.name}</h2></li>
                                        <li>Quantity:</li>  
                                        <ItemCount initial={element.quantity} stock={element.stock} min={0} onAdd={onAdd} buttonMessage={'Update Cart'}/>
                                        <button onClick={handleDelete}>Delete product</button>
                                    </div>
                                </div>
                    })}
                </div>
                <div className="cartDetail w-25">
                    <h3>Cart total:</h3>
                    <h4>${cartTotal}</h4>
                    <button onClick={resetCart}>Reset Cart</button>
                    <Link to='/SoundHaven-JoaquinFichter/Checkout'><button>Checkout</button></Link>
                </div>
            </div>
        :
            <h1 className="noItemsMessage">No items in the Cart</h1>
        }
        </>
    )
}