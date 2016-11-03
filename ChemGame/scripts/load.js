$(document).ready(function() {
    homeScreen();
});

function homeScreen() {
    $(document.body).empty();
    var $tutorialButton = $("<button>", {
        class:"index_button tutorial shadow",
        text:"Tutorial",
        onClick:"showTutorial1()"
    });

    var $startButton = $("<button>", {
        class:"index_button start shadow",
        text:"Start",
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
    
    var numLevels = 10;
    for (var i = 1; i <= numLevels; i++) {
         $levelBox.append("<div class='pot_box shadow' onClick='stateModule.initializeLevel(" 
                          + i + ")'>Lv." + i + "</div>");
    }

    $(document.body).append($levelMain);
    $(document.body).append($levelBox);
}

function showTutorial1() {
    $(document.body).empty();

    var $overlayBubble = $("<div>", {
        id: "tutorial",
        class:"overlay-bubble shadow",
        text:"Hi, I'm your manager, Charlie. Welcome to your first day as Earth's finest chef!"});
    var $overlayContent = $("<div>", {
        class:"overlay-content",
    });
    $overlayBubble.click(showTutorial2);
    $overlayContent.append("<img src='img/chef2.png' class='overlay-img'>");
    $overlayContent.append($overlayBubble);

    $closeButton = $("<a id='closebtn'>&times;</a>");
    $closeButton.click(homeScreen);

    var $overlay = $("<div>", {class:"overlay", id:"tutorialOverlay1"});
    $overlay.append($closeButton);
    $overlay.append($overlayContent);

    $(document.body).append($overlay);

    stateModule.initializeLevel(6);
}

function showTutorial2() {
    $("#tutorial").text("As Earth's best and brightest, we need you to make the two famous dishes on the right using the two ingredients on the left.");

    $("#tutorialOverlay1").height("75%");
    $(".overlay-content").append($("<div>", {class:"arrow", id:"arrow1"}));
    $(".overlay-content").append($("<div>", {class:"arrow", id:"arrow2"}));
    $(".overlay-content").append($("<div>", {class:"arrow", id:"arrow3"}));
    $(".overlay-content").append($("<div>", {class:"arrow", id:"arrow4"}));
    $("#tutorial").off("click");
    $("#tutorial").click(showTutorial3);
}

function showTutorial3() {
    $(".overlay-bubble").text("You can add ingredients to the table by clicking on the pans here. Unfortunately, Wegmans only sells ingredients in weird bundles. So if you want to add 1 bacon here, you'll need to add 2 chicken drumsticks too.");
    $("#arrow3").remove();
    $("#arrow4").remove();
    $("#tutorial").off("click");
    $("#tutorial").click(showTutorial4);
}

function showTutorial4() {
    $(".overlay-bubble").text("When you have enough ingredients on the left, click these dishes down here to make a plate. Earth's greatest chef is also Earth's thriftiest; you win when you have no ingredients and no unfinished plates left over!");
    $("#arrow1").remove();
    $("#arrow2").remove();
    $(".overlay-content").append($("<div>", {class:"arrow", id:"arrow3"}));
    $(".overlay-content").append($("<div>", {class:"arrow", id:"arrow4"}));
    $("#tutorial").off("click");
    $("#tutorial").click(showTutorial5);
}

function showTutorial5() {
    $(".overlay-bubble").text("With that, you're ready to start! Go forth and make Earth's greatest dishes!");
    $("#arrow3").remove();
    $("#arrow4").remove();
    $("#tutorial").off("click");
    $("#tutorial").click(homeScreen);
}
