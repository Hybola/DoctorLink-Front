import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import LoginInput from './LoginInput'
import InputErrorMessage from './InputErrorMessage'
import { provLogin } from '../slice/auth-slice'
import validateLogin from '../validators/validate-login'
import { ProviderGoogleLoginForm } from './GoogleLoginForm'

const initialInput = {
    email: '',
    password: '',
}

export default function LoginProviderForm() {
    const [input, setInput] = useState(initialInput)
    const [error, setError] = useState({})

    const dispatch = useDispatch()

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = async (e) => {
        try {
            e.preventDefault()
            const result = validateLogin(input)
            if (result) {
                return setError(result)
            }
            setError({})
            await dispatch(provLogin(input)).unwrap()
            toast.success('Welcome Provider!')
            onSucess()
        } catch (err) {
            toast.error(err)
        }
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <div className="flex flex-col gap-4 border shadow-lg rounded-lg p-10 text-success">
                <p className="text-center text-2xl font-semibold pb-4 ">
                    Provider Login
                </p>
                <div>
                    <p>Email</p>
                    <LoginInput
                        placeholder="Email address"
                        name="email"
                        value={input.email}
                        onChange={handleChangeInput}
                        isInvalid={error.email}
                    />
                    <InputErrorMessage message={error.email} />
                </div>
                <div>
                    <span>Password </span>
                    <span className="w-fit font-semibold text-xs">
                        (Forgot password?)
                    </span>
                    <LoginInput
                        placeholder="Password (6 or more characters)"
                        name="password"
                        value={input.password}
                        onChange={handleChangeInput}
                        isInvalid={error.password}
                    />
                    <InputErrorMessage message={error.password} />
                </div>

                <div className="flex flex-col gap-4 pt-4">
                    <button className="bg-success hover:bg-primary text-white w-full leading-[3rem] rounded-md text-xl font-bold">
                        Log in
                    </button>
                    <p className="text-center text-xl">OR</p>
                    <ProviderGoogleLoginForm />
                </div>
            </div>
        </form>
    )
}
