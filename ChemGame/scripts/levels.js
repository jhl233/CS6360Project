var levelModule = (function() {
    var module = {};

    module.levels = [
        // Level 0
        {},
        // Level 1
        {},
        // Level 2
        {},
        // Level 3
        {
            "reactants": {
                "Chicken2Bacon": 0,
                "Egg": 0,
            },
            "products": {
                "Egg3Bacon4": 0,
                "Chicken2": 0,
            },
            "svgmap": {
                "Chicken2Bacon": "svg-reactant1.svg",
                "Egg":           "svg-reactant2.svg",
                "Egg3Bacon4":    "svg-product1.svg",
                "Chicken2":      "svg-product2.svg",
                "aChicken":      "svg-chicken.svg",
                "aBacon":        "svg-bacon.svg",
                "aEgg":          "svg-egg.svg",
                "Egg3Bacon4Plate": "grey_plate.svg",
                "Chicken2Plate":   "pink_plate.svg"
            },
        },
    ];
	console.log("Levels: ");
	console.log(module.levels);

    return module;
})();
