
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

    /* 
     * initializeLevel
     * given [levelNum], populates currentState
     * */
    function initializeLevel(levelNum) {
        currentLevel = levelModule.levels[levelNum];

		var i = 1;
		for (var reactant in currentLevel["reactants"]) {
            currentState["reactants"][reactant] = currentLevel["reactants"][reactant];
        }

		i = 1;
		for (var product in currentLevel["products"]) {
            currentState["products"][product] = currentLevel["products"][product];
	   	}
	   	currentState["svgmap"] = currentLevel["svgmap"];

		var callBacks = {
			addReactant: addReactant,
			addProduct: addProduct,
            removeReactant: removeReactant,
            removeProduct: removeProduct,
		};

		viewModule.initializeScreen(currentState, callBacks);
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
	   	if (isBalanced(currentLevel, currentState)) {
			viewModule.openOverlay();
		}	
	}

	function addProduct(product) {
	   	currentState["products"][product] += 1;
	   	var coeff = $("#" + product + "ProductCoeff");
	   	coeff.text(parseInt(coeff.text()) + 1);
	   	viewModule.addProduct(product);
	   	if (isBalanced(currentLevel, currentState)) {
			viewModule.openOverlay();
		}
   	}
    
    function removeReactant(reactant) {
        currentState["reactants"][reactant] -= 1;
        var coeff = $("#" + reactant + "Reactantcoeff");
        coeff.text(parseInt(coeff.text()) - 1);
        var compound = nameToObj(reactant);
        for (var elem in compound) {
            for (var i = 0; i < compound[elem]; i++) {
                viewModule.removeReactant(elem);
            }
        }
        if (isBalanced(currentLevel, currentState)) {
            // TODO: Add overlay for game won
        }
    }

    function removeProduct(product) {
        currentState["products"][product] -= 1;
        var coeff = $("#" + product + "ProductCoeff");
        coeff.text(parseInt(coeff.text()) - 1);
        var compound = nameToObj(product);
        removeProductFromView(product);
        if (isBalanced(exampleLevel, currentState)) {
            // TODO: Add overlay for game won
        }
    }

    return {
        initializeLevel: initializeLevel,
        addReactant: addReactant,
        addProduct: addProduct,
        removeReactant: removeReactant,
        removeProduct: removeProduct
    };
})(viewModule, levelModule);
