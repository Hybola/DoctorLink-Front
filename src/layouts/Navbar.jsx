import React from 'react'
import {useSelector } from 'react-redux'
import {
    AddPostIcon,
    FollowerIcon,
    HistoryIcon,
    NotificationIcon,
    SavedJobIcon,
    SearchHomeIcon,
} from '../icons'

export default function Navbar() {
    const role = useSelector((state) => state.auth.role)
    return (
        <div className="navbar">
            <div className="flex justify-center items-center">
                {role == 'doctor' ? (
                    <div className='flex gap-2'>
                        <SearchHomeIcon />
                        <SavedJobIcon />
                        <FollowerIcon />
                        <NotificationIcon />
                    </div>
                ) : (
                    <>
                        <SearchHomeIcon />
                        <AddPostIcon />
                        <HistoryIcon />
                        <NotificationIcon />
                    </>
                )}

            
            </div>
        </div>
    )
}
