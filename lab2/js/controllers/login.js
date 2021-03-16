import FormReader from '../models/FormReader.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = FormReader.getData(form);

    if (!formData.email || !formData.password) {
        alert('Empty form');
        form.reset();
    } else {
        if (!localStorage.hasOwnProperty('users')) {
            alert('There is no registered users');
            form.reset();
        } else {
            const users = JSON.parse(localStorage.getItem('users'));
            const idx = users.findIndex(user => user.email === formData.email && user.password === formData.password);

            if (idx < 0) {
                alert('User not exists');
                form.reset();
            } else {
                localStorage.setItem('sessionUser', JSON.stringify(users[idx]));
                document.location.href = '/';
            }
        }  
    }
    
});