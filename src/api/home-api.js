import thisAxios from './thisAxios'

export const getAllJobPost = () => thisAxios.get('/post/getallpost')
export const getFilterJob = (payload) =>
    thisAxios.post('/post/filterjob', payload)
