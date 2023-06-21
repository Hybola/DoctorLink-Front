import LoginInput from './LoginInput'
import InputErrorMessage from '../components/InputErrorMessage'
import { Link } from 'react-router-dom'

export default function LoginForm() {
    return (
        <form>
            <div className="flex flex-col gap-4 border shadow-lg rounded-lg p-10">
                <p className="text-center text-2xl font-semibold pb-4 text-accent">
                    Login
                </p>
                <div>
                    <p>Email</p>
                    <LoginInput
                        placeholder="Email address"
                        name="email"
                        // value={input.email}
                        // onChange={handleChangeInput}
                        // isInvalid={error.email}
                    />
                    {/* <InputErrorMessage message={error.email} /> */}
                </div>
                <div>
                    <p>Password</p>
                    <LoginInput
                        placeholder="Password (6 or more characters)"
                        name="password"
                        // value={input.password}
                        // onChange={handleChangeInput}
                        // isInvalid={error.password}
                    />
                    {/* <InputErrorMessage message={error.password} /> */}
                        <span className="w-fit font-semibold">Forgot password?</span>
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
