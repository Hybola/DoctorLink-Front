import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editProfile } from '../slice/profile-slice'
import { dateTimeTH } from '../../../utils/dateTime'
import InputBar from './InputBar'

export default function DoctorDataEdit() {
    const myRole = useSelector((state) => state.auth?.role)
    const currrentProfile = useSelector((state) => state.profile?.myProfile)
    const [profile, setProfile] = useState({ ...currrentProfile })

    const dispatch = useDispatch()

    const handleOnchange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
        console.log(profile)
        console.log(e.target.value)
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
                    name="lastName"
                    value={profile?.lastName}
                    onChange={handleOnchange}
                />
                <div className="flex items-center gap-2   h-[34px] rounded-ld my-2 font-normal text-sm">
                    <label htmlFor="gender" className="w-[180px]">
                        Gender:
                    </label>
                    <div className=" w-full  h-[80%] p-2 ">
                        <select
                            name="gender"
                            id="gender"
                            value={profile.gender}
                            onChange={handleOnchange}
                        >
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                        </select>
                    </div>
                </div>

                <InputBar
                    label="Birthdate: "
                    name="birthDate"
                    type="date"
                    value={profile?.birthDate}
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
                    value={profile?.education}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Work experience: "
                    name="workExperience"
                    value={profile?.workExperience}
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
