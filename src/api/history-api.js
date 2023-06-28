import thisAxios from './thisAxios'

export const getLists = (id) => thisAxios.get(`/history/lists?id=${id}`)
