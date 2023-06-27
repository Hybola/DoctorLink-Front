import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { logout } from '../features/auth/slice/auth-slice'
import Logo from '../asset/Logo6.png'

export default function Header() {
    const role = useSelector((state) => state.auth.role)
    const id = useSelector((state) => state.auth.user?.id)
    const providerName = useSelector(
        (state) => state.profile?.profile?.providerName
    )
    const doctorName = useSelector(
        (state) => state.profile?.profile?.profileName
    )
    const doctorProfile = useSelector(
        (state) => state.profile?.profile?.profileImage
    )
    const providerProfile = useSelector(
        (state) => state.profile?.profile?.profileImage
    )

    const dispatch = useDispatch()

    return (
        <div className="flex justify-between px-8 bg-primary shadow-lg sticky top-0 z-10 h-[80px] text-white">
            <div className="py-2 flex justify-start self-center ">
                <Link to="/">
                    <img src={Logo} className="h-12" />
                </Link>
            </div>
            <div className="flex justify-self-end items-center gap-10">
                {role == 'doctor' || role == 'provider' ? (
                    <>
                        <Navbar />
                        <div className="flex justify-self-end items-center gap-4">
                            <div className="flex justify-center gap-3 w-[150px]">
                                {role == 'doctor' ? (
                                    <>
                                        <div className="self-center w-fit">
                                            <p>{doctorName}</p>
                                            <p className="text-xs">
                                                I'm a {role}
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="self-center">
                                            <p>{providerName}</p>
                                            <p className="text-xs">
                                                I'm a {role}
                                            </p>
                                        </div>
                                    </>
                                )}
                                <div className="dropdown dropdown-end">
                                    <label
                                        tabIndex={0}
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-10 rounded-full">
                                            {role == 'doctor' ? (
                                                <>
                                                    <img src={doctorProfile} />
                                                </>
                                            ) : (
                                                <>
                                                    <img
                                                        src={providerProfile}
                                                    />
                                                </>
                                            )}
                                            <img src={providerProfile} />
                                        </div>
                                    </label>
                                    <ul
                                        tabIndex={0}
                                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-accent rounded-box w-52"
                                    >
                                        {role == 'doctor' ? (
                                            <>
                                                <li>
                                                    <Link
                                                        to={`/doctor/${id}/profile/`}
                                                    >
                                                        <button>Profile</button>
                                                    </Link>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                <li>
                                                    <Link
                                                        to={`/provider/${id}/profile/`}
                                                    >
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
