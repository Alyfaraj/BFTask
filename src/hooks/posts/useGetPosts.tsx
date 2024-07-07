import { useInfiniteQuery } from '@tanstack/react-query';
import { getPosts } from '../../apis/services/posts';

export const useGetPosts = () => {
    const postsQuery = useInfiniteQuery({
        queryKey: ['getPosts'],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => getPosts(pageParam),
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length + 1
            return lastPage.data.length > 0 ? nextPage : undefined

        },
        select: (data) => data?.pages.flatMap(page => page.data) || []

    });

    return postsQuery;
};