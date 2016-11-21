var tutorialModule = (function() {

    var addTutorialElements = {
        1: level1,
        2: level2,
    }

    function checkTutorials(levelNum) {
        if (addTutorialElements[levelNum]) {
            addTutorialElements[levelNum]();
        }
    }

    function level1() {

        var $overlayBubble = $("<div>", {
            id: "tutorial",
            class:"overlay-bubble shadow",
            text:"Hi, I'm your manager, Charlie. Welcome to your first day on your journey to becoming Earth's finest chef!"});
        var $overlayContent = $("<div>", {
            class:"overlay-content",
        });
        $overlayBubble.click(level1_2);
        $overlayContent.append("<img src='img/chef2.png' class='overlay-img'>");
        $overlayContent.append($overlayBubble);

        $closeButton = $("<a id='closebtn'>&times;</a>");
        $closeButton.click(homeScreen);

        var $overlay = $("<div>", {class:"overlay", id:"tutorialOverlay1"});
        $overlay.append($closeButton);
        $overlay.append($overlayContent);

        $(document.body).append($overlay);
    }

    function level1_2() {
        $("#tutorial").text("They say a journey of a miles begins with a single step. Your first step is to create the very simple dish on the right called: 'Bacon Twins'");
        $("#tutorialOverlay1").height("65%");
        //$(".overlay-content").append($("<div>", {class:"arrow", id:"arrow3"}));
        $("#tutorial").off("click");
        $(".reactant-box-1").css("pointer-events", "none");
        $(".product-box-1").css("pointer-events", "none");
        $("#tutorial").click(level1_3);
    }

    function level1_3() {
        $(".overlay-bubble").text("Fortunately, the store sells bacon in packages of two! Click on the package on the left to add two slices of bacon to the worktable.");
        $("#arrow3").remove();
        $(".overlay-content").append($("<div>", {class:"arrow", id:"arrow1"}));
        $("#tutorial").off("click");
        $("#tutorial").css("pointer-events", "none");
        $("#Bacon2r-action").css("pointer-events", "all");
        $("#Bacon2r-action").click(function(){
            $(".overlay").width("0%");
            setTimeout(level1_4, 1000);
        });
    }

    function level1_4() {
        $(".overlay").width("100%");
        $(".overlay-bubble").text("Looks like you've got enough bacon to make '2 Slices of Bacon'. Click the plate here to send it out to the customers!");
        $("#arrow1").remove();
        $(".overlay-content").append($("<div>", {class:"arrow", id:"arrow3"}));
        $("#Bacon2r-action").css("pointer-events","none");
        $("#Bacon2p-action").css("pointer-events","all");
        $("#Bacon2p-action").click(function() {
            $(".overlay").width("0%");
        });
    }

    function level2() {
        var $overlayBubble = $("<div>", {
            id: "tutorial",
            class:"overlay-bubble shadow",
            text:"Good job with the '2 Slices of Bacon'! Not everyone makes it this far, but I can tell you've got potential. For this next order, you'll need to use two ingredients to make a new dish, '2 Slices of Bacon with Broccoli', aka 'Healthy Bacon'"});
        var $overlayContent = $("<div>", {
            class:"overlay-content",
        });
        $overlayBubble.click(function() {$(".overlay").width('0%');});
        $overlayContent.append("<img src='img/chef2.png' class='overlay-img'>");
        $overlayContent.append($overlayBubble);

        $closeButton = $("<a id='closebtn'>&times;</a>");
        $closeButton.click(homeScreen);

        var $overlay = $("<div>", {class:"overlay", id:"tutorialOverlay1"});
        $overlay.append($closeButton);
        $overlay.append($overlayContent);

        $(document.body).append($overlay);
    }

    return {
        checkTutorials: checkTutorials,   
    };

})();
