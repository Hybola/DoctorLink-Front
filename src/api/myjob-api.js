import thisAxios from './thisAxios'

export const getSavedJob = () => thisAxios.get('/myjob/savedjob/')
