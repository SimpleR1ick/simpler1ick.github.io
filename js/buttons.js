const url = "http://127.0.0.1:5500/index.html";

$("#btn-curriculo").click(function () {
    location.href = url + "?dc=curriculum";
});

$("#btn-projetos").click(function () {
    location.href = url + "?dc=projects";
});

$("#btn-contatos").click(function () {
    location.href = url + "?dc=contacts";
});
