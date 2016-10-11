$(document).ready(function() {
    
});

var exampleLevel = {
    "reactants": ["Chicken2Bacon", "Egg"],
    "products" : ["Egg3Bacon4", "Chicken2"],
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
    for (i in level["reactants"]) {
        console.log(nameToObj(level["reactants"][i]));
    }
    for (i in level["products"]) {
        console.log(nameToObj(level["products"][i]));
    }
    for (var i = 0; i < 2; i++) {
        var reactantName = level["reactants"][i];
        var $reactant = $("<div>", {class: "bottom-box reactant-box-" + (i + 1)});
        currentState["reactants"][reactantName] = 0;

        $("#workbench").append($reactant);

        var reactantSVG = level["svgmap"][reactantName];

        $clickable = $("<img>", {class: "shadow pic", src: "svg/" + reactantSVG, "data-name": reactantName})
        $clickable.click(function(event) {
            addReactant($(event.target).data("name"));
        });
        $reactant.append($("<div>", {class: "shadow reactant-badge", text: "0", id: reactantName+"ReactantCoeff"}));
        $reactant.append($clickable);
        $reactant.append($("<div>", {class: "reactant-minus-button", text: "-"}));
    }
    for (var i = 0; i < 2; i++) {
        var productName = level["products"][i];
        var $product = $("<div>", {class: "bottom-box product-box-" + (i + 1)});
        currentState["products"][productName] = 0;

        $("#workbench").append($product);

        var productSVG = level["svgmap"][productName];

        $clickable = $("<img>", {class: "shadow pic4", src: "svg/" + productSVG, "data-name": productName});
        $clickable.click(function(event) {
            addProduct($(event.target).data("name"));
        });
        $product.append($("<div>", {class: "shadow product-badge", text: "0", id:productName+"ProductCoeff"}));
        $product.append($clickable);
        $product.append($("<div>", {class: "product-minus-button", text: "-"}));
    }
    currentState["svgmap"] = level["svgmap"];
    console.log("Done!");
    console.log(currentState);
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

