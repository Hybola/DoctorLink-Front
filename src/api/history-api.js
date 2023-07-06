import thisAxios from './thisAxios'

export const getLists = (id) => thisAxios.get(`/history/lists?id=${id}`)
export const getJob = (id) => thisAxios.get(`/history/job?id=${id}`)
export const updateSelectedDoctor = (input) =>
    thisAxios.post('/history/update-selected-doctor', input)
export const confirmCloseJob = (id, stage) =>
    thisAxios.get(`/history/closejob?id=${id}&stage=${stage}`)

export const editJobPost = (input) =>
    thisAxios.patch(`/history/edit-job-post/${input.id}`, input)
export const getProviderProfile = (id) =>
    thisAxios.get(`/history/get-provider-profile?id=${id}`)
