import { API } from ".."

export const getPosts = async (page: number = 1) => {
    return await API.get(`/posts?page=${page}`)
}


export const getPost = async (id: number) => {
    return await API.get(`/posts/${id}`)
}

