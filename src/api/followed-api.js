import thisAxios from './thisAxios'

export const followedProvider = (userid) => {
    return thisAxios.get(`follow/doctor/${userid}/followed`)
}

export const unfollowed = (followId) =>
    thisAxios.patch(`/follow/unfollowed/${followId}`)
