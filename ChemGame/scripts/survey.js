function changeColor(btn) {
    var children=btn.parentNode.children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.backgroundColor="#FFFFFF";
    }     
    btn.style.backgroundColor="#45D0E2";
}

function submitSurvey() {
    alert("Yo " + $("#grade").value);
}

