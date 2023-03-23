import cart from '../../assets/img/shopping-cart.png'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="Shopping Cart" width={35}/>
            <p>0</p>
        </div>
    )
}

export default CartWidget