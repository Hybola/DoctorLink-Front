import thisAxios from './thisAxios'

export const getSavedJob = () => thisAxios.get('/myjob/savedjob/')

export const unsavejob = (id) => thisAxios.patch(`myjob/unsavejob/${id}`)
