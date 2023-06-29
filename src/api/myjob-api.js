import thisAxios from './thisAxios'

export const getSavedJob = () => thisAxios.get('/myjob/savedjob/')

export const unSaveJob = (doctorJobId) =>
    thisAxios.patch(`/myjob/unsavedjob/${doctorJobId}`)

export const uptoInterestJob = (doctorJobId) =>
    thisAxios.patch(`/myjob/uptointerestedjob/${doctorJobId}`)

export const getInterestJob = () => thisAxios.get(`/myjob/interestedjob/`)

export const unInterestJob = (doctorJobId) =>
    thisAxios.patch(`/myjob/uninterestedjob/${doctorJobId}`)
