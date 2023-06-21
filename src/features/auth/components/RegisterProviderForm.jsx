import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import LoginInput from './LoginInput'
import InputErrorMessage from './InputErrorMessage'
import { registerAsync } from "../slice/auth-slice";


const initialInput = {
    email: '',
    password: '',
    confirmPassword: '',
    healthProviderName: '',
    mobile: '',
}
export default function RegisterProviderForm() {
    const [input, setInput] = useState(initialInput)
    const [error, setError] = useState({})

    const dispatch = useDispatch()

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = async (e) => {
        try {
            e.preventDefault()
            ////validation
            const result = validateRegister(input)
            //console.dir(result);// มี result ก็คือมี error
            if (result) {
                return setError(result)
            }
            setError({})
            await dispatch(registerAsync(input)).unwrap()
            toast.success('register successfully')
            onSucess()
        } catch (err) {
            toast.error(err.response.data.message)
        }
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <div className="flex flex-col gap-4 border shadow-lg rounded-lg p-10">
                <p className="text-center text-2xl font-semibold pb-4 text-accent">
                    Health Care Provider Register
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
                </div>
                <div>
                    <p>Confirm password</p>
                    <LoginInput
                        placeholder="Confirm password"
                        name="confirmPassword"
                        value={input.confirmPassword}
                        onChange={handleChangeInput}
                        isInvalid={error.confirmPassword}
                    />
                    <InputErrorMessage message={error.confirmPassword} />
                </div>

                <div>
                    <p>Health provider name</p>
                    <LoginInput
                        placeholder="Health provider name"
                        name="healthProviderName"
                        value={input.healthProviderName}
                        onChange={handleChangeInput}
                        isInvalid={error.healthProviderName}
                    />
                    <InputErrorMessage message={error.healthProviderName} />
                </div>

                <div>
                    <p>Tel.</p>
                    <LoginInput
                        placeholder="Mobile number"
                        name="mobile"
                        value={input.mobile}
                        onChange={handleChangeInput}
                        isInvalid={error.mobile}
                    />
                    <InputErrorMessage message={error.mobile} />
                </div>
                <div className="pt-4 text-xs text-center w-[350px]">
                    <p>
                        By clicking Agree & Join, you agree to the doctorLink
                        User Agreement, Privacy Policy, and Cookie Policy.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <button className="bg-primary hover:bg-success text-white w-full leading-[3rem] rounded-md text-xl font-bold">
                        Agree & Join
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
