import thisAxios from './thisAxios'

export const getSavedJob = () => thisAxios.get('/myjob/savedjob/')

export const unSaveJob = (doctorJobId) =>
    thisAxios.patch(`/myjob/unsavedjob/${doctorJobId}`)

export const uptoInterestJob = (doctorJobId) =>
    thisAxios.patch(`/myjob/uptointerestedjob/${doctorJobId}`)

export const getInterestedJob = () => thisAxios.get(`/myjob/interestedjob/`)

export const unInterestJob = (doctorJobId) =>
    thisAxios.patch(`/myjob/uninterestedjob/${doctorJobId}`)

export const getConfirmedJob = () => thisAxios.get(`/myjob/comfirmedjob`)
