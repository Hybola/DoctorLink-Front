import React from 'react'
import { Link } from 'react-router-dom'
import HrPic from '../asset/forHR.jpg'
import RegisterProviderForm from '../features/auth/components/RegisterProviderForm'

export default function RegisterProviderPage() {
    return (
        <div className="flex p-16 gap-4 justify-between items-center">
            <div className="flex flex-1 justify-center">
                <div className="w-[450px] ">
                    <RegisterProviderForm />
                    <div className="text-center pt-8">
                        <span>
                            Already on doctorLink?
                            <Link to="/provider/login"> Log in</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 justify-center">
                <img src={HrPic} className="w-[630px]" />
            </div>
        </div>
    )
}
