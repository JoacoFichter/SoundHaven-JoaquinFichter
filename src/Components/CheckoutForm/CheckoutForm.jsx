import './CheckoutForm.css'

export const CheckoutForm = ({ validateForm, errors, formData, handleChange }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()
    }

    return (
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
    )
}