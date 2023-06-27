import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editProfile } from '../slice/profile-slice'
import InputBar from './InputBar'

export default function DoctorBodyEdit() {
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
        <dialog id="DoctorBodyEdit" className="modal">
            <form method="dialog" className="modal-box bg-base-100">
                <div className="flex justify-center mb-2">
                    <h3 className="font-bold text-lg">Edit Doctor Profile</h3>
                </div>
                <InputBar
                    label="Profile Name: "
                    name="profileName"
                    value={profile?.profileName}
                    onChange={handleOnchange}
                />
                <div className="flex gap-2 ">
                    <label
                        htmlFor="description"
                        className="w-[180px] font-normal text-sm "
                    >
                        Description
                    </label>
                    <textarea
                        className="w-full font-normal text-lg border border-bg-primary rounded-lg "
                        name="description"
                        value={profile?.description}
                        onChange={handleOnchange}
                    ></textarea>
                </div>

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
