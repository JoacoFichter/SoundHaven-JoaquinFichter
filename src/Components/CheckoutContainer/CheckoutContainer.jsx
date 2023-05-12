import { useState } from "react"
import { WithFormValidation } from "../WithFormValidation/WithFormValidation"
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"

const ValidatedCheckoutForm = WithFormValidation(CheckoutForm)

export const CheckoutContainer = () => {

    const [formData, setFormData] = useState({
        email: '',
        fullName: ''
    })
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        })
    }

    return <div>
            <ValidatedCheckoutForm formData={formData} handleChange={handleChange}/> 
           </div>
}