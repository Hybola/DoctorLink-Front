import thisAxios from './thisAxios'

export const doctorProfile = (id) => thisAxios.get(`/profile/doctor/${id}`)

export const providerProfile = (id) => thisAxios.get(`/profile/provider/${id}`)

export const uploadImage = (input) => thisAxios.patch('/profile/image', input)

export const editDoctorProfile = (payload) =>
    thisAxios.patch(`/profile/doctor/myprofile`, payload)

export const editProviderProfile = (payload) =>
    thisAxios.patch(`/profile/provider/myprofile`, payload)


