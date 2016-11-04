/*
 *
 */
var stateModule = (function(viewModule, levelModule) {

    var currentState = {
        "reactants": {},
        "products": {},
        "svgmap": {},
    };

    var currentLevel = {};

    var callBacks = {
        addReactant: addReactant,
        addProduct: addProduct,
        removeReactant: removeReactant,
        removeProduct: removeProduct,
    };
    
    var isTutorialLevel = false;

    /* 
     * initializeLevel
     * given [levelNum], populates currentState
     * */
    function initializeLevel(levelNum, isTutorial = false) {
        currentLevel = levelModule.levels[levelNum];
        currentState["reactants"] = {};
        currentState["products"] = {};
        currentState["svgmap"] = {};
        
        isTutorialLevel = isTutorial;

        var i = 1;
        for (var reactant in currentLevel["reactants"]) {
            currentState["reactants"][reactant] = currentLevel["reactants"][reactant];
        }

        i = 1;
        for (var product in currentLevel["products"]) {
            currentState["products"][product] = currentLevel["products"][product];
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
            } , 750);
        }    
    }

    function addReactant(reactant) {
        currentState["reactants"][reactant] += 1;
        var coeff = $("#" + reactant + "ReactantCoeff");
        coeff.text(parseInt(coeff.text()) + 1);
        var compound = nameToObj(reactant);
        for (var elem in compound) {
            for (var i = 0; i < compound[elem]; i++) {
                viewModule.addReactant(elem);
            }
        }
        checkWin();
    }

    function addProduct(product) {
        currentState["products"][product] += 1;
        var coeff = $("#" + product + "ProductCoeff");
        coeff.text(parseInt(coeff.text()) + 1);
        viewModule.addProduct(product);
        checkWin();
    }

    function removeReactant(reactant) {
        if (currentState["reactants"][reactant] > 0) {
            currentState["reactants"][reactant] -= 1;
            var coeff = $("#" + reactant + "ReactantCoeff");
            coeff.text(parseInt(coeff.text()) - 1);
            var compound = nameToObj(reactant);
            for (var elem in compound) {
                for (var i = 0; i < compound[elem]; i++) {
                    viewModule.removeReactant(elem);
                }
            }
            checkWin();
        }
    }

    function removeProduct(product) {
        if (currentState["products"][product] > 0) {
            currentState["products"][product] -= 1;
            var coeff = $("#" + product + "ProductCoeff");
            coeff.text(parseInt(coeff.text()) - 1);
            viewModule.removeProduct(product);
            checkWin();
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
        initializeLevel: initializeLevel,
        addReactant: addReactant,
        addProduct: addProduct,
        removeReactant: removeReactant,
        removeProduct: removeProduct,
        specifyHint: specifyHint,
    };
})(viewModule, levelModule);
