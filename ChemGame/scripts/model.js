
/*
 *
 */
var stateModule = (function(viewModule, levelModule) {

    var currentState = {
        "reactants": {},
        "products": {},
        "svgmap": {},
    };

    /* 
     * initializeLevel
     * given [levelNum], populates currentState
     * */
    function initializeLevel(levelNum) {
        var level = levelModule.levels[levelNum];

		var i = 1;
		for (var reactant in level["reactants"]) {

            var $reactant = $("<div>", {class: "bottom-box reactant-box-" + (i++)});
            currentState["reactants"][reactant] = level["reactants"][reactant];

            //$("#workbench").append($reactant);

            var reactantSVG = level["svgmap"][reactant];

            $clickable = $("<img>", {class: "pic", src: "svg/" + reactantSVG, "data-name": reactant})
            $clickable.click(function(event) {
                addReactant($(event.target).data("name"));
            });
            $reactant.append($("<div>", {class: "reactant-badge", text: "0", id: reactant+"ReactantCoeff"}));
            $reactant.append($clickable);
			$reactant.append($("<div>", {class: "reactant-minus-button", text: "-"}));
        }

		i = 1;
		for (var product in level["products"]) {
            var $product = $("<div>", {class: "bottom-box product-box-" + (i++)});
            currentState["products"][product] = level["products"][product];

            //$("#workbench").append($product);

            var productSVG = level["svgmap"][product];

            $clickable = $("<img>", {class: "pic4", src: "svg/" + productSVG, "data-name": product});
            $clickable.click(function(event) {
                addProduct($(event.target).data("name"));
            });
		   	$product.append($("<div>", {class: "product-badge", text: "0", id:productName+"ProductCoeff"}));
		   	$product.append($clickable);
		   	$product.append($("<div>", {class: "product-minus-button", text: "-"}));
	   	}
	   	currentState["svgmap"] = level["svgmap"];
   	}

	function addReactant(reactant) {
	   	currentState["reactants"][reactant] += 1;
	   	var coeff = $("#" + reactant + "ReactantCoeff");
	   	coeff.text(parseInt(coeff.text()) + 1);
	   	var compound = nameToObj(reactant);
	   	for (var elem in compound) {
		   	for (var i = 0; i < compound[elem]; i++) {
			   	addReactantToView(elem);
		   	}
	   	}
	   	setTimeout(checkCollapsibles, 1000);
	   	if (isBalanced(exampleLevel, currentState)) {
		   	// TODO: Add overlay for game won
		}	
	}

	function addProduct(product) {
	   	currentState["products"][product] += 1;
	   	var coeff = $("#" + product + "ProductCoeff");
	   	coeff.text(parseInt(coeff.text()) + 1);
	   	addProductToView(product);
	   	setTimeout(checkCollapsibles, 1000);
	   	if (isBalanced(exampleLevel, currentState)) {
		   	// TODO: Add overlay for game won
		}
   	}

	function nameToObj(name) {
	   	if (name.length == 0) {
		   	console.log("Error calling nameToObj w empty string");
	   	}
	   	obj = {};
	   	nameAcc = "";
	   	for (var i = 0, len = name.length; i < len; i++) {
            // If it's a number
            if (!isNaN(name[i]*1)) {
            obj[nameAcc] = parseInt(name[i]); // Assume single digit vals
                nameAcc = "";
                // If it is lowercase, just keep building nameAcc
            } else if (name[i].toLowerCase() === name[i]) {
                nameAcc += name[i];
            } else if (name[i].toUpperCase() === name[i]) {
                if (nameAcc !== "") {
                    obj[nameAcc] = 1;
                }
                nameAcc = name[i];
            }
        }
        if (nameAcc !== "") {
            obj[nameAcc] = 1;
        }
        return obj;
    }


    return {
        initializeLevel: initializeLevel,
        addReactant: addReactant,
        addProduct: addProduct,
    };
})(viewModule, levelModule);
