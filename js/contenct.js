// Parse the URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;

    name = name.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Give the parameter a variable name
var dynamicContent = getParameterByName("dc");

$(document).ready(function () {
    // Check if the URL parameter is apples
    if (dynamicContent == 'curriculum') {
        $('#curriculum').show();
    }
    // Check if the URL parameter is oranges
    else if (dynamicContent == 'projects') {
        $('#projects').show();
    }
    // Check if the URL parameter is bananas
    else if (dynamicContent == 'contacts') {
        $('#contacts').show();
    }
    // Check if the URL parmeter is empty or not defined, display default content
    else {
        $('#default').show();
    }
});