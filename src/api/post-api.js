import thisAxios from './thisAxios'

export const getPostByProviderId = (id) =>
    thisAxios.get(`/post/user/provider/${id}`)

export const getPostById = (id) => thisAxios.get(`/post/user/${id}`)

export const getPostByIdForGuest = (id) => thisAxios.get(`/post/guest/${id}`)
