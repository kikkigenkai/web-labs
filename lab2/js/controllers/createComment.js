import LSComments from '../models/LSComments.js';
import FormReader from '../models/FormReader.js';

const form = document.querySelector('form');
const postId = JSON.parse(localStorage.getItem('pickedPost'));

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = FormReader.getData(form);

    if (!formData.commentText.trim().length) {
        alert('Empty comment');
        form.reset();
    } else {
        if (!localStorage.hasOwnProperty('comments')) {
            const comment = {
                id: Math.round(Math.random() * 100000).toString(),
                postId,
                author: JSON.parse(localStorage.getItem('sessionUser'))['nickname'],
                text: formData.commentText
            };

            LSComments.addComment(comment);
        } else {
            const comment = {
                id: Math.round(Math.random() * 100000).toString(),
                postId,
                author: JSON.parse(localStorage.getItem('sessionUser'))['nickname'],
                text: formData.commentText
            };

            LSComments.addComment(comment);
        }

        form.reset();
        document.location.href = '/postPage.html';
    }
});