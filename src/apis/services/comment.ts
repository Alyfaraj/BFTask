import { API } from ".."

export const getPosComments = async (id: number) => {
    return await API.get(`/posts/${id}/comments`)
}