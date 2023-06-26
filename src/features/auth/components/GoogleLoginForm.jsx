import React from 'react'
import { LoginSocialGoogle } from 'reactjs-social-login'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { useDispatch } from 'react-redux'
import { doctorLoginGoogle, providerLoginGoogle } from '../slice/auth-slice'

export function DoctorGoogleLoginForm() {
    const dispatch = useDispatch()

    return (
        <div>
            <LoginSocialGoogle
                client_id={
                    '166585259375-ui3lbpm9ksfgqceeh1gh5qkt0onv9kal.apps.googleusercontent.com'
                }
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={({ provider, data }) => {
                    dispatch(doctorLoginGoogle(data)).unwrap()
                }}
                onReject={(err) => {
                    console.log(err)
                }}
            >
                <GoogleLoginButton />
            </LoginSocialGoogle>
        </div>
    )
}


export function ProviderGoogleLoginForm() {
    const dispatch = useDispatch()

    return (
        <div>
            <LoginSocialGoogle
                client_id={
                    '166585259375-ui3lbpm9ksfgqceeh1gh5qkt0onv9kal.apps.googleusercontent.com'
                }
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={({ provider, data }) => {
                    dispatch(providerLoginGoogle(data)).unwrap()
                }}
                onReject={(err) => {
                    console.log(err)
                }}
            >
                <GoogleLoginButton />
            </LoginSocialGoogle>
        </div>
    )
}

