var unlocked = 1;

$(document).ready(function() {
    homeScreen();
});

function homeScreen() {
    $(document.body).empty();
    var $tutorialButton = $("<button>", {
        class:"index_button tutorial shadow",
        text:"Start",
        onClick:"stateModule.initializeLevel(1)"
    });

    var $startButton = $("<button>", {
        class:"index_button start shadow",
        text:"Levels",
        onClick: "showLevels()"
    });

    var $index_main = $("<div>", {class: "index_main"});
    $index_main.append("<img class='index_logo' src='img/logo.svg'>");
    $index_main.append($tutorialButton);
    $index_main.append($startButton);
    $(document.body).append($index_main);
}

function showLevels() {
    $(document.body).empty();
    var $levelMain = $("<div>", {class: "level_main"});
    $levelMain.append("<p>Choose a level to start from!</p>");

    var $levelBox = $("<div>", {class: "level_box"});
    
    for (var i = 1; i <= unlocked; i++) {
        $levelBox.append("<div class='pot_box_unlocked shadow' onClick='stateModule.initializeLevel(" 
                          + i + ")'>Lv." + i + "</div>");
    }
    
    var numLevels = 25;
    for (var i = unlocked+1; i <= numLevels; i++) {
        $levelBox.append("<div class='pot_box'>Lv." + i + "</div>")
    }

    $(document.body).append($levelMain);
    $(document.body).append($levelBox);
}

