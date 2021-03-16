const profileBox = document.querySelector('#profileBox');
const profileInfo = document.createElement('div');
const user = JSON.parse(localStorage.getItem('sessionUser'));

profileInfo.classList.add('card-body');
profileInfo.innerHTML = `
    <h3 class="card-title mb-5">Profile</h3>
    <p class="card-text fs-4">${user.nickname}</p>
    <p class="card-text">${user.email}</p>
    <p class="card-text fs-4">${user.birthDate}</p>
    <p class="card-text fs-4">${user.gender}</p>
`;

profileBox.append(profileInfo);