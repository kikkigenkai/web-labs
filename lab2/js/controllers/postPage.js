import { Comment } from '../models/comment.js';
import LSComments from '../models/LSComments.js';
import LSPosts from '../models/LSPosts.js';

const contentBox = document.querySelector('#contentBox');
const id = JSON.parse(localStorage.getItem('pickedPost'));
const post = LSPosts.getPost(id);
const content = document.createElement('div');

content.classList.add('card-body');
content.innerHTML = `
    <h1 class="card-title">${post.postTitle}</h1>
    <h6 class="card-title mb-3">${post.postAuthor}</h6>
    <p class="card-text fs-4">${post.postBody}</p>
`;

contentBox.append(content);

const commentBox = document.querySelector('#commentBox');

if (localStorage.hasOwnProperty('comments')) {
    LSComments.getComments(id).forEach(item => new Comment({...item}).render(commentBox));
}

commentBox.addEventListener('click', event => {
    if (event.target && event.target.classList.contains('del')) {
        LSComments.removeComment(event.target.getAttribute('data-id'));
        document.location.href = '/postPage.html';
    }
});