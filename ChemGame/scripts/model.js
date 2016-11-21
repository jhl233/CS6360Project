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
        for (var elem in compound) {
            for (var i = 0; i < compound[elem]; i++) {
                viewModule.addReactant(elem, reactant);
            }
        }
        numTimes--;
        var addRIntervalID = setInterval(function(){
            if (numTimes == 0) {
                clearInterval(addRIntervalID);
                checkWin();
                return;
            }
            for (var elem in compound) {
                for (var i = 0; i < compound[elem]; i++) {
                    viewModule.addReactant(elem, reactant);
                }
            }
            numTimes--;
        }, 1000);
    }

    function addProduct(product, numTimes) {
        currentState["products"][product] += numTimes;
        viewModule.addProduct(product);
        numTimes--;
        var addPIntervalID = setInterval(function(){
            if (numTimes == 0) {
                clearInterval(addPIntervalID);
                checkWin();
                return;
            }
            viewModule.addProduct(product);
            numTimes--;
        }, 1000);
    }
    
    /* Precondition: It is possible to remove the reactant numTimes. */
     function removeReactant(reactant, numTimes) {
        if (currentState["reactants"][reactant] - numTimes >= 0) {
            currentState["reactants"][reactant] -= numTimes;
            var compound = nameToObj(reactant);
            for (var k = 0; k < numTimes; k++) {
                for (var elem in compound) {
                    for (var i = 0; i < compound[elem]; i++) {
                        viewModule.removeReactant(elem);
                    }
                }
            }
            //checkWin();
        }
    }

    function removeProduct(product, numTimes) {
        if (currentState["products"][product] - numTimes >= 0) {
            currentState["products"][product] -= numTimes;
            for (var k = 0; k < numTimes; k++) {
                viewModule.removeProduct(product);
            }
            //checkWin();
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
                 return "Try increasing or decreasing the amount of " + elemDisp + "!";
             }
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
