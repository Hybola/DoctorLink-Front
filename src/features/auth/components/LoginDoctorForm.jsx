import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import LoginInput from './LoginInput'
import InputErrorMessage from './InputErrorMessage'
import { docLogin } from '../slice/auth-slice'
import validateLogin from '../validators/validate-login'

const initialInput = {
    email: '',
    password: '',
}

export default function LoginDoctorForm() {
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
            await dispatch(docLogin(input)).unwrap()
            toast.success('Welcome Doctor!')
            onSucess()
        } catch (err) {
            toast.error(err)
        }
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <div className="flex flex-col gap-4 border shadow-lg rounded-lg p-10">
                <p className="text-center text-2xl font-semibold pb-4 text-accent">
                    Doctor Login
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
                    <p>Password</p>
                    <LoginInput
                        placeholder="Password (6 or more characters)"
                        name="password"
                        value={input.password}
                        onChange={handleChangeInput}
                        isInvalid={error.password}
                    />
                    <InputErrorMessage message={error.password} />
                    <span className="w-fit font-semibold">
                        Forgot password?
                    </span>
                </div>

                <div className="flex flex-col gap-4">
                    <button className="bg-primary hover:bg-success text-white w-full leading-[3rem] rounded-md text-xl font-bold">
                        Log in
                    </button>
                    <p className="text-center text-xl">or</p>
                    <button className="bg-primary hover:bg-success text-white w-full leading-[3rem] rounded-md text-xl font-bold">
                        Continue with Google
                    </button>
                </div>
            </div>
        </form>
    )
}
