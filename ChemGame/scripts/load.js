var session_id = "";
var user_id = "";
var unlocked = 1;
var cookiesEnabled = true;

$(document).ready(function() {
    if ((Cookies.get('surveyed') === undefined) && cookiesEnabled) {
        window.location.replace('survey.html');
        return;
    }
    if (typeof Cookies.get('q1') !== undefined) {

        var currentTimestamp = Math.floor(Date.now() / 1000);
        var questDetail = {
            "q1": Cookies.get("q1"),
            "q1expl": Cookies.get("q1Exp"),
            "q2": Cookies.get("q2"),
            "q3": Cookies.get("q3"),
            // test 1
            "t1_1": Cookies.get('t1_1'),
            "t1_2": Cookies.get('t1_2'),
            "t1_3": Cookies.get('t1_3'),
            // test 2
            "t2_1": Cookies.get('t2_1'),
            "t2_2": Cookies.get('t2_2'),
            "t2_3": Cookies.get('t2_3'),
            "t2_4": Cookies.get('t2_4'),
            // test 3
            "t3_1": Cookies.get('t3_1'),
            "t3_2": Cookies.get('t3_2'),
            "t3_3": Cookies.get('t3_3'),
            "t3_4": Cookies.get('t3_4'),
            // test 4
            "t4_1": Cookies.get('t4_1'),
            "t4_2": Cookies.get('t4_2'),
            "t4_3": Cookies.get('t4_3'),
            "t4_4": Cookies.get('t4_4'),
            // test 5
            "t5_1": Cookies.get('t5_1'),
            "t5_2": Cookies.get('t5_2'),
            "t5_3": Cookies.get('t5_3'),
            "t5_4": Cookies.get('t5_4'),
            // test 6
            "t6_1": Cookies.get('t6_1'),
            "t6_2": Cookies.get('t6_2'),
            "t6_3": Cookies.get('t6_3'),
            "t6_4": Cookies.get('t6_4'),
        };
        $.ajax({
            url:"http://gdiac.cs.cornell.edu/cs6360/fall2016/player_quest.php",
            data: {
                "game_id": 2,
                "client_timestamp": currentTimestamp,
                "quest_id": 0,
                "user_id": Cookies.get('user_id'),
                "version_id": 0,
                "session_seq_id": 0,
                "session_id": Cookies.get('session_id'),
                "quest_detail": JSON.stringify(questDetail),
            },
            dataType: "jsonp",

            success: function(data) {
                console.log(data);
                alert("Got stuff back!");
            },
            error: function() {
                console.log("fix this");
                alert("noo");
            },
        });
        Cookies.remove('q1');
        Cookies.remove('q1expl');
        Cookies.remove('q2');
        Cookies.remove('q3');
    }
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

