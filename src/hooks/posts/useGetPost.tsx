import { useQuery } from "@tanstack/react-query"
import { getPost } from "../../apis/services/posts"

export const useGetPost = (id: number) => {
    const postQuery = useQuery({
        queryKey: ['getPost', id],
        queryFn: () => getPost(id),
        select: ({ data }) => data,
        enabled: Boolean(id)
    })
    return postQuery
}