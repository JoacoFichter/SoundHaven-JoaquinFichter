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
                {errors && errors.fullName && <span>{errors.fullName}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="text" 
                    name="email" 
                    placeholder="Enter your email" 
                    onChange={handleChange} 
                    value={formData.email}
                />
                {errors && errors.email && <span>{errors.email}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
        </center>
    )
}