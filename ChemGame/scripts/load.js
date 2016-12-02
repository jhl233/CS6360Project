var session_id = "";
var user_id = "";
var unlocked = 1;

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
            console.log("fix this");
            alert("noo");
        },
    });
    homeScreen();
});

function submitSurvey() {
    alert("no");
    console.log("hayy");
}

function showSurvey() {
    $(document.body).empty();

    var $survey = $("<div>");
    $survey.append("<img src='img/chef&alien.png' id='surveyChef'>");
    $survey.append("<p id='surveyP' class='survey-text1'>Before we begin, help us out by telling us a bit about yourself.</p>");

    var $q1 = $("<div>", {class:"q1"});
    $q1.append("<div class='questiontext' id='ques1'><label>Q1. What grade are you in?</label></div>");
    $q1.append(" <div class='questiontext' id='ques1'> \
                    <label>Q1. What grade are you in?</label> \
                </div> \
                <select id='grade' onchange='' size='1'> \
                    <option value='6'>6th</option> \
                    <option value='7'>7th</option> \
                    <option value='8'>8th</option> \
                    <option value='9'>9th</option> \
                    <option value='10'>10th</option> \
                    <option value='11'>11th</option> \
                    <option value='12'>12th</option> \
                    <option value='NA'>Not Applicable</option> \
                </select> \
                 <div class='reason'> \
                     <label>If not applicable, specify why.</label> \
                     <textarea></textarea> \
                 </div>");
    $(document.body).append($q1);

    $(document.body).append($survey);
       
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
    $(".level_box").css("overflow", "scroll");
    var $levelMain = $("<div>", {class: "level_main"});
    $levelMain.append("<p>Choose a level to start from!</p>");

    var $levelBox = $("<div>", {class: "level_box"});
    
    for (var i = 1; i <= unlocked; i++) {
        $levelBox.append("<div class='pot_box_unlocked shadow' onClick='stateModule.initializeLevel(" 
                          + i + ")'>Lv." + i + "</div>");
    }
    
    var numLevels = 25;
    for (var i = unlocked+1; i <= numLevels; i++) {
        $levelBox.append("<div class='pot_box'>Lv." + i + "</div>");
    }

    $(document.body).append($levelMain);
    $(document.body).append($levelBox);
}

