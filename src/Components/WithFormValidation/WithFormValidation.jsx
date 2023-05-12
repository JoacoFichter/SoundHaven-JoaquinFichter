import { useState } from "react"

export const WithFormValidation = (WrappedComponent) => {
    
    const withFormValidation = (props) => {

        const [errors, setError] = useState({})
        
        const validateForm = () => {
            let newErrors = {}
            let isValid = true
    
            if(!props.formData.fullName) {
                newErrors.fullName = 'Please enter your full name'
                isValid = false
            }
            if(!props.formData.email) {
                newErrors.email = 'Please enter your email'
                isValid = false
            }
            setError(newErrors)
            return isValid
        }

        return (
            <>
            <WrappedComponent {...props} validateForm={validateForm} errors={errors} />
            </>
        )
    }

    return withFormValidation
}
