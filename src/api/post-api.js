import thisAxios from './thisAxios'

export const getPostByProviderId = (id) => thisAxios.get(`/post/provider/${id}`)

export const getPostById = (id) => thisAxios.get(`/post/${id}`)
