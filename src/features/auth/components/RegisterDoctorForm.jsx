import LoginInput from './LoginInput'
import InputErrorMessage from './InputErrorMessage'

export default function RegisterDoctorForm() {
    return (
        <form>
            <div className="flex flex-col gap-4 border shadow-lg rounded-lg p-10">
                <p className="text-center text-2xl font-semibold pb-4 text-accent">
                    Register
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
                </div>
                <div>
                    <p>Confirm password</p>
                    <LoginInput
                        placeholder="Confirm password"
                        name="confirmPassword"
                        // value={input.confirmPassword}
                        // onChange={handleChangeInput}
                        // isInvalid={error.confirmPassword}
                    />
                    {/* <InputErrorMessage message={error.confirmPassword} /> */}
                </div>

                <div>
                    <p>First name</p>
                    <LoginInput
                        placeholder="Your first name"
                        name="firstName"
                        // value={input.firstName}
                        // onChange={handleChangeInput}
                        // isInvalid={error.firstName}
                    />
                    {/* <InputErrorMessage message={error.firstName} /> */}
                </div>

                <div>
                    <p>Last name</p>
                    <LoginInput
                        placeholder="Your last name"
                        name="lastName"
                        // value={input.lastName}
                        // onChange={handleChangeInput}
                        // isInvalid={error.lastName}
                    />
                    {/* <InputErrorMessage message={error.lastName} /> */}
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
