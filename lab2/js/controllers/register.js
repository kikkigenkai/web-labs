import { UserRegister } from '../models/userRegister.js';
import FormReader from '../models/FormReader.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = FormReader.getData(form);


    if (/\s/.test(formData.nickname) || !formData.nickname.length) {
        alert('Invalid nickname');
    } else if (/\s/.test(formData.password) || !formData.password.length || (/[a-zA-Z]/.test(formData.password) && !/\d/.test(formData.password)) || (!/[a-zA-Z]/.test(formData.password) && /\d/.test(formData.password))) {
        alert('Invalid password');
    } else {
        new UserRegister({...formData}).save();
        form.reset();
        document.location.href = '/';
    }
});