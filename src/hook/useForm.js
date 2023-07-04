import { useState } from 'react'

export default function useForm(initialState, validate) {
    const [error, setError] = useState({})

    const handleSubmitForm = (onSubmit) => async (e) => {
        e.preventDefault()
        const result = validate(input)
        if (result) {
            return setError(result)
        }
        setError({})
        await onSubmit(input)
        setInput(initialState)
    }
    return { error, handleSubmitForm }
}
