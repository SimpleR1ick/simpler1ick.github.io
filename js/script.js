// Analisa o parâmetro de URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    
    name = name.replace(/[\[\]]/g, "\\$&");

    // Regex da URL
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);

    if (!results) return null;
    
    if (!results[2]) return "";

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}