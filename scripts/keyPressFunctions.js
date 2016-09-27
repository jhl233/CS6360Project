var keyMap = {};
keyMap['index.html'] = ['index.html', 'register.html'];
keyMap['register.html'] = ['register.html', 'index.html'];

$(document).keypress(function(e) {
    var fullPathName = window.location.href;
    var pathName = fullPathName.substr(fullPathName.lastIndexOf('/') + 1);
    // Press 1
    if (e.which == 49) {
        window.location.href=keyMap[pathName][1];
    } 
    // Press 2
    else if (e.which == 50) {
       window.location.href=keyMap[pathName][2];
    } 
    // Press 3
    else if (e.which == 51) {
       window.location.href=keyMap[pathName][3];
    } 
    // Press 4
    else if (e.which == 52) {
       window.location.href=keyMap[pathName][4];
    }   
});