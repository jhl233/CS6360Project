var cookiesEnabled = true;
var dynamic_quest_id = "";

$(document).ready(function() {
    // timestamp in seconds

    console.log("Cookies userId: " + Cookies.get('user_id'));
    Cookies.set('session_seq_id', 0);

    if ((Cookies.get('user_id') === undefined) ||
           (Cookies.get('session_id') === undefined)) {
        initiateSession();
    }
});

var q2Resp = 0;
var q3Resp = 0;

function changeColor(btn, quesNum, value) {
    var children=btn.parentNode.children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.backgroundColor="#FFFFFF";
    }     
    btn.style.backgroundColor="#45D0E2";
    if (quesNum == 2) {
        q2Resp = value;
    } else if (quesNum == 3) {
        q3Resp = value;
    }
}

// ----------------------------------------------------
// Cookies and AJAX functions
// ----------------------------------------------------
function initiateSession() {
    var currentTimestamp = Math.floor(Date.now() / 1000);
    $.ajax({
        url:"https://gdiac.cs.cornell.edu/cs6360/fall2016/page_load.php",
        data: {
            "game_id": 2,
            "client_timestamp": currentTimestamp,
        },
        dataType: "jsonp",

        success: function(data) {
            Cookies.set('user_id', data["user_id"], {expires: 7});
            Cookies.set('session_id', data["session_id"]);
            if (Cookies.get('user_id') === undefined) {
                //TODO: might remove this
                cookiesEnabled = false;
                return;
            }
            initiatePretest();
        },
        error: function() {
            console.log("Error initiating session");
        },
    });
}

function submitSurvey() {
    Cookies.set('q1', $('#grade')[0].value);
    Cookies.set('q1Exp', $('#gradeExp')[0].value);
    Cookies.set('q2', q2Resp);
    Cookies.set('q3', q3Resp);
    return;
}

function initiatePretest() {
    var currentTimestamp = Math.floor(Date.now() / 1000);
    $.ajax({
        url:"https://gdiac.cs.cornell.edu/cs6360/fall2016/player_quest.php",
        data: {
            "game_id": 2,
            "client_timestamp": currentTimestamp,
            "quest_id": 0,
            "user_id": Cookies.get('user_id'),
            "version_id": 0,
            "session_seq_id": Cookies.get('session_seq_id'),
            "session_id": Cookies.get('session_id'),
            "quest_detail": "Pretest _ quest 0",
        },
        dataType: "jsonp",

        success: function(data) {
            Cookies.set('session_seq_id', parseInt(Cookies.get('session_seq_id')) + 1);
            Cookies.set('dynamic_quest_id', data['dynamic_quest_id']);
        },
        error: function() {
            console.log("Error initiating pretest");
        },
    });
}

