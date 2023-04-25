// Analisa o parâmetro de URL
$.getParameterByName = function(name, url) {
    if (!url) url = window.location.href;
  
    name = name.replace(/[\[\]]/g, "\\$&");
  
    // Regex da URL
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
  
    if (!results) return null;
  
    if (!results[2]) return "";
  
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};