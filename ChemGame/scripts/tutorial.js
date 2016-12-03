var tutorialModule = (function() {

    var addTutorialElements = {
        1: level1,
        2: level2,
        3: level3,
        11: level11,
        12: level12,
        19: level19,
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
            text:"Good job with the 'Bacon Twins'! Not everyone makes it this far, but I can tell you've got potential. For this next order, you'll need to use two ingredients to make a new dish, 'Bacon Twins w/ Broccoli', aka 'Healthy Bacon'."
        });
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
        $("#arrow5").remove();
        $("#tutorialOverlay1").height("65%");
        $(".overlay-content").append($("<div>", {class:"arrow", id:"arrow5"}));
        $("#tutorial").off("click");
        $(".reactant-box-1").css("pointer-events", "none");
        $(".reactant-box-2").css("pointer-events", "none");
        $(".product-box-1").css("pointer-events", "none");
        $("#Broccoli-minus").css("pointer-events", "all");
        
        // TODO: Prevent all buttons other than remove button from being clicked
        var nextLevelHandler = function(e) {
            if ($(e.target).is("#Broccoli-minus")) {
                $("#arrow5").remove();
                $(".overlay").width("0%");
                setTimeout(level2_3, 1000);
            }
        }
        
        $(document).on("click.nextLevelHandler", nextLevelHandler);
    }
    
    function level2_3() {
        $(document).off("click.nextLevelHandler");
        $("#tutorial").text("Great, let's get started then!");
        $(".reactant-box-1").css("pointer-events", "all");
        $(".reactant-box-2").css("pointer-events", "all");
        $(".product-box-1").css("pointer-events", "all");
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
    
    function level11() {
        var $overlayBubble = $("<div>", {
           id: "tutorial",
           class: "overlay-bubble shadow",
           text: "Oh no! Our clicky button technology stopped working, so we cannot simply click on the plates anymore! What do we do???" 
        });
        var $overlayContent = $("<div>", {
           class: "overlay-content", 
        });
        $overlayBubble.click(level11_2);
        $overlayContent.append("<img id='chefPic' src='img/alien.png' class='overlay-img'>");
        $overlayContent.append($overlayBubble);
    
        $closeButton = $("<a id='closebtn'>&times;</a>");
        $closeButton.click(homeScreen);
    
        var $overlay = $("<div>", {class: "overlay", id:"tutorialOverlay1"});
        $overlay.append($closeButton);
        $overlay.append($overlayContent);
    
        $(document.body).append($overlay);
    }
    
    function level11_2() {
        $("#chefPic").attr("src", "img/chef2.png");
        $("#tutorial").text("That's ok, we can be flexible. ...How about typing?");
        $("#tutorial").click(level11_3);
    }
    
    function level11_3() {
        $("#chefPic").attr("src", "img/alien.png");
        $("#tutorial").text("Isn't that harder?");
        $("#tutorial").click(level11_4);
    }
    
    function level11_4() {
        $("#chefPic").attr("src", "img/chef2.png");
        $("#tutorial").text("I have faith that you can do it. You just have to think a bit harder before you type something to match the food to the plates.");
        $("#tutorial").click(level11_5);
    }
    
    function level11_5() {
        $("#chefPic").attr("src", "img/alien.png");
        $("#tutorial").text("I'll be brave!");
        $("#tutorial").click(level11_6);
    }
    
    function level11_6() {
        $("#chefPic").attr("src", "img/chef2.png");
        $("#tutorial").text("That's the spirit! Remember the Carrot Triplets and how we had to double the number of plates? Let's do that now by clicking on the number box next to Carrot Triplets. Type a 2 into the box and either press Enter or click outside the box.");
        $("#tutorialOverlay1").height("65%");
        $("#arrow6").remove(); // In case someone left the page and came back, need to refresh
        $(".overlay-content").append($("<div>", {class:"arrow", id:"arrow6"}));
        
        $.fx.off = true;
        $("#tutorial").css("pointer-events", "none");
        $(".reactant-badge").prop("disabled", true);
        $(".reactant-badge").css("cursor", "default");
        var typingHandler = function(e) {
            if ($(e.target).is(".product-badge") && $(".product-badge").val() == 2) {
                $("#arrow6").remove();
                $.fx.off = false;
                $(".reactant-badge").prop("disabled", false);
                $(".reactant-badge").css("cursor", "pointer");
                $(".overlay").width("0%");
                $(".product-badge").unbind("blur change", typingHandler);
                setTimeout(level11_7, 2000);
            }
        }
        $(".product-badge").bind("blur change", typingHandler);
    }
    
    function level11_7() {
        $(".overlay").width("100%");
        $("#chefPic").attr("src", "img/chef2.png");
        $("#tutorial").text("Now let's add 3 Carrot Twin bundles to match the total number of carrots for the plates. Go ahead and type a 3 in the number box for Carrot Twins. Then press Enter or click outside the box.");
        $("#arrow5").remove(); // In case someone left the page and came back, need to refresh
        $(".overlay-content").append($("<div>", {class:"arrow", id:"arrow5"}));
        
        $.fx.off = true;
        $(".product-badge").prop("disabled", true);
        $(".product-badge").css("cursor", "default");
        var typingHandler = function(e) {
            if ($(e.target).is(".reactant-badge") && $(".reactant-badge").val() == 3) {
                $("#arrow5").remove();
                $.fx.off = false;
                $(".product-badge").prop("disabled", false);
                $(".product-badge").css("cursor", "pointer");
                $(".overlay").width("0%");
                $(".reactant-badge").unbind("blur change", typingHandler);
            }
        }
        $(".reactant-badge").bind("blur change", typingHandler);
    }
    
    function level12() {
        var $overlayBubble = $("<div>", {
           id: "tutorial",
           class: "overlay-bubble shadow",
           text: "You're awesome! Please keep using our new typing technology from now on!" 
        });
        var $overlayContent = $("<div>", {
           class: "overlay-content", 
        });
        $overlayBubble.click(function() {$(".overlay").width("0%");});
        $overlayContent.append("<img id='chefPic' src='img/chef2.png' class='overlay-img'>");
        $overlayContent.append($overlayBubble);
    
        $closeButton = $("<a id='closebtn'>&times;</a>");
        $closeButton.click(homeScreen);
    
        var $overlay = $("<div>", {class: "overlay", id:"tutorialOverlay1"});
        $overlay.append($closeButton);
        $overlay.append($overlayContent);
    
        $(document.body).append($overlay);
    }
    
    function level19() {
        $("#checkbutton").css("opacity", 0);
        $("#checkbutton").css("pointer-events", "none");
        
        var $overlayBubble = $("<div>", {
           id: "tutorial",
           class: "overlay-bubble shadow",
           text: "You know what? I think it's time for the next step of your cooking journey! All amazing chefs can eyeball the number of ingredients that they need."
        });
        var $overlayContent = $("<div>", {
           class: "overlay-content", 
        });
        $overlayBubble.click(level19_2);
        $overlayContent.append("<img id='chefPic' src='img/chef2.png' class='overlay-img'>");
        $overlayContent.append($overlayBubble);
    
        $closeButton = $("<a id='closebtn'>&times;</a>");
        $closeButton.click(homeScreen);
    
        var $overlay = $("<div>", {class: "overlay", id:"tutorialOverlay1"});
        $overlay.append($closeButton);
        $overlay.append($overlayContent);
    
        $(document.body).append($overlay);
    }
    
    function level19_2() {
        $("#chefPic").attr("src", "img/chef2.png");
        $("#tutorial").text("So, I'm adding a Check button. When you click on it, you have five seconds to see your current results on the table before the check button reappears and blocks your view.");
        $("#tutorial").click(level19_3);
    }
    
    function level19_3() {
        $("#chefPic").attr("src", "img/alien.png");
        $("#tutorial").text("Oh boy, you got it!!!");
        $("#tutorial").click(function() {
            $(".overlay").width("0%");
            $("#checkbutton").css("opacity", 1);
            $("#checkbutton").css("pointer-events", "all");
        });
    }

    return {
        checkTutorials: checkTutorials,   
    };

})();
