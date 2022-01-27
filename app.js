// CRUD = Create, Read, Update, Delete
class User {
    constructor(id, firstname, lastname, username, password) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
    }

    addUser() {
        let user_table = JSON.parse(localStorage.getItem('crud'));
        user_table.push(this);

        localStorage.setItem('crud', JSON.stringify(user_table));

        let id = document.getElementById('id').value = '';
        let firstname = document.getElementById('firstname').value = '';
        let lastname = document.getElementById('lastname').value = '';
        let username = document.getElementById('username').value = '';
        let password = document.getElementById('password').value = '';
    }

    static allUsers() {
        let user_table = JSON.parse(localStorage.getItem('crud'));

        let page2 = document.getElementById('page2');

        if (page2 != null) {

            let thead = document.querySelector('thead tr');
            let tbody = document.querySelector('tbody');
    
            let column_names = ['ID', 'Firstname', 'Lastname', 'Username', 'Password', 'Options'];
    
            for (let i = 0; i < column_names.length; i++) {
                let th = document.createElement('th');
                th.innerHTML = column_names[i];
                th.className = column_names[i];
                if (th.className == 'Options') {
                    th.setAttribute('colspan', 2);
                }
                thead.appendChild(th);
            }
    
            let object_keys = ['id', 'firstname', 'lastname', 'username', 'password'];
            let buttons = ['delete', 'update'];

            for (let i = 0; i < user_table.length; i++) {
                let tr = document.createElement('tr');
                for (let j = 0; j < object_keys.length; j++) {
                    let td = document.createElement('td');
                    td.innerHTML = user_table[i][object_keys[j]];
                    tr.appendChild(td);
                }

                // Add Update and Delete buttons
                
                for (let k = 0; k < 2; k++) {
                    let td = document.createElement('td');
                    let button = document.createElement('button');

                    button.innerHTML = buttons[k];
                    button.id = buttons[k];
                    td.appendChild(button);

                    tr.appendChild(td);
                }

                tbody.appendChild(tr);
            }
        }
    }
}

function main() {
    let page1 = document.getElementById('page1');
    User.allUsers();

    // Pravimo 'bazu' pod nazivom crud
    // Struktura ce biti ovakva:
    /*
        Kljuc u localstorageu ce biti naziv baze
        - baza ce imati samo jednu tabelu koja ce biti predstavljena nizom
        - Svaki objekat ce predstavljati novi red u tabeli
    */
    // localStorage.clear();
    // 1. CREATE
    if (localStorage.length === 0) {
        let tabela_korisnik = JSON.stringify([]);
        localStorage.setItem('crud', tabela_korisnik);
    }

    

    let id = document.getElementById('id');
    let firstname = document.getElementById('firstname');
    let lastname = document.getElementById('lastname');
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    let dodajButton = document.getElementById('dodaj');

    if (dodajButton !== null) {
        dodajButton.addEventListener('click', (e) => {
            e.preventDefault();
    
            let user = new User(id.value, firstname.value, lastname.value, username.value, password.value);
            user.addUser();

        });
    }

    if (page1 != null) {
        let delete_button = document.getElementById('delete');
        let update_button = document.getElementById('update');

        delete_button.addEventListener((e) => {
            e.preventDefault()
            // Treba videti koji korisnik se brise
        });

        update_button.addEventListener((e) => {
            e.preventDefault()
            // Treba videti koji korisnik se updatuje
        });
    }
}
        

window.addEventListener('load', main);