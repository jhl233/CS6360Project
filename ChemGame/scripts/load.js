var session_id = "";
var user_id = "";

$(document).ready(function() {
    $.ajax({
        url:"http://gdiac.cs.cornell.edu/cs6360/fall2016/page_load.php?game_id=2&client_timestamp=0",
        dataType: "jsonp",

        success: function(data) {
            session_id = data["session_id"];
            user_id = data["user_id"];
            console.log(session_id);
        },
        error: function() {
            alert("noo");
        },
    });
    showPretest();
});

function showPretest() {
    
}

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
    

    var numLevels = 25;
    for (var i = 1; i <= numLevels; i++) {
         $levelBox.append("<div class='pot_box shadow' onClick='stateModule.initializeLevel(" 
                          + i + ")'>Lv." + i + "</div>");
    }

    $(document.body).append($levelMain);
    $(document.body).append($levelBox);
}

