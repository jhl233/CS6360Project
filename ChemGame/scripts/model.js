$(document).ready(function() {
    
});

var exampleLevel = {
    "reactants": {"Chicken2Bacon": 1, "Egg": 1},
    "products" : {"Egg3Bacon4": 1, "Chicken2": 1},
    "svgmap": {
        "Chicken2Bacon": "svg-reactant1.svg",
        "Egg":           "svg-reactant2.svg",
        "Egg3Bacon4":    "svg-product1.svg",
        "Chicken2":      "svg-product2.svg",
        "aChicken":      "svg-chicken.svg",
        "aBacon":        "svg-bacon.svg",
        "aEgg":          "svg-egg.svg",
    },
}

var currentState = {
    "reactants": {},
    "products": {},
    "svgmap": {},
}

function initializeLevel(level) {
    console.log("hey I'm alive");
    console.log(level);
    for (var reactant in level["reactants"]) {
        console.log(nameToObj(reactant));
    }
    for (var product in level["products"]) {
        console.log(nameToObj(product));
    }

    // Adds the clickable reactants to the view
    var i = 1;
    for (var reactant in level["reactants"]) {
        console.log("Reactant: " + reactant);
        var $reactant = $("<div>", {class: "bottom-box reactant-box-" + (i++)});
        currentState["reactants"][reactant] = 0;

        $("#workbench").append($reactant);

        var reactantSVG = level["svgmap"][reactant];

<<<<<<< Updated upstream
        $clickable = $("<img>", {class: "shadow pic", src: "svg/" + reactantSVG, "data-name": reactantName})
        $clickable.click(function(event) {
            addReactant($(event.target).data("name"));
        });
        $reactant.append($("<div>", {class: "shadow reactant-badge", text: "0", id: reactantName+"ReactantCoeff"}));
=======
        $clickable = $("<img>", {class: "pic", src: "svg/" + reactantSVG, "data-name": reactant})
        $clickable.click(function(event) {
            addReactant($(event.target).data("name"));
        });
        $reactant.append($("<div>", {class: "reactant-badge", text: "0", id: reactant+"ReactantCoeff"}));
>>>>>>> Stashed changes
        $reactant.append($clickable);
        $reactant.append($("<div>", {class: "reactant-minus-button", text: "-"}));
    }
    
    // Adds the clickable products to the view
    i = 1;
    for (var product in level["products"]) {
        var $product = $("<div>", {class: "bottom-box product-box-" + (i++)});
        currentState["products"][product] = 0;

        $("#workbench").append($product);

        var productSVG = level["svgmap"][product];

<<<<<<< Updated upstream
        $clickable = $("<img>", {class: "shadow pic4", src: "svg/" + productSVG, "data-name": productName});
        $clickable.click(function(event) {
            addProduct($(event.target).data("name"));
        });
        $product.append($("<div>", {class: "shadow product-badge", text: "0", id:productName+"ProductCoeff"}));
=======
        $clickable = $("<img>", {class: "pic4", src: "svg/" + productSVG, "data-name": product});
        $clickable.click(function(event) {
            addProduct($(event.target).data("name"));
        });
        $product.append($("<div>", {class: "product-badge", text: "0", id: product+"ProductCoeff"}));
>>>>>>> Stashed changes
        $product.append($clickable);
        $product.append($("<div>", {class: "product-minus-button", text: "-"}));
    }
    currentState["svgmap"] = level["svgmap"];
    console.log("Done!");
    console.log(currentState);
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

