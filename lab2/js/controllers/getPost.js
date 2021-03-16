document.querySelector('#postsBox').addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('getPost')) {
        localStorage.setItem('pickedPost', `${event.target.getAttribute('data-id')}`);
        document.location.href = '/postPage.html';
    }
});