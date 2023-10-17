// Dê ao parâmetro um nome de variável
const dynamicContent = $.getParameterByName("content");

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