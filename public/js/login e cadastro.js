const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

let nomes = [];
let emails = [];
let senhas = [];

function cadastrar() {
    nomes.push(document.getElementById('cadNome').value);
    emails.push(document.getElementById('cadEmail').value);
    senhas.push(document.getElementById('cadSenha').value);

    alert("Cadastro realizado!");
    container.classList.remove('active');
}

function entrar() {
    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    let achou = false;

    for (let i = 0; i < emails.length; i++) {
        if (emails[i] == email && senhas[i] == senha) {
            achou = true;
            alert("Bem-vindo(a), " + nomes[i] + "!");
        }
    }

    if (achou == false) {
        alert("E-mail ou senha incorretos");
    }
}