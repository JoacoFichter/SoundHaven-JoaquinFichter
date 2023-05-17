import { useState } from 'react'
import { useCartContext } from '../../customHooks/useCartContext'
import './CheckoutForm.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore' 

export const CheckoutForm = ({ validateForm, errors, formData, handleChange }) => {

    const { cartList, cartTotal, resetCart } = useCartContext()
    const [ orderId, setOrderId ] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validateForm()){
            const order = {
                buyer: {fullName: formData.fullName, email: formData.email},
                orderedProducts: cartList.map(({id, name, price})=>({id, name, price})),
                total: cartTotal
            }

            const db = getFirestore()
            const queryCollection = collection(db, 'orders')
            addDoc(queryCollection, order)
                .then(res => setOrderId(res.id))
                .catch(err => console.log(err))
                .finally(()=> {
                    console.log('order has been generated')
                    resetCart()
                })            
        }
    }

    return (
    <>
    {orderId 
        ?
            <>
                <h1>Thank you for your purchase!</h1>
                <br />
                <h2>Your id is: {orderId}</h2>
            </>
        :
            <center>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" 
                            name="fullName" 
                            placeholder="Enter your full name" 
                            onChange={handleChange}
                            value={formData.fullName}
                        />
                        {errors && errors.fullName && <><br /><span>{errors.fullName}</span></>}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" 
                            name="email" 
                            placeholder="Enter your email" 
                            onChange={handleChange} 
                            value={formData.email}
                        />
                        {errors && errors.email && <><br /><span>{errors.email}</span></>}
                    </div>
                    <div>
                        <label>Repeat your email:</label>
                        <input type="text" 
                            name="repeatedEmail" 
                            placeholder="Repeat your email" 
                            onChange={handleChange} 
                            value={formData.repeatedEmail}
                        />
                        {errors && errors.repeatedEmail && <><br /><span>{errors.repeatedEmail}</span></>}
                        {errors && errors.mismatchedEmail && <><br /><span>{errors.mismatchedEmail}</span></>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </center>
    }
    </>)
}