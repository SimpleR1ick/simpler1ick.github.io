// URL DO SITE
const url = "https://simpler1ick.github.io/";

console.log(window.location.hostname)

$(document).ready(function () {
    // LINKS DA NAVBAR
    $("#lk-nav").click(function () {
        location.href = url;
    });

    $("#lk-curriculo").click(function () {
        location.href = url + "?content=curriculum";
    });

    $("#lk-projetos").click(function () {
        location.href = url + "?content=projects";
    });

    $("#lk-contatos").click(function () {
        location.href = url + "?content=contacts";
    });

    // BOTOES DA HOME
    $("#btn-curriculo").click(function () {
        location.href = url + "?content=curriculum";
    });

    $("#btn-projetos").click(function () {
        location.href = url + "?content=projects";
    });

    $("#btn-contatos").click(function () {
        location.href = url + "?content=contacts";
    });
});
