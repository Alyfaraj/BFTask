import { useQuery } from "@tanstack/react-query"
import { getPost } from "../../apis/services/posts"
import { getPosComments } from "../../apis/services/comment"

export const useGetComments = (id: number) => {
    const commentsQuery = useQuery({
        queryKey: ['getPosComments', id],
        queryFn: () => getPosComments(id),
        select: ({ data }) => data,
        enabled: Boolean(id)
    })
    return commentsQuery
}