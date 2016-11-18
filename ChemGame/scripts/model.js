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

        console.log(currentState);
        viewModule.initializeScreen(currentState, callBacks);
    }
    
    function checkWin() {
        if (!isTutorialLevel && isBalanced(currentLevel, currentState)) {
            setTimeout(function(){
                viewModule.nextLevel(currentState, callBacks, function() {
                    initializeLevel(currentState["level"]+1);
                });
            } , 2000);
        }    
    }
    
    function addReactant(reactant, numTimes) {
        currentState["reactants"][reactant] += numTimes;
        var compound = nameToObj(reactant);
        for (var k = 0; k < numTimes; k++) {
            for (var elem in compound) {
                for (var i = 0; i < compound[elem]; i++) {
                    viewModule.addReactant(elem, reactant);
                }
            }
        }
        checkWin();
    }

    function addProduct(product, numTimes) {
        currentState["products"][product] += numTimes;
        for (var k = 0; k < numTimes; k++) {
            viewModule.addProduct(product);
        }
        checkWin();
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
            checkWin();
        }
    }

    function removeProduct(product, numTimes) {
        if (currentState["products"][product] - numTimes >= 0) {
            currentState["products"][product] -= numTimes;
            for (var k = 0; k < numTimes; k++) {
                viewModule.removeProduct(product);
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
         var noReactants = true;
         for (var reactant in currentState["reactants"]) {
             if (currentState["reactants"][reactant] !== 0) {
                 noReactants = false;
             }
         }
         
         if (noReactants) {
             return "Try adding a bundle of ingredients to the worktable!";
         }
         
         // Check for case with no products
         var noProducts = true;
         for (var product in currentState["products"]) {
             if (currentState["products"][product] !== 0) {
                 noProducts = false;
             }
         }
         
         if (noProducts) {
             return "Try making more dishes!";
         }
        
        var divisor = checkOverbalanced(currentState);
        if (divisor > 1) {
            return "You have " + divisor + " times the amount of food needed! Try simplifying this.";
        }
         
         // Give a message about balancing a particular element
         reactantElements = createArrayOfIndividualElements(currentState["reactants"]);
         productElements = createArrayOfIndividualElements(currentState["products"]);
         for (var elem in reactantElements) {
             if (productElements.hasOwnProperty(elem) &&
                reactantElements[elem] !== productElements[elem]) {
                return "Try to get the same number of " + elem.toLowerCase() + " on the left and right!";
             }
         }
    }

    return {
        getCurrentLevel: getCurrentLevel,
        initializeLevel: initializeLevel,
        addReactant: addReactant,
        addProduct: addProduct,
        removeReactant: removeReactant,
        removeProduct: removeProduct,
        modifyReactant: modifyReactant,
        specifyHint: specifyHint,
    };
})(viewModule, levelModule);
