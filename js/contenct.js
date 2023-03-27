// Analisa o parâmetro de URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;

    name = name.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);

    if (!results) return null;
    
    if (!results[2]) return "";

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Dê ao parâmetro um nome de variável
var dynamicContent = getParameterByName("dc");

$(document).ready(function () {
    // Verifique se o parâmetro de URL é currículo
    if (dynamicContent == 'curriculum') {
        $('#curriculum').show();
    }
    // Verifique se o parâmetro de URL é projetos
    else if (dynamicContent == 'projects') {
        $('#projects').show();
    }
    // Verifique se o parâmetro de URL é contatos
    else if (dynamicContent == 'contacts') {
        $('#contacts').show();
    }
    // Verifica se o parâmetro de URL está vazio ou não definido, exibe o conteúdo padrão
    else {
        $('#default').show();
    }
});