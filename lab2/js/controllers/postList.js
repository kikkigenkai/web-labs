import { Post } from '../models/post.js';
import LSComments from '../models/LSComments.js';
import LSPosts from '../models/LSPosts.js';

const postsBox = document.querySelector('#postsBox');
const posts = LSPosts.getPosts();

if (posts.length) {
    posts.forEach(post => new Post({...post}).render(postsBox));
    
    document.querySelector('#postsBox').addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('delete')) {
            const id = event.target.getAttribute('data-id');
            
            LSPosts.removePost(id);
            LSComments.removeByPost(id);

            document.location.href = '/';
        }
    });
}
