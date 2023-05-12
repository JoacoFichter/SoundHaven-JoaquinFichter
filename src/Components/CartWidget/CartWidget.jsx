import { Link } from "react-router-dom"
import { useCartContext } from "../../customHooks/useCartContext"
import ShoppingCart from "../Icons/ShoppingCart"
import "./CartWidget.css"

const CartWidget = () => {
    const {cartList} = useCartContext()
    return (
        <div className="cartWidget">
            <p>{cartList.reduce((acc, element)=>{
                return acc += element.quantity                
            }, 0)}</p>
            <Link to={'/SoundHaven-JoaquinFichter/Cart'}><ShoppingCart width="30">holaaaa</ShoppingCart></Link>
        </div>
    )
}

export default CartWidget