var levelModule = (function() {
    var module = {};

    module.levels = [
        // Level 0
        {},
        // Level 1
        {
            "reactants":{
                "Bacon2r": 0
            },
            "products": {
                "Bacon2p": 0
            },
            "svgmap": {
                "Bacon2r": "l1/svg-reactant1-L1.svg",
                "Bacon2p": "l1/svg-product1-L1.svg",
                "aBacon": "svg-bacon.svg",
                "Bacon2pPlate": "grey_plate.svg"
            }
        },
        // Level 2
        {
            "reactants": {
                "Broccoli": 0,
                "Bacon2": 0
            },
            "products": {
                "Broccoli1Bacon2": 0
            },
            "svgmap": {
                "Broccoli": "l2/svg-reactant1-L2.svg",
                "Bacon2": "l2/svg-reactant2-L2.svg",
                "Broccoli1Bacon2": "l2/svg-product1-L2.svg",
                "aBroccoli": "l2/svg-broccoli.svg",
                "aBacon": "svg-bacon.svg",
                "Broccoli1Bacon2Plate": "pink_plate.svg",
            }
        },
        // Level 3
        {
            "reactants": {
                "Chicken2Bacon": 0,
                "Egg": 0
            },
            "products": {
                "Egg3Bacon4": 0,
                "Chicken2": 0
            },
            "svgmap": {
                "Chicken2Bacon":   "svg-reactant1.svg",
                "Egg":             "svg-reactant2.svg",
                "Egg3Bacon4":      "svg-product1.svg",
                "Chicken2":        "svg-product2.svg",
                "aChicken":        "svg-chicken.svg",
                "aBacon":          "svg-bacon.svg",
                "aEgg":            "svg-egg.svg",
                "Egg3Bacon4Plate": "grey_plate.svg",
                "Chicken2Plate":   "pink_plate.svg"
            }
        },
        // Level 4
        {
          "reactants": {
              "Oxygen2r": 0
          },
          "products": {
              "Oxygen2p": 0
          },
          "svgmap": {
              "Oxygen2r":      "l1/svg-reactant1-L1-alien.svg",
              "Oxygen2p":      "l1/svg-product1-L1-alien.svg",
              "aOxygen":       "svg-o-atom.svg",
              "Oxygen2pPlate": "grey_plate.svg"
          }
        },
        // Level 5
        {
            "reactants": {
                "Carbon": 0,
                "Bacon2": 0
            }, 
            "products": {
                "CarbonBacon2": 0
            },
            "svgmap": {
                "Carbon":           "l2/svg-reactant1-L2-alien.svg",
                "Bacon2":            "l2/svg-reactant2-L2.svg",
                "CarbonBacon2":      "l2/svg-product1-L2-incomplete-alien.svg",
                "aCarbon":           "svg-c-atom.svg",
                "aBacon":            "svg-bacon.svg",
                "CarbonBacon2Plate": "grey_plate.svg"
            }
        },
        // Level 6
        {
            "reactants": {
                "Carbon": 0,
                "Oxygen2": 0
            },
            "products": {
                "CarbonOxygen2": 0
            },
            "svgmap": {
                "Carbon":            "l2/svg-reactant1-L2-alien.svg",
                "Oxygen2":            "l2/svg-reactant2-L2-alien.svg",
                "CarbonOxygen2":      "l2/svg-product1-L2-complete-alien.svg",
                "aCarbon":            "svg-c-atom.svg",
                "aOxygen":            "svg-o-atom.svg",
                "CarbonOxygen2Plate": "grey_plate.svg"
            }
        }
    ];
	console.log("Levels: ");
	console.log(module.levels);

    return module;
})();
