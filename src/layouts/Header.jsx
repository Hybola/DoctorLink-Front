import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { logout } from '../features/auth/slice/auth-slice'

export default function Header() {
    const role = useSelector((state) => state.auth.role)
    const dispatch = useDispatch()

    return (
        <div className="flex justify-between px-8 bg-primary shadow-lg sticky top-0 z-10 h-[80px] text-white">
            <div className="py-2 flex justify-start self-center">
                <h1>Logo</h1>
            </div>
            <div className="flex justify-self-end items-center gap-4">
                {role == 'doctor' || role == 'provider' ? (
                    <>
                        <Navbar />
                        <div className="flex justify-self-end items-center gap-4">
                            <div className="flex-none gap-2">
                                <div className="dropdown dropdown-end">
                                    <label
                                        tabIndex={0}
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-10 rounded-full">
                                            <img src="https://img.freepik.com/free-icon/doctor_318-201540.jpg" />
                                        </div>
                                    </label>
                                    <ul
                                        tabIndex={0}
                                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-accent rounded-box w-52"
                                    >
                                        {role == 'doctor' ? (
                                            <>
                                                <li>
                                                    <Link to="/doctor/profile">
                                                        <button>Profile</button>
                                                    </Link>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                <li>
                                                    <Link to="/provider/profile">
                                                        <button>Profile</button>
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                        <li>
                                            <button
                                                onClick={() =>
                                                    dispatch(logout())
                                                }
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/doctor/login">
                            <button>Doctor</button>
                        </Link>
                        <Link to="/provider/login">
                            <button>Provider</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}
