

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

        for (var i = 0; i < 2; i++) {
            var reactantName = level["reactants"][i];
            var $reactant = $("<div>", {class: "bottom-box reactant-box-" + (i + 1)});
            currentState["reactants"][reactantName] = 0;

            $("#workbench").append($reactant);

            var reactantSVG = level["svgmap"][reactantName];

            $clickable = $("<img>", {class: "pic", src: "svg/" + reactantSVG, "data-name": reactantName})
            $clickable.click(function(event) {
                addReactant($(event.target).data("name"));
            });
            $reactant.append($("<div>", {class: "reactant-badge", text: "0", id: reactantName+"ReactantCoeff"}));
            $reactant.append($clickable);
        }

        for (var i = 0; i < 2; i++) {
            var productName = level["products"][i];
            var $product = $("<div>", {class: "bottom-box product-box-" + (i + 1)});
            currentState["products"][productName] = 0;

            $("#workbench").append($product);

            var productSVG = level["svgmap"][productName];

            $clickable = $("<img>", {class: "pic4", src: "svg/" + productSVG, "data-name": productName});
            $clickable.click(function(event) {
                addProduct($(event.target).data("name"));
            });
            $product.append($("<div>", {class: "product-badge", text: "0", id:productName+"ProductCoeff"}));
            $product.append($clickable);
        }
        currentState["svgmap"] = level["svgmap"];
    }
    function addReactant(reactantName) {
        currentState["reactants"][reactantName] += 1;
        var coeff = $("#" + reactantName + "ReactantCoeff");
        coeff.text(parseInt(coeff.text()) + 1);
        var compound = nameToObj(reactantName);
        for (var elem in compound) {
            for (var i = 0; i < compound[elem]; i++) {
                addReactantToView(elem);
            }
        }
        setTimeout(checkCollapsibles, 1000);
    }

    function addProduct(productName) {
        currentState["products"][productName] += 1;
        var coeff = $("#" + productName + "ProductCoeff");
        coeff.text(parseInt(coeff.text()) + 1);
        addProductToView(productName);
        setTimeout(checkCollapsibles, 1000);
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
