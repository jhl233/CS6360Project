
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

<<<<<<< Updated upstream
		i = 1;
		for (var product in currentLevel["products"]) {
            currentState["products"][product] = currentLevel["products"][product];
	   	}
	   	currentState["svgmap"] = currentLevel["svgmap"];
=======
        $clickable = $("<img>", {class: "shadow pic", src: "svg/" + reactantSVG, "data-name": reactant})
        $clickable.click(function(event) {
            addReactant($(event.target).data("name"));
        });
        $reactant.append($("<div>", {class: "reactant-badge", text: "0", id: reactant+"ReactantCoeff"}));
        $reactant.append($clickable);
        $reactant.append($("<div>", {class: "reactant-minus-button", text: "-"}));
    }
    
    // Adds the clickable products to the view
    i = 1;
    for (var product in level["products"]) {
        var $product = $("<div>", {class: "bottom-box product-box-" + (i++)});
        currentState["products"][product] = 0;
>>>>>>> Stashed changes

		var callBacks = {
			addReactant: addReactant,
			addProduct: addProduct,
            removeReactant: removeReactant,
            removeProduct: removeProduct,
		};

		viewModule.initializeScreen(currentState, callBacks);
   	}

<<<<<<< Updated upstream
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
=======
        $clickable = $("<img>", {class: "shadow pic4", src: "svg/" + productSVG, "data-name": product});
        $clickable.click(function(event) {
            addProduct($(event.target).data("name"));
        });
        $product.append($("<div>", {class: "product-badge", text: "0", id: product+"ProductCoeff"}));
        $product.append($clickable);
        $product.append($("<div>", {class: "product-minus-button", text: "-"}));
    }
    currentState["svgmap"] = level["svgmap"];
    console.log("Done!");
    console.log(currentState);
}
>>>>>>> Stashed changes

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
            if (isBalanced(currentLevel, currentState)) {
                viewModule.openOverlay();
            }
        }
    }

    function removeProduct(product) {
        if (currentState["products"][product] > 0) {
            currentState["products"][product] -= 1;
            var coeff = $("#" + product + "ProductCoeff");
            coeff.text(parseInt(coeff.text()) - 1);
            viewModule.removeProduct(product);
            if (isBalanced(currentLevel, currentState)) {
                viewModule.openOverlay();
            }
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
