import LSPosts from '../models/LSPosts.js';
import FormReader from '../models/FormReader.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = FormReader.getData(form);

    if (!formData.postTitle.trim().length || !formData.postBody.trim().length) {
        alert('Empty post');
        form.reset();
    } else {
        const user = JSON.parse(localStorage.getItem('sessionUser'));
        const post = {
            id: Math.round(Math.random() * 100000).toString(),
            postAuthor: user.nickname,
            ...formData
        };

        LSPosts.createPost(post);

        document.location.href = '/';
        
    }
});