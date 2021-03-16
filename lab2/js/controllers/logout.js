const logout = document.querySelector('#logout');

logout.addEventListener('click', () => {
    localStorage.removeItem('sessionUser');
    document.location.href = '/login.html';
});