/*
 *
 */
var viewModule = (function(tutorialModule) {

    // reactantView looks like:
    //    {
    //     "Chicken":
    //      {
    //        "nextId": 5,
    //        "elems": [
    //           {
    //             "id": "Chicken4",
    //             "x": 300,
    //             "y": 200,
    //           }, ...
    //         ],
    //      },
    //      "Egg":
    //       ...
    //    }
    var reactantView = {};


    // productView looks like:
    // {
    //   "Egg3Bacon4":
    //     {
    //       "nextId": 2,
    //       "products": [
    //         {
    //           "id": "Egg3Bacon4-0",
    //           "filled": true,
    //           "x": 600,
    //           "y": 100,
    //           "elemIds": ["Egg0", "Egg1", "Egg2", ...],
    //         },
    //       ],
    //     },
    // }
    var productView = {};

    var svgMap = {};

    // initializeScreen
    // assumes [state] looks like:
    // {
    //   "level": 5,
    //   "reactants": {
    //     "Chicken2Bacon": 1,
    //     ...
    //   },
    //   "products": {
    //     "Egg": 1,
    //     ...
    //   },
    //   "svgmap": {
    //     "Chicken2Bacon": "svg-reactant1.svg",
    //     ...
    //   },
    // }
    function initializeScreen(state, callBacks) {
        reactantView = {};
        productView = {};
        svgMap = state["svgmap"];

        /*<div id='home'>
            <img src='svg/svg-home-icon.svg' alt='Home'>
        </div>
        <div id='reset'>
            <img src='svg/svg-replay.svg' alt='Reset'>
        </div>
        <div id='output'>
            <img id='chef' src='img/chef.png' alt='Chef'>
            <label id='hint' onClick='viewModule.showHint()'>
                Need a hint?
            </label>
            <label id='level'>Level
        </div>*/
        

        var $homeButton = $("<div>", {id:"home"});
        $homeButton.append("<img src='svg/svg-home-icon.svg' alt='Home'>");
        $homeButton.click(homeScreen);

        var $resetButton = $("<div>", {id:"reset"});
        $resetButton.append("<img src='svg/svg-replay.svg' alt='Reset'>");
        //$resetButton.append("<img class='button-icon' src='svg/svg-replay.svg'>");
        //$resetButton.append("<span class='button-text'>Reset</span>");
        $resetButton.click(function(){
            $("#worktable").empty();
            $(document.body).empty();
            stateModule.initializeLevel(state["level"]);
        });
       
        var $userbar = $("<div>", {id:"output"});
        $userbar.append('<img id="chef" src="img/chef.png" alt="Chef">');
        $userbar.append('<label id="hint" onclick="viewModule.showHint()"></label>');
        
        // Run this only after the auto-tutorial is removed from the hints box
        if (state["level"] >= 4) {
            $(document).ready(function() {
               $("#hint").html(state["initMessage"]); 
            });
        }
        
        $userbar.append('<label id="level">Level ' + state['level'] + '</label>');
        $userbar.append($homeButton);
        $userbar.append($resetButton);
        
        var $worktable = $("<div>", {id:"worktable"});
        var $workbench= $("<div>", {id:"workbench"});

        var $main = $("<div>", {id:"main"});
        $($main).append($userbar);
        $($main).append($worktable);
        $($main).append($workbench);
        $(document.body).append($main);
        var clickable = true;
        var typable = false;
        var needsCheck = false;
        if (state['level'] >= 11) {
            clickable = false;
            typable = true;
        }
        if (state['level'] >= 19) {
            var $checkbutton = $("<div>", {id: "checkbutton", class:"shadow", text:"Check"});
            $checkbutton.click(function() {showCheck(callBacks);});
            $worktable.append($checkbutton);
            needsCheck = true;
        }
        showReactantsAndProductsBench(state, callBacks, "#workbench", clickable, typable, needsCheck);
        tutorialModule.checkTutorials(state["level"]);
    }
    
    /* Shows the reactants and products at the bottom of the screen.
     * Each level is either clickable or typable, not both.
     * No clicking and no typing is allowed on the winOverlay screen.
     */
    function showReactantsAndProductsBench(state, callBacks, locationID, clickable, typable, needsCheck) {
        svgMap = state["svgmap"];
        
        var i = 1;
        for (var reactant in state["reactants"]) {

            var $reactant = $("<div>", {class: "bottom-box reactant-box-" + (i++)});
            var coeff = state["reactants"][reactant];


            $(locationID).append($reactant);

            var reactantSVG = svgMap[reactant];

            // Add reactant images and coefficient badges
            $clickable = 
                $("<img>", 
                {
                    id: reactant+"-action",
                    src: "svg/" + reactantSVG, 
                    "data-name": reactant
                }
            );
            
            $reactant.append($clickable);
            
            $reactant.append(
                $("<input>", 
                {
                    id:reactant+"ReactantCoeff", 
                    class: "reactant-badge", 
                    type: "text", 
                    value: coeff, 
                    "data-name": reactant
                })
            );

            reactantView[reactant] = {
                "nextId": 0,
                "elems": [],
            }
            
            // Make reactant and product icons clickable in typical game mode.
            // Otherwise, do not make clickable for winOverlay.
            if (clickable) {
                $("#" + reactant + "ReactantCoeff").prop("readonly", true);
                
                // Add the shadow to make the image look clickable!
                $clickable.addClass("pic shadow"); 
                
                $clickable.click(function(event) {
                    var addReactant = callBacks["addReactant"];
                    var reactant = $(event.target).data("name");
                    addReactant(reactant, 1);
                    var coeff = $("#" + reactant + "ReactantCoeff");
                    coeff.val(parseInt(coeff.val()) + 1);
                });

                $minusButton = $("<div>", {class: "reactant-minus-button", text: "-", "data-name": reactant});
                $minusButton.click(function(event) {
                    var removeReactant = callBacks["removeReactant"];
                    var reactant = $(event.target).data("name");
                    removeReactant(reactant, 1); 
                    var coeff = $("#" + reactant + "ReactantCoeff");
                    if (coeff.val() > 0) {
                        coeff.val(parseInt(coeff.val()) - 1);
                    }
                });
                $reactant.append($minusButton);
                $foodLabel = $("<div>", {class: "reactant-label", text: state["names"][reactant], "data-name": reactant, "pointer-events": "none"});
                $reactant.append($foodLabel);
            } else if (typable) {
                // Make the coefficient badge take input when clicked
                //var previousValue = 0;
                $("#" + reactant + "ReactantCoeff").click(function(event) {
                    $(this).data('val', $(this).val());
                    $(this).val(''); // Clear the box of text to start typing
                });

                $("#" + reactant + "-action").css("cursor", "default");
                $("#" + reactant + "ReactantCoeff").css("cursor", "pointer");

                // Modifies amount of reactant if user clicks outside  
                // of coefficient badge or hits enter
                $("#" + reactant + "ReactantCoeff").bind('blur change', function(event) {
                    var previousValue = $(this).data('val');
                    var currentValue = $(this).val();
                    if (currentValue === '') {
                        $(this).val(previousValue);
                    } else if (!$.isNumeric(currentValue)) {
                        $(this).val(previousValue);
                        $("#hint").html("You must type in a number!");
                    } else if (currentValue < 0) {
                        $(this).val(previousValue);
                        $("#hint").html("You cannot type in a negative amount!");
                    } else if (!needsCheck) {
                        var modifyReactant = callBacks["modifyReactant"];
                        modifyReactant($(event.target).data("name"));
                    } 
                });
                
                $foodLabel = $("<div>", {class: "reactant-label", text: state["names"][reactant], "data-name": reactant, "pointer-events": "none"});
                $reactant.append($foodLabel);
            }
        }

        i = 1;
        for (var product in state["products"]) {
            var $product = $("<div>", {class: "bottom-box product-box-" + (i++)});
            var coeff = state["products"][product];
            

            $(locationID).append($product);

            var productSVG = svgMap[product];

            $clickable = 
                $("<img>", 
                {
                    id: product + "-action",
                    src: "svg/" + productSVG, 
                    "data-name": product
                }
            );

            $product.append($clickable);
            
            $product.append(
                $("<input>", 
                {
                    id: product+"ProductCoeff", 
                    class: "product-badge", 
                    type: "text", 
                    value: coeff, 
                    "data-name": product
                })
            );

            productView[product] = {
                "nextId": 0,
                "products": [],
            }
           
            if (clickable) {
                $("#" + product + "ProductCoeff").prop("readonly", true);
                
                // Add the shadow to make the image look clickable!
                $clickable.addClass("pic4 shadow"); 
                
                $clickable.click(function(event) {
                    var addProduct = callBacks["addProduct"];
                    var product = $(event.target).data("name");
                    addProduct(product, 1);
                    var coeff = $("#" + product + "ProductCoeff");
                    coeff.val(parseInt(coeff.val()) + 1);
                });

                $minusButton = $("<div>", {class: "product-minus-button", text: "-", "data-name": product});
                $minusButton.click(function(event) {
                    var removeProduct = callBacks["removeProduct"];
                    var product = $(event.target).data("name");
                    removeProduct(product, 1); 
                    var coeff = $("#" + product + "ProductCoeff");
                    if (coeff.val() > 0) {
                        coeff.val(parseInt(coeff.val()) - 1);
                    }
                });
                $product.append($minusButton);
                
                $foodLabel = $("<div>", {class: "product-label", text: state["names"][product], "data-name": product});
                $product.append($foodLabel);
            } else if (typable) {
                 // Make the coefficient badge take input when clicked
                $("#"+product+"ProductCoeff").click(function(event) {
                   $(this).data('val', $(this).val());
                   $(this).val(''); // Clear the box of text to start typing
                });
                $("#" + reactant + "-action").css("cursor", "default");
                $("#" + reactant + "ProductCoeff").css("cursor", "pointer");

                // Modifies amount of reactant if user clicks outside  
                // of coefficient badge or hits enter
                $("#"+product+"ProductCoeff").change(function(event) {
                    var previousValue = $(this).data('val');
                    var currentValue = $(this).val();
                    if (currentValue === '') {
                        $(this).val(previousValue);
                    } else if (!$.isNumeric(currentValue)) {
                        $(this).val(previousValue);
                        $("#hint").html("You must type in a number!");
                    } else if (currentValue < 0) {
                        $(this).val(previousValue);
                        $("#hint").html("You cannot type in a negative amount!");
                    } else if (!needsCheck) {
                        var modifyProduct = callBacks["modifyProduct"];
                        modifyProduct($(event.target).data("name"));
                    }
                });
                
                $foodLabel = $("<div>", {class: "product-label", text: state["names"][product], "data-name": product});
                $product.append($foodLabel);
            }
        }
    }

    function addReactantToView(elem, reactant = "") {
        var width = $("#worktable").width();
        var height = $("#worktable").height();
        var worktabley = $("#worktable").position().top + 30;

        var x = Math.round(Math.random() * width * 0.4);
        var y = Math.round(Math.random() * (height - 100)) + worktabley;

        // Each item in reactantView and productView need to have an
        // id and an x and a y coordinate
        if (!reactantView.hasOwnProperty(elem)) {
            reactantView[elem] = {
                "nextId": 0,
                "elems": [],
            }
        }
        id = elem + reactantView[elem]["nextId"];
        reactantView[elem]["nextId"]++;
        reactantView[elem]["elems"].push({"id":id, "x":x, "y":y});

        var img = "svg/" + svgMap["a" + elem];
        var $newImg = $("<img>", {id: id, src: img});
        $("#worktable").append($newImg);
        $newImg.css("position", "absolute");
        var xi = $("#" + reactant + "-action").offset().left;
        var yi = $("#" + reactant + "-action").offset().top;
        $newImg.css("left", xi + "px");
        $newImg.css("top",  yi + "px");
        $newImg.animate({left: x, top: y}, function() {
            checkCollapsibles();
        });
    }

    function addProductToView(product) {
        var width = $("#worktable").width();
        var height = $("#worktable").height();
        var worktabley = $("#worktable").position().top + 30;

        var x = width - Math.round(Math.random() * width * 0.4) - 150;
        var y = Math.round(Math.random() * (height - 150)) + worktabley;


        if (!productView.hasOwnProperty(product)) {

            productView[product] = {
                "nextId": 0,
                "products": [],
            }
        }
        var nextId = productView[product]["nextId"]++;
        var id = product + "-" + nextId;
        productView[product]["products"].push(
            {
                "id": id,
                "filled": false,
                "x": x,
                "y": y,
                "elemIds": [],
            }
        );

        var plate = svgMap[product + "Plate"];
        var $newImg = $("<img>", {id: id, src: "svg/" + plate});
        $("#worktable").append($newImg);
        $newImg.css("position", "absolute");
        var xi = $("#" + product+"-action").offset().left;
        var yi = $("#" + product+"-action").offset().top;
        $newImg.css("left", xi + "px");
        $newImg.css("top",  yi + "px");
        $newImg.animate({left: x, top: y}, function() {
            checkCollapsibles();
        });
    }

    // Can be called by either addProductToView or addReactantToView
    function checkCollapsibles() {
        var reactantElems = {};
        // reactantElems contains the number of existing free elements of each
        for (var elem in reactantView) {
            reactantElems[elem] = reactantView[elem]["elems"].length;
        }

        // iterate across each product
        for (var product in productView) {
            var reqs = nameToObj(product);
            var enough = true;
            // iterate across each element in product formula
            for (var elemReq in reqs) { 
                if ((typeof reactantElems[elemReq] === "undefined") || (reactantElems[elemReq] < reqs[elemReq])) {
                    enough = false;
                    break;
                }
            }
            if (!enough) {
                continue;
            }
            // Let's assume that only one product is MADE at any time
            var elemProductList = productView[product]["products"];
            var freeProduct = null;
            for (var i = 0; i < elemProductList.length; i++) { // for each chicken2Bacon3{object}
                if (elemProductList[i]["filled"]) {
                    continue;
                } else {
                    freeProduct = elemProductList[i];
                }
            } 
            if (freeProduct == null) {
                continue;
            }



            for (var elemReq in reqs) { // for each Chicken in Chicken-needs-3
                for (var i = 0; i < reqs[elemReq]; i++) {
                    console.log(elemReq + " " + reactantView[elemReq]["elems"]);
                    var freeElem = reactantView[elemReq]["elems"].pop();
                    var freeElemId = "#" + freeElem.id;

                    var xf = freeProduct.x + (Math.random() * 40);
                    var yf = freeProduct.y + (Math.random() * 40);
                    $(freeElemId).css("z-index", "2");
                    freeProduct["elemIds"].push(freeElem.id);
                    $(freeElemId).animate({left: xf, top: yf});
                }
                freeProduct["filled"] = true;
            }
        }
    }
    
    function addReactantBackToWorktable(elem, prevPosition) {
        var width = $("#worktable").width();
        var height = $("#worktable").height();
        var worktabley = $("#worktable").position().top + 30;
    
        var x = Math.round(Math.random() * width * 0.4);
        var y = Math.round(Math.random() * (height - 100)) + worktabley;
    
        // Each item in reactantView and productView need to have an
        // id and an x and a y coordinate
        if (!reactantView.hasOwnProperty(elem)) {
            reactantView[elem] = {
                "nextId": 0,
                "elems": [],
            }
        }
        id = elem + reactantView[elem]["nextId"];
        reactantView[elem]["nextId"]++;
        reactantView[elem]["elems"].push({"id":id, "x":x, "y":y});

        var img = "svg/" + svgMap["a" + elem];
        var $newImg = $("<img>", {id: id, src: img});
        $("#worktable").append($newImg);
        $newImg.css("position", "absolute");
        $newImg.css("left", prevPosition.left + "px");
        $newImg.css("top", prevPosition.top + "px");
        $newImg.animate({left: x, top: y}, function() {
            checkCollapsibles();
        });
    }
    
    function removeReactantFromView(elem) {
        // elem is still a free element
        if (reactantView[elem]["elems"].length > 0) {
            reactantView[elem]["nextId"]--;
            var element = reactantView[elem]["elems"].pop();
            $("img#" + element["id"]).remove();

        // otherwise elem is part of a product - 
        // delete elem and make all other elements free
        } else {
            // Used to determine if a product that contains elem was found            
            var found = false;
            
            // Iterate through each type of product
            for (var productName in productView) {
                
                // Continue if the productName contains the element to be removed
                // and products of that type are on the screen
                if (productName.indexOf(elem) !== -1 && productView[productName]["products"].length > 0) {
                    var i = 0;
                    while (i < productView[productName]["products"].length && !found) {

                        // Choose any product that is filled
                        if (productView[productName]["products"][i]["filled"]) {
                            found = true;
                            productView[productName]["products"][i]["filled"] = false;
                            var elementRemoved = false;

                            // Remove the product's contents
                            while (productView[productName]["products"][i]["elemIds"].length > 0) {
                                var elemId = productView[productName]["products"][i]["elemIds"].pop();
                                var indexOfFirstDigit = elemId.search(/\d/);
                                var element = elemId.substr(0, indexOfFirstDigit);
                                var prevPosition = $("#" + elemId).position();
                                
                                // Delete the element from the screen
                                $("img#" + elemId).remove();

                                // Check whether it was specifically elem that was removed
                                if (!elementRemoved && element === elem) {
                                    elementRemoved = true;
                                    // If not, make it a free element on the left-hand side of the screen
                                } else {
                                    addReactantBackToWorktable(element, prevPosition);
                                }
                            }
                        }
                        // Continue searching if we have not found a filled product
                        i++;
                    }
                }
                // Stop iterating through the products if one has already been cleared of elements
                if (found) {
                    break;
                }
            }
        }
    }

    function removeProductFromView(product) {
        productView[product]["nextId"]--;
        var compound = productView[product]["products"].pop();
        if (compound["filled"]) {
            for (var i = 0; i < compound["elemIds"].length; i++) {
                var elemId = compound["elemIds"][i];
                var prevPosition = $("img#" + elemId).position();

                $("img#" + elemId).remove();
                var indexOfFirstDigit = elemId.search(/\d/);
                var elem = elemId.substr(0, indexOfFirstDigit);
                addReactantBackToWorktable(elem, prevPosition);
            }
        }
        $("img#" + compound["id"]).remove();
    }

    function nextLevel(state, callBacks, initializeNext) {

        $homeSpan = $("<span>", {class:"button-home"});
        $homeSpan.append("<img class='button-icon' src='svg/svg-home-icon.svg'>");
        $homeSpan.append("<span class='button-text'>Home</span>");

        $replaySpan = $("<span>", {class:"button-replay"});
        $replaySpan.append("<img class='button-icon' src='svg/svg-replay.svg'>");
        $replaySpan.append("<span class='button-text'>Replay</span>");

        $nextSpan = $("<div>", {class:"overlay-bubble shadow"});
        
        $nextSpan.append("<p>Click here to go to the next level!</p>");
        
        showReactantsAndProductsBench(state, callBacks, $nextSpan, false, false);

        $overlay = $("<div>", {class:'overlay', id:'winOverlay'});

        $overlay.append("<img src='img/chef2.png' class='overlay-img'>");
        $overlay.append($("<div>", {
            class:'win_text',
            text:'Great job! You made all the food!'
        }));
        $nextSpan.click(function() {
            $overlay.remove();
            $("#worktable").empty();
            $(document.body).empty();
            initializeNext();
        });
        $replaySpan.click(function(){
           $overlay.remove();
            $("#worktable").empty();
            $(document.body).empty();
            stateModule.initializeLevel(state["level"]);
        });
        $homeSpan.click(function() {
           $overlay.remove();
            $("#worktable").empty();
            $(document.body).empty();
            homeScreen();
        });
        
        $overlay.append($nextSpan);
        $overlay.append($replaySpan);
        $overlay.append($homeSpan);
        $(document.body).append($overlay);
    }

    function showCheck(callBacks) {
        for (elem in reactantView) {

            var modifyReactant = callBacks["modifyReactant"];
            modifyReactant(elem);
        }
        for (elem in productView) {

            var modifyProduct = callBacks["modifyProduct"];
            modifyProduct(elem);
        }
    }

    function closeOverlay(overlayID) {
        $(overlayID).remove();
    }

    function showHint() {
        var hint = stateModule.specifyHint();
        $("#hint").html(hint);
    }
    
    function resetHint() {
        $("#hint").html("Need a hint? Click here!");
    }
    
    $(document).click(function(e) {
        var target = e.target;
        
        // Show hints automatically for beginning levels
        if (stateModule.getCurrentLevel() < 4) {
            showHint();
        // Otherwise, if not clicking on hint box, then reset it
        } else {
            if (!$(target).is("#hint")) {
                resetHint();
            }
        }
    });
    
	return {
		initializeScreen: initializeScreen,
        addReactant: addReactantToView,
        addProduct: addProductToView,
        removeProduct: removeProductFromView,
        removeReactant: removeReactantFromView,
		nextLevel: nextLevel,
		closeOverlay: closeOverlay,
        showHint: showHint,
        resetHint: resetHint,
    };
})(tutorialModule);
