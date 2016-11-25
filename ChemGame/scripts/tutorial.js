var tutorialModule = (function() {

    var addTutorialElements = {
        1: level1,
        2: level2,
        3: level3,
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
        $(".overlay-bubble").text("Looks like you've got enough bacon to make 'Bacon Twins'. Click the plate here to send it out to the customers!");
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
            text:"Good job with the 'Bacon Twins'! Not everyone makes it this far, but I can tell you've got potential. For this next order, you'll need to use two ingredients to make a new dish, 'Bacon Twins w/ Broccoli', aka 'Healthy Bacon'."});
        var $overlayContent = $("<div>", {
            class:"overlay-content",
        });
        //$overlayBubble.click(function() {$(".overlay").width('0%');});
        $overlayBubble.click(level2_2);
        $overlayContent.append("<img src='img/chef2.png' class='overlay-img'>");
        $overlayContent.append($overlayBubble);

        $closeButton = $("<a id='closebtn'>&times;</a>");
        $closeButton.click(homeScreen);

        var $overlay = $("<div>", {class:"overlay", id:"tutorialOverlay1"});
        $overlay.append($closeButton);
        $overlay.append($overlayContent);

        $(document.body).append($overlay);
    }
    
    function level2_2() {
        // Add an extra broccoli for the user to remove
        $("#Broccoli-action").trigger("click");
        
        $("#tutorial").text("If you accidentally add too much of an item, you can hit the red minus sign to remove it. Go ahead and try it!");
        $("#tutorialOverlay1").height("65%");
        $(".overlay-content").append($("<div>", {class:"arrow", id:"arrow1"}));
        $("#tutorial").off("click");
        
        // TODO: Prevent all buttons other than remove button from being clicked
        var nextLevelHandler = function(e) {
            if ($(e.target).is("#Broccoli-minus")) {
                $(".overlay").width("0%");
                setTimeout(level2_3, 1000);
            }
        }
        
        $(document).on("click.nextLevelHandler", nextLevelHandler);
    }
    
    function level2_3() {
        $(document).off("click.nextLevelHandler");
        $("#arrow1").remove();
        $("#tutorial").text("Great, let's get started then!");
        $(".overlay").width("100%");
        $("#tutorialOverlay1").height("100%");
        $("#tutorial").click(function() {$(".overlay").width('0%');});
    }
    
    function level3() {
        var $overlayBubble = $("<div>", {
           id: "tutorial",
           class: "overlay-bubble shadow",
           text: "You got it! Now, let me introduce you to my newest sous-chef, Yummy." 
        });
        var $overlayContent = $("<div>", {
           class: "overlay-content", 
        });
        $overlayBubble.click(level3_2);
        $overlayContent.append("<img id='chefPic' src='img/chef2.png' class='overlay-img'>");
        $overlayContent.append($overlayBubble);
    
        $closeButton = $("<a id='closebtn'>&times;</a>");
        $closeButton.click(homeScreen);
    
        var $overlay = $("<div>", {class: "overlay", id:"tutorialOverlay1"});
        $overlay.append($closeButton);
        $overlay.append($overlayContent);
    
        $(document.body).append($overlay);
    }
    
    function level3_2() {
        $("#chefPic").attr("src", "img/alien.png");
        
        $("#tutorial").text("Hi! I am so excited to work with you and Chef Charlie to learn to become a master chef! After I get my chef certification here, I hope to open my own restaurant some day!");
        
        $("#tutorial").click(level3_3);
    }
    
    function level3_3() {
        $("#chefPic").attr("src", "img/chef.png");
        
        $("#tutorial").text("Don't be surprised if you start to see foods that you've never seen before. I'll make sure Yummy only adds foods that are safe for both humans and aliens.");
        
        $("#tutorial").click(level3_4);
    }
    
    function level3_4() {
        $("#chefPic").attr("src", "img/alien&chef.png");
        
        $("#tutorial").text("Let's get started!");
        
        $("#tutorial").click(function() {$(".overlay").width('0%');});
    }

    return {
        checkTutorials: checkTutorials,   
    };

})();
