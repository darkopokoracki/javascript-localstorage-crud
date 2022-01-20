// CRUD = Create, Read, Update, Delete
class User {
    constructor(id, firstname, lastname, username, password) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
    }
}

function main() {
    console.log('Funkcija je pokrenuta');

    // Pravimo 'bazu' pod nazivom crud
    // Struktura ce biti ovakva:
    /*
        Kljuc u localstorageu ce biti naziv baze
        - baza ce imati samo jednu tabelu koja ce biti predstavljena nizom
        - Svaki objekat ce predstavljati novi red u tabeli
    */

    // 1. CREATE
    let tabela_korisnik = ['Filip'];
    localStorage.setItem('crud', tabela_korisnik);
    
    let dodajButton = document.getElementById('dodaj');
    dodajButton.addEventListener('click', dodajKorisnika);
}

function dodajKorisnika(e) {
    e.preventDefault();
}

window.addEventListener('load', main);