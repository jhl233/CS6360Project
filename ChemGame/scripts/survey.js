$(document).ready(function() {
    // timestamp in seconds
    var currentTimestamp = Math.floor(Date.now() / 1000);

    console.log("Cookies userId: " + Cookies.get('user_id'));

    if (Cookies.get('user_id') === undefined) {
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
                alert("Got stuff back! " + Cookies.get('user_id'));
            },
            error: function() {
                console.log("fix this");
                alert("noo");
            },
        });
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

function submitSurvey() {
    Cookies.set('q1', $('#grade')[0].value);
    Cookies.set('q1Exp', $('#gradeExp')[0].value);
    Cookies.set('q2', q2Resp);
    Cookies.set('q3', q3Resp);
    return;
}
