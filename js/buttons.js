// URL DO SITE
const url = "http://127.0.0.1:5500/index.html";

$(document).ready(function () {
    // LINKS DA NAVBAR
    $("#lk-nav").click(function () {
        location.href = url;
    });

    $("#lk-curriculo").click(function () {
        location.href = url + "?dc=curriculum";
    });

    $("#lk-projetos").click(function () {
        location.href = url + "?dc=projects";
    });

    $("#lk-contatos").click(function () {
        location.href = url + "?dc=contacts";
    });

    // BOTOES DA HOME
    $("#btn-curriculo").click(function () {
        location.href = url + "?dc=curriculum";
    });

    $("#btn-projetos").click(function () {
        location.href = url + "?dc=projects";
    });

    $("#btn-contatos").click(function () {
        location.href = url + "?dc=contacts";
    });
});
