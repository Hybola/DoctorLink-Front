import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editProfile } from '../slice/profile-slice'
import InputBar from './InputBar'

export default function DoctorBodyEdit() {
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
        <dialog id="DoctorBodyEdit" className="modal">
            <form method="dialog" className="modal-box bg-base-100">
                <div className="flex justify-center mb-4">
                    <h3 className="font-semibold text-xl">
                        Edit Doctor Profile
                    </h3>
                </div>
                <InputBar
                    label="Profile Name"
                    name="profileName"
                    value={profile?.profileName}
                    onChange={handleOnchange}
                />
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="description"
                        className="w-[180px] font-semibold text-lg"
                    >
                        Description
                    </label>
                    <textarea
                        className="w-full font-normal text-lg border border-primary rounded-lg p-2 pl-3"
                        name="description"
                        value={profile?.description}
                        onChange={handleOnchange}
                    ></textarea>
                </div>

                <div className="modal-action gap-8">
                    <button
                        className="btn w-[80px]"
                        style={{ textTransform: 'none' }}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn w-[80px] bg-success text-white hover:bg-primary"
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
