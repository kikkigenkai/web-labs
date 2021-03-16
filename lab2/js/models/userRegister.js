export class UserRegister {
    constructor({nickname, birthDate, email, password, gender}) {
        this.nickname = nickname;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
        this.gender = gender;
    }

    save() {
        if (!localStorage.hasOwnProperty('users')) {
            const users = [];
            const user = {...this};
            
            users.push(user);

            localStorage.setItem('users', JSON.stringify(users));
        } else {
            const users = JSON.parse(localStorage.getItem('users'));

            users.push({...this});

            localStorage.setItem('users', JSON.stringify(users));
        }
    }
}