import thisAxios from './thisAxios'

export const followedProvider = (id) => {
    return thisAxios.get(`follow/doctor/${id}/followed`)
}

export const unfollowed = (followId) =>
    thisAxios.patch(`/follow/unfollowed/${followId}`)
