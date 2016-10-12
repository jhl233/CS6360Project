
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

    return {
        initializeLevel: initializeLevel,
        addReactant: addReactant,
        addProduct: addProduct,
    };
})(viewModule, levelModule);
