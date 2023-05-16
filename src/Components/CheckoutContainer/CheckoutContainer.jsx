import { useState } from "react"
import { WithFormValidation } from "../WithFormValidation/WithFormValidation"
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"
import { useCartContext } from "../../customHooks/useCartContext"

const ValidatedCheckoutForm = WithFormValidation(CheckoutForm)
export const CheckoutContainer = () => {
    
    const { cartList, cartTotal } = useCartContext()
    const [formData, setFormData] = useState({
        email: '',
        repeatedEmail: '',
        fullName: ''
    })
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        })
    }

    return <div className="row">
                <div className="col-6">
                    <h2>Summary</h2>
                    <p>Total: ${cartTotal}</p>
                    <p>Items:</p>
                    <ul>
                        {cartList.map((item) =>{
                            return <ul key={item.product.key}>
                                    <li>Name: {item.product.name}</li>
                                    <li>Quantity: {item.quantity}</li>
                                    <li>Price: ${item.product.price * item.quantity}</li>
                                    <br />
                                   </ul>
                        })}
                    </ul>
                </div>
                <div className="col-6">
                    <ValidatedCheckoutForm formData={formData} handleChange={handleChange}/> 
                </div>
           </div>
}