import thisAxios from './thisAxios'

export const doctorProfile = (id) => thisAxios.get(`/profile/doctor/${id}`)

export const providerProfile = (id) => thisAxios.get(`/profile/provider/${id}`)

export const uploadImage = (input) => thisAxios.patch('/profile/image', input)

export const editDoctorProfile = (payload) =>
    thisAxios.patch(`/profile/doctor/myprofile`, payload)

export const editProviderProfile = (payload) =>
    thisAxios.patch(`/profile/provider/myprofile`, payload)

export const getProvince = () => thisAxios.get('/profile/province')

export const doctorfollow = (providerId) =>
    thisAxios.get(`/profile/doctorfollow/${providerId}`)

export const follow = (id) => thisAxios.post(`/profile/follow/${id}`)

export const unFollow = (id) => thisAxios.post(`/profile/unfollow/${id}`)
