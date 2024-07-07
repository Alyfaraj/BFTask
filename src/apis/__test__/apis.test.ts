import { getPosComments } from "../services/comment";
import { getPost, getPosts } from "../services/posts";

describe('loadPosts', () => {
    it('should load posts successfully', async () => {
        const page = 1;
        const { data } = (await getPosts(page));

        expect(data).toBeDefined();
        expect(data).toBeInstanceOf(Array);
        if (data.length > 0) {
            expect(data[0]).toHaveProperty('id');
            expect(data[0]).toHaveProperty('user_id');
            expect(data[0]).toHaveProperty('title');
            expect(data[0]).toHaveProperty('body');
        }
    });
});




describe('load post details', () => {
    it('should load post', async () => {
        const id = 139884;
        const { data } = (await getPost(id));

        expect(data).toBeDefined();
        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('user_id');
        expect(data).toHaveProperty('title');
        expect(data).toHaveProperty('body');

    });
});



describe('load post comments', () => {
    it('should load comments', async () => {
        const id = 139884;
        const { data } = (await getPosComments(id));

        expect(data).toBeDefined();
        expect(data[0]).toHaveProperty('email');
        expect(data[0]).toHaveProperty('name');


    });
});




describe('load posts list then fetch one post ', () => {
    it('should load posts/post successfully', async () => {
        const page = 1;
        const { data } = (await getPosts(page));
        const post = (await getPost(data[0].id)).data;
        expect(post).toHaveProperty('title')

    });
});