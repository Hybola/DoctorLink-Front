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
    }

    const handleOnclick = (e) => {
        const input = { role: myRole, payload: profile }
        dispatch(editProfile(input)).unwrap()
    }

    return (
        <dialog id="DoctorDataEdit" className="modal">
            <form method="dialog" className="modal-box bg-base-100 px-10">
                <div className="flex justify-center mb-8">
                    <h3 className="font-bold text-lg">Edit Doctor Profile</h3>
                </div>
                <InputBar
                    label="First Name"
                    name="firstName"
                    value={profile?.firstName}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Last Name"
                    name="lastName"
                    value={profile?.lastName}
                    onChange={handleOnchange}
                />
                <div className="flex justify-between gap-6">
                    <div className="w-full">
                        <InputBar
                            label="Birthdate"
                            name="birthDate"
                            type="date"
                            value={profile?.birthDate}
                            onChange={handleOnchange}
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1 rounded-lg font-normal text-lg mb-4">
                        <label htmlFor="gender" className=" font-semibold ">
                            Gender
                        </label>
                        <div className="h-[48px] border border-primary rounded-lg">
                            <select
                                name="gender"
                                id="gender"
                                value={profile.gender}
                                onChange={handleOnchange}
                                className=" w-full h-full rounded-lg p-2 pl-2"
                            >
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                <InputBar
                    label="Phone"
                    name="mobile"
                    value={profile?.mobile}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Line ID"
                    name="lineId"
                    value={profile?.lineId}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Education"
                    name="education"
                    value={profile?.education}
                    onChange={handleOnchange}
                />
                <InputBar
                    label="Work Experience"
                    name="workExperience"
                    value={profile?.workExperience}
                    onChange={handleOnchange}
                />

                <div className="modal-action gap-8">
                    <button
                        className="btn w-[80px] text-base"
                        style={{ textTransform: 'none' }}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn w-[80px] bg-success text-white hover:bg-primary text-base"
                        style={{ textTransform: 'none' }}
                        onClick={handleOnclick}
                    >
                        Save
                    </button>
                </div>
            </form>
        </dialog>
    )
}
