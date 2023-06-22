import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
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
                    <div className="flex gap-16">
                        <Link to='/'>
                            <SearchHomeIcon />
                        </Link>
                        <SavedJobIcon />
                        <FollowerIcon />
                        <NotificationIcon />
                    </div>
                ) : (
                    <div className="flex gap-16">
                        <Link to='/'>
                            <SearchHomeIcon />
                        </Link>
                        <AddPostIcon />
                        <HistoryIcon />
                        <NotificationIcon />
                    </div>
                )}
            </div>
        </div>
    )
}
