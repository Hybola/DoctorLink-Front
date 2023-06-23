// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { GoogleLogin, GoogleLogout } from 'react-google-login'
// import { loginSuccess, loginFailure, logout } from './actions/authActions'

export default function HomePage() {
//     const App = () => {
//         const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
//         const dispatch = useDispatch()

//         const responseGoogleSuccess = (response) => {
//             dispatch(loginSuccess(response.profileObj))
//         }

//         const responseGoogleFailure = () => {
//             dispatch(loginFailure())
//         }

//         const handleLogout = () => {
//             dispatch(logout())
//         }
        return (
            <div>HOP\HGCC</div>
//             <div>
//                 <h1>Google Login Demo</h1>
//                 {isLoggedIn ? (
//                     <>
//                         <h2>Welcome, {isLoggedIn.name}</h2>
//                         <GoogleLogout
//                             clientId="YOUR_CLIENT_ID"
//                             buttonText="Logout"
//                             onLogoutSuccess={handleLogout}
//                         />
//                     </>
//                 ) : (
//                     <GoogleLogin
//                         clientId="YOUR_CLIENT_ID"
//                         buttonText="Sign in with Google"
//                         onSuccess={responseGoogleSuccess}
//                         onFailure={responseGoogleFailure}
//                         cookiePolicy={'single_host_origin'}
//                     />
//                 )}
//             </div>
        )
    }
// }
