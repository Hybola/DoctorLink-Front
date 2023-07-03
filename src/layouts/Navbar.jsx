import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    AddPostIcon,
    FollowerIcon,
    HistoryIcon,
    NotificationIcon,
    MyJobIcon,
    SearchHomeIcon,
    ChatIcon,
} from '../icons'



export default function Navbar() {
    const role = useSelector((state) => state.auth.role)
    return (
        <div className="navbar">
            <div className="flex justify-center items-center">
                {role == 'doctor' ? (
                    <div className="flex gap-16">
                        <Link to="/">
                            <SearchHomeIcon />
                        </Link>

                        <Link to="/doctor/myJob/">
                            <MyJobIcon />
                        </Link>

                        <Link to="/doctor/followed/">
                            <FollowerIcon />
                        </Link>

                        <NotificationIcon />
                    </div>
                ) : (
                    <div className="flex gap-16">
                        <Link to="/">
                            <SearchHomeIcon />
                        </Link>
                        <Link to="/provider/addpost/">
                            <AddPostIcon />
                        </Link>

                        <Link to="/provider/history/">
                            <HistoryIcon />
                        </Link>
                        <Link to="/provider/chat">
                            <ChatIcon />
                        </Link>

                        <NotificationIcon />
                    </div>
                )}
            </div>
        </div>
    )
}
