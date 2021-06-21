let login_usuario;
let nome_usuario;

function redirecionar_login() {
    window.location.href = 'login.html';
}

function redirecionar_dashboard() {
    window.location.href = 'dashboard.html';
}

function verificar_autenticacao2() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;

    if (login_usuario == undefined) {
        redirecionar_login();
    } else {
        b_usuario.innerHTML = login_usuario;
        validar_sessao();
    }

}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;

    if (login_usuario == undefined) {
        redirecionar_login();
    } else {
        validar_sessao();
    }

}

function verificar_autenticacao3() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;

    if (login_usuario != undefined) {
        validar_sessao();
        redirecionar_dashboard()
    }
}


function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 3000);
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, {
            cache: 'no-store'
        })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, {
        cache: 'no-store'
    });
}