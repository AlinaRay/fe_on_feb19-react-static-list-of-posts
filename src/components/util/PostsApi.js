import { posts } from './comments.js'

export default function PostsApi() {
    return {
        getAllPosts() {
            return posts;
        }
    }

}