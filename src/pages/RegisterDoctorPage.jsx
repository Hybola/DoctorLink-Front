import React from 'react'
import { Link } from 'react-router-dom'
import DocPic from '../asset/pictureForLogin.jpg'
import RegisterDoctorForm from '../features/auth/components/RegisterDoctorForm'

export default function RegisterDoctorPage() {
    return (
        <div className="flex p-16 gap-4 justify-between items-center">
            <div className="flex flex-1 justify-center">
                <div className="w-[450px] ">
                    <RegisterDoctorForm />
                    <div className="text-center pt-8">
                        <span>
                            Already on doctorLink?
                            <Link to="/doctor/login"> Log in</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 justify-center">
                <img src={DocPic} className="w-[630px]" />
            </div>
        </div>
    )
}
