import { useEffect, useState } from "react"
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

    return <div className={cartList[0] ? "row" : ""}>
                {cartList[0] 
                    ?
                    <div className="col-6">
                        <h2>Summary</h2>
                        <p>Total: ${cartTotal}</p>
                        <p>Items:</p>
                        <ul>
                            {cartList.map((item) =>{
                                return <li key={item.id}>
                                        <p>Name: {item.name}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ${item.price * item.quantity}</p>
                                        <br />
                                    </li>
                            })}
                        </ul>
                    </div>
                    :
                    <></>
                }
                <center className={cartList[0] ? "col-6" : ""}>
                    <ValidatedCheckoutForm formData={formData} handleChange={handleChange}/> 
                </center>
           </div>
}