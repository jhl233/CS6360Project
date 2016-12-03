$(document).ready(function() {
    initiateSession();
});

// ------------------------------------------------------
// Cookies and AJAX functions 
// -----------------------------------------------------
var dynamic_quest_id = "";
function initiateSession() {
    var currentTimestamp = Math.floor(Date.now() / 1000);
    $.ajax({
        url:"https://gdiac.cs.cornell.edu/cs6360/fall2016/player_quest.php",
        data: {
            "game_id": 2,
            "client_timestamp": currentTimestamp,
            "quest_id": 26,
            "user_id": Cookies.get('user_id'),
            "version_id": 0,
            "session_seq_id": Cookies.get('session_seq_id'),
            "session_id": Cookies.get('session_id'),
            "quest_detail": "Posttest _ quest 26",
        },
        dataType: "jsonp",

        success: function(data) {
            Cookies.set('session_seq_id', parseInt(Cookies.get('session_seq_id')) + 1);
            dynamic_quest_id = data["dynamic_quest_id"];
        },

        error: function() {
            console.log("Error Initiating Post Test");
        },
    });
}

function endPosttest(){
    var currentTimestamp = Math.floor(Date.now() / 1000);
    $.ajax({
        url:"https://gdiac.cs.cornell.edu/cs6360/fall2016/player_quest_end.php",
        data: {
            "dynamic_quest_id": dynamic_quest_id,
        },
        dataType: "jsonp",

        success: function(data) {
        },

        error: function() {
            console.log("Error ending posttest");
        },
    });
}

function logPosttestResults() {

    var currentTimestamp = Math.floor(Date.now() / 1000);
    var actionDetail = {
        //test 1 
        't1_1': $("[name=test1_1]")[0].value,
        't1_2': $("[name=test1_2]")[0].value,
        't1_3': $("[name=test1_3]")[0].value,

        // test 2
        't2_1': $("[name=test2_1]")[0].value,
        't2_2': $("[name=test2_2]")[0].value,
        't2_3': $("[name=test2_3]")[0].value,
        't2_4': $("[name=test2_4]")[0].value,

        // test 3
        't3_1': $("[name=test3_1]")[0].value,
        't3_2': $("[name=test3_2]")[0].value,
        't3_3': $("[name=test3_3]")[0].value,
        't3_4': $("[name=test3_4]")[0].value,

        // test 4
        't4_1': $("[name=test4_1]")[0].value,
        't4_2': $("[name=test4_2]")[0].value,
        't4_3': $("[name=test4_3]")[0].value,
        't4_4': $("[name=test4_4]")[0].value,

        // test 5
        't5_1': $("[name=test5_1]")[0].value,
        't5_2': $("[name=test5_2]")[0].value,
        't5_3': $("[name=test5_3]")[0].value,
        't5_4': $("[name=test5_4]")[0].value,

        // test 6
        't6_1': $("[name=test6_1]")[0].value,
        't6_2': $("[name=test6_2]")[0].value,
        't6_3': $("[name=test6_3]")[0].value,
        't6_4': $("[name=test6_4]")[0].value,
    };

    $.ajax({
        url:"https://gdiac.cs.cornell.edu/cs6360/fall2016/player_action.php",
        data: {
            "game_id": 2,
            "client_timestamp": currentTimestamp,
            "quest_id": 26,
            "user_id": Cookies.get('user_id'),
            "action_id": 0,
            "session_seq_id": Cookies.get('session_seq_id'),
            "quest_seq_id": 0,
            "dynamic_quest_id": dynamic_quest_id,
            "action_detail": JSON.stringify(actionDetail),
        },
        dataType: "jsonp",

        success: function() {
            Cookies.set('session_seq_id', parseInt(Cookies.get('session_seq_id')) + 1);
            endPosttest();
            cleanPosttestCookies();
        },

        error: function() {
            console.log("Error logging post test results");
            cleanPosttestCookies();
        },
    });
}

function cleanPosttestCookies() {
    //test 1
    Cookies.remove('t1_1');
    Cookies.remove('t1_2');
    Cookies.remove('t1_3');
    // test 2
    Cookies.remove('t2_1');
    Cookies.remove('t2_2');
    Cookies.remove('t2_3');
    Cookies.remove('t2_4');
    // test 3
    Cookies.remove('t3_1');
    Cookies.remove('t3_2');
    Cookies.remove('t3_3');
    Cookies.remove('t3_4');
    // test 4
    Cookies.remove('t4_1');
    Cookies.remove('t4_2');
    Cookies.remove('t4_3');
    Cookies.remove('t4_4');
    // test 5
    Cookies.remove('t5_1');
    Cookies.remove('t5_2');
    Cookies.remove('t5_3');
    Cookies.remove('t5_4');
    // test 6
    Cookies.remove('t6_1');
    Cookies.remove('t6_2');
    Cookies.remove('t6_3');
    Cookies.remove('t6_4');
}
