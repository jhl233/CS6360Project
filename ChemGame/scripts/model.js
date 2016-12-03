/*
 *
 */
var stateModule = (function(viewModule, levelModule) {

    var currentState = {
        "reactants": {},
        "products": {},
        "svgmap": {},
        "names": {},
    };

    var currentLevel = {};

    var callBacks = {
        getCurrentLevel: getCurrentLevel,
        initializeLevel: initializeLevel,
        addReactant: addReactant,
        addProduct: addProduct,
        removeReactant: removeReactant,
        removeProduct: removeProduct,
        modifyReactant: modifyReactant,
        modifyProduct: modifyProduct,
    };
    
    var isTutorialLevel = false;

    function getCurrentLevel() {
        return currentState["level"];
    }
    
    function getInitMessage(levelNum) {
        msg = "";
        switch (levelNum) {
            case 4: msg = "Try doubling the odd number of carrots in Carrot Meal to make it even!"; break;
            case 5: msg = "Double the odd number of carrots in Broccoli, Egg, and Carrots to make it even!"; break;
            case 6: msg = "Great! Just focus on making one dish at a time!"; break;
            case 7: msg = "You've got the hang of this! Keep going!"; break;
            case 8: msg = "Have you ever tried Na? It's so yummy!"; break;
            case 9: msg = "Yay, let's make more food! It tastes like air!"; break;
            case 10: msg = "We aliens love Mg. Eat just a little bit for a healthy body!"; break;
            case 11: msg = "Click on the number boxes, type in a number, and hit enter!"; break;
            case 12: msg = "Keep typing in numbers to make my favorite foods!"; break;
            case 13: msg = "Just like before, focus on making one dish at a time!"; break;
            case 14: msg = "Can you make a Hearty English Breakfast like Chef Charlie?"; break;
            case 15: msg = "You'll be a master chef soon!"; break;
            case 16: msg = "Time for me to get some practice!"; break;
            case 17: msg = "It's all me! Let's make the O and plate it first!"; break;
            case 18: msg = "Hm... This time, let's work on figuring out the H first."; break;
            case 19: msg = "Hit 'Check' when you are done!"; break;
            case 20: msg = "Can we make C first this time?"; break;
            case 21: msg = "F is great for strong, healthy teeth!"; break;
            case 22: msg = "Hey, we can balance the odd and even O's again!"; break;
            case 23: msg = "Mmm, time to make the comfort foods of home!"; break;
            case 24: msg = "I think you humans know Sn as tin, you know, the stuff soup cans are made of."; break;
            case 25: msg = "Ca stands for calcium, like in milk. Drink it for strong, healthy bones!"; break;
            default: msg = "Need a hint? Click here!"; break;
        }
        return msg;
        
    }
    
    /* 
     * initializeLevel
     * given [levelNum], populates currentState
     * */
    function initializeLevel(levelNum, isTutorial = false) {
        currentLevel = levelModule.levels[levelNum];
        currentState["reactants"] = {};
        currentState["products"] = {};
        currentState["svgmap"] = {};
        currentState["names"] = {};
        currentState["initMessage"] = getInitMessage(levelNum);
        
        isTutorialLevel = isTutorial;

        var i = 1;
        for (var reactant in currentLevel["reactants"]) {
            currentState["reactants"][reactant] = currentLevel["reactants"][reactant];
            currentState["names"][reactant] = currentLevel["names"][reactant];
        }

        i = 1;
        for (var product in currentLevel["products"]) {
            currentState["products"][product] = currentLevel["products"][product];
            currentState["names"][product] = currentLevel["names"][product];
        }
        
        currentState["svgmap"] = currentLevel["svgmap"];
        
        currentState["level"] = levelNum;


        viewModule.initializeScreen(currentState, callBacks);
    }
    
    function checkWin() {
        if (!isTutorialLevel && isBalanced(currentLevel, currentState) == 1) {
            setTimeout(function(){
                viewModule.nextLevel(currentState, callBacks, function() {
                    initializeLevel(currentState["level"]+1);
                });
            } , 1000);
        }    
    }
    
    function addReactant(reactant, numTimes) {
        currentState["reactants"][reactant] += numTimes;
        var compound = nameToObj(reactant);
        //Add once for greater sense of responsiveness
        if (currentState["level"] < 23) {
            for (var k = 0; k < numTimes; k++) {
                for (var elem in compound) {
                    for (var i = 0; i < compound[elem]; i++) {
                        viewModule.addReactant(elem, reactant);
                    }
                }
            }
        }
        checkWin();
    }

    function addProduct(product, numTimes) {
        currentState["products"][product] += numTimes;
        if (currentState["level"] < 23) {
            for (var k = 0; k < numTimes; k++) {
                viewModule.addProduct(product);
            }
        }
        checkWin();
    }
    
    /* Precondition: It is possible to remove the reactant numTimes. */
     function removeReactant(reactant, numTimes) {
        if (currentState["reactants"][reactant] - numTimes >= 0) {
            currentState["reactants"][reactant] -= numTimes;
            if (currentState["level"] < 23) {
                var compound = nameToObj(reactant);
                for (var k = 0; k < numTimes; k++) {
                    for (var elem in compound) {
                        for (var i = 0; i < compound[elem]; i++) {
                            viewModule.removeReactant(elem, reactant);
                        }
                    }
                }
            }
            checkWin();
        }
    }

    function removeProduct(product, numTimes) {
        if (currentState["products"][product] - numTimes >= 0) {
           currentState["products"][product] -= numTimes;
           if (currentState["level"] < 23) {
               for (var k = 0; k < numTimes; k++) {
                    viewModule.removeProduct(product);
                }
           }
           checkWin();
        }
    }
    
    /* Adds or removes any number of reactants, depending  
     * on what was typed in coefficient badge. 
     */
    function modifyReactant(reactant) {
        var val = $("#" + reactant + "ReactantCoeff").val();
        var difference = val - currentState["reactants"][reactant];
        if (difference > 0) {
            addReactant(reactant, difference);
        } else if (difference < 0) {
            removeReactant(reactant, -difference);
        }
    }
    
    /* Adds or removes any number of products, depending  
     * on what was typed in coefficient badge. 
     */
    function modifyProduct(product) {
        var val = $("#" + product + "ProductCoeff").val();
        var difference = val - currentState["products"][product];
        if (difference > 0) {
            addProduct(product, difference);
        } else if (difference < 0) {
            removeProduct(product, -difference);
        }
    }
    
    function specifyHint() {
         // Check for case with no reactants
        for (var reactant in currentState["reactants"]) {
             if (currentState["reactants"][reactant] === 0) {
                return "Try making more " + currentState["names"][reactant];
             }
        }
        
         // Check for case with no products
        for (var product in currentState["products"]) {
            if (currentState["products"][product] === 0) {
                return "Try making more " + currentState["names"][product];
            }
        }
        
        var factor = isBalanced(currentLevel, currentState);
        if (factor > 1) {
            return "You have " + factor + " times the amount of food needed! Try simplifying this.";
        }
         
         // Give a message about balancing a particular element
         reactantElements = createArrayOfIndividualElements(currentState["reactants"]);
         productElements = createArrayOfIndividualElements(currentState["products"]);
         for (var elem in reactantElements) {
             var elemDisp = elem.toLowerCase();
             if (productElements.hasOwnProperty(elem) && reactantElements[elem] !== productElements[elem]) {
                 //return "Try increasing or decreasing the amount of " + elemDisp + "!";
                 return "Try working with the " + elemDisp + "now!";
             }
             /*if (productElements.hasOwnProperty(elem)) {
                 if (reactantElements[elem] < productElements[elem]) {
                     
                 } else if (reactantElements[elem] > productElements[elem]) {
                     
                 }
             }*/
         }
    }

    return {
        getCurrentLevel: getCurrentLevel,
        initializeLevel: initializeLevel,
        checkWin: checkWin,
        addReactant: addReactant,
        addProduct: addProduct,
        removeReactant: removeReactant,
        removeProduct: removeProduct,
        modifyReactant: modifyReactant,
        specifyHint: specifyHint,
    };
})(viewModule, levelModule);
