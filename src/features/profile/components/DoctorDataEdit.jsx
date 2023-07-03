import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editProfile } from '../slice/profile-slice'
import InputBar from './InputBar'

export default function DoctorDataEdit() {
    const myRole = useSelector((state) => state.auth?.role)
    const currrentProfile = useSelector((state) => state.profile?.profile)
    const [profile, setProfile] = useState({ ...currrentProfile })

    const dispatch = useDispatch()

    const handleOnchange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }

    const handleOnclick = (e) => {
        const input = { role: myRole, payload: profile }
        dispatch(editProfile(input)).unwrap()
    }

    return (
        <dialog id="DoctorDataEdit" className="modal">
            <form method="dialog" className="modal-box bg-base-100">
                <div className="flex justify-center mb-2">
                    <h3 className="font-bold text-lg">Edit Doctor Profile</h3>
                </div>
                <InputBar
                    label="First Name: "
                    name="firstName"
                    value={profile?.firstName}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Last Name: "
                    name="lasstName"
                    value={profile?.lastName}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Gender: "
                    name="gender"
                    value={profile?.gender}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Birthdate: "
                    name="birthdate"
                    value={profile?.birth}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Mobile :"
                    name="mobile"
                    value={profile?.mobile}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="LINE ID :"
                    name="lineId"
                    value={profile?.lineId}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Education: "
                    name="education"
                    value={profile?.birth}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Work experience: "
                    name="education"
                    value={profile?.birth}
                    onChange={handleOnchange}
                />

                <div className="modal-action gap-2">
                    <button className="btn w-[80px] hover:bg-warning">
                        CANCEL
                    </button>
                    <button
                        className="btn  w-[100px] font-bold hover:bg-success hover:text-white"
                        onClick={handleOnclick}
                    >
                        SAVE
                    </button>
                </div>
            </form>
        </dialog>
    )
}
