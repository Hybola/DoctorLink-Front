import React from 'react'
import LoginForm from '../features/auth/components/LoginForm'
import HrPic from '../asset/forHR.jpg'
import { Link } from 'react-router-dom'

export default function LoginProviderPage() {
    return (
        <div className="flex p-16 gap-4 justify-between items-center">
            <div className="flex flex-1 justify-center">
                <img src={HrPic} className="w-[630px]" />
            </div>
            <div className="flex flex-1 justify-center">
                <div className="w-[450px] ">
                    <LoginForm />
                    <div className="text-center pt-8">
                        <span>
                            New to doctorLink? 
                            <Link to="/provider/register"> Join now</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}