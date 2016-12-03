var levelModule = (function() {
    var module = {};

    module.levels = [
        // Level 0
        {},
        // Level 1
        // Bacon2 --> Bacon2
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
            },
            
            "names":
            {
                "Bacon2r":"2 Slices of Bacon",
                "Bacon2p":"2 Slices of Bacon"
            }
        },
        // Level 2
        // Broccoli + Bacon2 --> BroccoliBacon2
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
            }, 
            "names":
            {   
                "Broccoli":"Broccoli",
                "Bacon2":"Two Bacon",
                "Broccoli1Bacon2":"'Healthy' Bacon"
            }
        },
        // Level 3
        // O2 --> O2
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
          },
            "names":
            {   
                "Oxygen2r":"Oxygen",
                "Oxygen2p":"Ozone"
            }
        },
        // Level 4
        // Carbon + Bacon2 --> CarbonBacon2
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
            },
            "names":
            {   
                "Carbon":"Carbon",
                "Bacon2":"Two Bacon",
                "CarbonBacon2":"Carbon and Two Bacon Slices"
            }
        },
        // Level 5
        // C + O2 --> CO2
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
            },
            "names":
            {   
                "Carbon":"Carbon",
                "Oxygen2":"Oxygen",
                "CarbonOxygen2":"Carbon Dioxide"
            }
        },
        // Level 6
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
            },
            "names":
            {   
                "Chicken2Bacon":"Two chicken and bacon",
                "Egg":"Egg",
                "Egg3Bacon4":"Three eggs and four bacon slices",
                "Chicken2":"Two chicken"
            }
        },
        
        // Level 7
        // (6, v2)
        {
            "reactants": {
                "Chicken2Bacon": 0,
                "Iron": 0
            },
            "products": {
                "Iron3Bacon4": 0,
                "Chicken2": 0
            },
            "svgmap": {
                "Chicken2Bacon":   "l7/v2/svg-reactant-H2O.svg",
                "Iron":             "l7/v2/svg-reactant-Fe.svg",
                "Iron3Bacon4":      "l7/v2/svg-product-Fe3O4.svg",
                "Chicken2":        "l7/v2/svg-product-H2.svg",
                "aChicken":        "svg-chicken.svg",
                "aBacon":          "svg-bacon.svg",
                "aIron":            "svg-fe-atom.svg",
                "Iron3Bacon4Plate": "grey_plate.svg",
                "Chicken2Plate":   "pink_plate.svg"
            },
            "names":
            {   
                "Chicken2Bacon":"Two chicken and bacon",
                "Iron":"Iron",
                "Iron3Bacon4":"Three iron and four bacon slices",
                "Chicken2":"Two chicken"
            }
        },
        
         // Level 8 
         // (6 - v3)
        {
            "reactants": {
                "Hydrogen2Bacon": 0,
                "Iron": 0
            },
            "products": {
                "Iron3Bacon4": 0,
                "Hydrogen2": 0
            },
            "svgmap": {
                "Hydrogen2Bacon":   "l7/v3/svg-reactant-H2O.svg",
                "Iron":             "l7/v3/svg-reactant-Fe.svg",
                "Iron3Bacon4":      "l7/v3/svg-product-Fe3O4.svg",
                "Hydrogen2":        "l7/v3/svg-product-H2.svg",
                "aHydrogen":        "svg-atom-H.svg",
                "aBacon":          "svg-bacon.svg",
                "aIron":            "svg-fe-atom.svg",
                "Iron3Bacon4Plate": "grey_plate.svg",
                "Hydrogen2Plate":   "pink_plate.svg"
            },
            "names":
            {   
                "Hydrogen2Bacon":"Two hydrogen and bacon",
                "Iron":"Iron",
                "Iron3Bacon4":"Three iron and four bacon slices",
                "Hydrogen2":"Two hydrogen"
            }
        },
        
         // Level 9
         // (6 - v4)
        {
            "reactants": {
                "Hydrogen2Oxygen": 0,
                "Iron": 0
            },
            "products": {
                "Iron3Oxygen4": 0,
                "Hydrogen2": 0
            },
            "svgmap": {
                "Hydrogen2Oxygen":   "l7/v4/svg-reactant-H2O.svg",
                "Iron":             "l7/v4/svg-reactant-Fe.svg",
                "Iron3Oxygen4":      "l7/v4/svg-product-Fe3O4.svg",
                "Hydrogen2":        "l7/v4/svg-product-H2.svg",
                "aHydrogen":        "svg-atom-H.svg",
                "aOxygen":          "svg-o-atom.svg",
                "aIron":            "svg-fe-atom.svg",
                "Iron3Oxygen4Plate": "grey_plate.svg",
                "Hydrogen2Plate":   "pink_plate.svg"
            },
            "names":
            {   
                "Hydrogen2Oxygen":"Water",
                "Iron":"Iron",
                "Iron3Oxygen4":"Magnetite",
                "Hydrogen2":"Hydrogen"
            }
        },
        // Level 10
        //O2->O3 Carrot
        {
            "reactants": {
                "Carrot2": 0,
            },
            "products": {
                "Carrot3": 0,
            },
            "svgmap": {
                "Carrot2":  "svg-reactant-carrot.svg",
                "Carrot3":  "svg-product-carrot3.svg",
                "aCarrot":            "svg-carrot.svg",
                "Carrot3Plate":  "grey_plate.svg"
            },
            "names":
            {   
                "Carrot2":"Two carrots",
                "Carrot3":"Three carrots"
            }
        },
        // Level 11
        //O2->O3 Atom
        {
            "reactants": {
                "Oxygen2": 0,
            },
            "products": {
                "Oxygen3": 0,
            },
            "svgmap": {
                "Oxygen2":  "l2/svg-reactant2-L2-alien.svg",
                "Oxygen3":  "svg-product-O3.svg",
                "aOxygen":            "svg-o-atom.svg",
                "Oxygen3Plate":  "grey_plate.svg",
            },
            "names":
            {   
                "Oxygen2":"Oxygen",
                "Oxygen3":"Ozone"
            }
        },
        // Level 12
        //KClO3 -> KCl + O2
        {
            "reactants": {
                "BroccoliEggCarrot3": 0,
            },
            "products": {
                "BroccoliEgg": 0,
                "Carrot2": 0
            },
            "svgmap": {
                "BroccoliEggCarrot3":  "svg-reactant-BroccoliEggCarrot3.svg",
                "BroccoliEgg":  "svg-product-BroccoliEgg.svg",
                "Carrot2":  "svg-product-Carrot2.svg",
                "aCarrot":  "svg-carrot.svg",
                "aEgg": "svg-egg.svg",
                "aBroccoli": "l2/svg-broccoli.svg",
                "BroccoliEggPlate":  "grey_plate.svg",
                "Carrot2Plate":  "pink_plate.svg",
            },
            "names":
            {   
                "BroccoliEggCarrot3":"Broccoli, egg and three carrots",
                "BroccoliEgg":"Broccoli and egg",
                "Carrot2":"Two carrots"
            }
        },
        // Level 13
        //KClO3 -> KCl + O2
        {
            "reactants": {
                "KClO3": 0,
            },
            "products": {
                "KCl": 0,
                "O2": 0
            },
            "svgmap": {
                "KClO3":  "svg-reactant-KClO3.svg",
                "KCl":  "svg-product-KCl.svg",
                "O2":  "svg-product-O2.svg",
                "aO":  "svg-o-atom.svg",
                "aK": "svg-k-atom.svg",
                "aCl": "svg-Cl-atom.svg",
                "KClPlate":  "grey_plate.svg",
                "O2Plate":  "pink_plate.svg",
            },
            "names":
            {   
                "KClO3":"Potassium Chlorate",
                "KCl":"Potassium Chloride",
                "O2":"Oxygen"
            }
        },
        
        // Level 14
        // FeCl3+MgO->Fe2O3+MgCl2: v1
        {
            "reactants": {
                "EggCarrot3": 0,
                "BreadBacon": 0
            },
            "products": {
                "Egg2Bacon3": 0,
                "BreadCarrot2": 0
            },
            "svgmap": {
                "EggCarrot3":   "l5/v1/svg-reactant-FeCl3.svg",
                "BreadBacon":             "l5/v1/svg-reactant-MgO.svg",
                "Egg2Bacon3":      "l5/v1/svg-product-Fe2O3.svg",
                "BreadCarrot2":        "l5/v1/svg-product-MgCl2.svg",
                "aBread":        "svg-bread.svg",
                "aBacon":          "svg-bacon.svg",
                "aCarrot":        "svg-carrot.svg",
                "aEgg": "svg-egg.svg",
                "Egg2Bacon3Plate": "grey_plate.svg",
                "BreadCarrot2Plate":   "pink_plate.svg"
            },
            "names":
            {   
                "EggCarrot3":"Egg and three carrots",
                "BreadBacon":"Bread and bacon",
                "Egg2Bacon3":"Two eggs and three slices of bacon",
                "BreadCarrot2":"Bread and two carrots"
            }
        },
         
        // Level 15
        // FeCl3+MgO->Fe2O3+MgCl2: v2
        {
            "reactants": {
                "EggCarrot3": 0,
                "MagnesiumBacon": 0
            },
            "products": {
                "Egg2Bacon3": 0,
                "MagnesiumCarrot2": 0
            },
            "svgmap": {
                "EggCarrot3":   "l5/v2/svg-reactant-FeCl3.svg",
                "MagnesiumBacon":             "l5/v2/svg-reactant-MgO.svg",
                "Egg2Bacon3":      "l5/v2/svg-product-Fe2O3.svg",
                "MagnesiumCarrot2":        "l5/v2/svg-product-MgCl2.svg",
                "aMagnesium":        "svg-atom-Mg.svg",
                "aBacon":          "svg-bacon.svg",
                "aCarrot":        "svg-carrot.svg",
                "aEgg": "svg-egg.svg",
                "Egg2Bacon3Plate": "grey_plate.svg",
                "MagnesiumCarrot2Plate":   "pink_plate.svg"
            },
            "names":
            {   
                "EggCarrot3":"Egg and three carrots",
                "MagnesiumBacon":"Magnesium and bacon",
                "Egg2Bacon3":"Two eggs and three slices of bacon",
                "MagnesiumCarrot2":"Magnesium and two carrots"
            }
        },
        
        // Level 16
         // FeCl3+MgO->Fe2O3+MgCl2: v3
        {
            "reactants": {
                "EggCarrot3": 0,
                "MagnesiumOxygen": 0
            },
            "products": {
                "Egg2Oxygen3": 0,
                "MagnesiumCarrot2": 0
            },
            "svgmap": {
                "EggCarrot3":   "l5/v3/svg-reactant-FeCl3.svg",
                "MagnesiumOxygen":             "l5/v3/svg-reactant-MgO.svg",
                "Egg2Oxygen3":      "l5/v3/svg-product-Fe2O3.svg",
                "MagnesiumCarrot2":        "l5/v3/svg-product-MgCl2.svg",
                "aMagnesium":        "svg-atom-Mg.svg",
                "aOxygen":          "svg-o-atom.svg",
                "aCarrot":        "svg-carrot.svg",
                "aEgg": "svg-egg.svg",
                "Egg2Oxygen3Plate": "grey_plate.svg",
                "MagnesiumCarrot2Plate":   "pink_plate.svg"
            },
            "names":
            {   
                "EggCarrot3":"Egg and three carrots",
                "MagnesiumOxygen":"Magnesium Oxide",
                "Egg2Oxygen3":"Two eggs and three oxygen",
                "MagnesiumCarrot2":"Magnesium and two carrots"
            }
        },
        
        // Level 17
        // FeCl3+MgO->Fe2O3+MgCl2: v4
        {
            "reactants": {
                "IronCarrot3": 0,
                "MagnesiumOxygen": 0
            },
            "products": {
                "Iron2Oxygen3": 0,
                "MagnesiumCarrot2": 0
            },
            "svgmap": {
                "IronCarrot3":   "l5/v4/svg-reactant-FeCl3.svg",
                "MagnesiumOxygen":             "l5/v4/svg-reactant-MgO.svg",
                "Iron2Oxygen3":      "l5/v4/svg-product-Fe2O3.svg",
                "MagnesiumCarrot2":        "l5/v4/svg-product-MgCl2.svg",
                "aMagnesium":        "svg-atom-Mg.svg",
                "aOxygen":          "svg-o-atom.svg",
                "aCarrot":        "svg-carrot.svg",
                "aIron": "svg-fe-atom.svg",
                "Iron2Oxygen3Plate": "grey_plate.svg",
                "MagnesiumCarrot2Plate":   "pink_plate.svg"
            },
            "names":
            {   
                "IronCarrot3":"Iron and three carrots",
                "MagnesiumOxygen":"Magnesium Oxide",
                "Iron2Oxygen3":"Ferric Oxide",
                "MagnesiumCarrot2":"Magnesium and two carrots"
            }
        },
        
        // Level 18
        // FeCl3+MgO->Fe2O3+MgCl2: v5
        {
            "reactants": {
                "IronChlorine3": 0,
                "MagnesiumOxygen": 0
            },
            "products": {
                "Iron2Oxygen3": 0,
                "MagnesiumChlorine2": 0
            },
            "svgmap": {
                "IronChlorine3":   "l5/v5/svg-reactant-FeCl3.svg",
                "MagnesiumOxygen":             "l5/v5/svg-reactant-MgO.svg",
                "Iron2Oxygen3":      "l5/v5/svg-product-Fe2O3.svg",
                "MagnesiumChlorine2":        "l5/v5/svg-product-MgCl2.svg",
                "aMagnesium":        "svg-atom-Mg.svg",
                "aOxygen":          "svg-o-atom.svg",
                "aChlorine":        "svg-Cl-atom.svg",
                "aIron": "svg-fe-atom.svg",
                "Iron2Oxygen3Plate": "grey_plate.svg",
                "MagnesiumChlorine2Plate":   "pink_plate.svg"
            },
            "names":
            {   
                "IronChlorine3":"Ferric Chloride",
                "MagnesiumOxygen":"Magnesium Oxide",
                "Iron2Oxygen3":"Ferric Oxide",
                "MagnesiumChlorine2":"Magnesium Chloride"
            }
        },
        
        // Level 19
        // Na+H2O->NaOH+H2: v1
        {
            "reactants": {
                "Chicken2Bacon": 0,
                "Bread": 0
            },
            "products": {
                "BreadBaconChicken": 0,
                "Chicken2": 0
            },
            "svgmap": {
                "Chicken2Bacon":   "l6/v1/svg-reactant-H2O.svg",
                "Bread":             "l6/v1/svg-reactant-Na.svg",
                "BreadBaconChicken":      "l6/v1/svg-product-NaOH.svg",
                "Chicken2":        "l6/v1/svg-product-H2.svg",
                "aBread":        "l6/svg-bread.svg",
                "aBacon":          "svg-bacon.svg",
                "aChicken":        "svg-chicken.svg",
                "BreadBaconChickenPlate": "grey_plate.svg",
                "Chicken2Plate":   "pink_plate.svg"
            },
            "names":
            {   
                "Chicken2Bacon":"Two chicken and bacon",
                "Bread":"Bread",
                "BreadBaconChicken":"Bread, bacon and chicken",
                "Chicken2":"Two chicken"
            }
        },
        
        // Level 20
        // Na+H2O->NaOH+H2: v2
        {
            "reactants": {
                "Chicken2Bacon": 0,
                "Sodium": 0
            },
            "products": {
                "SodiumBaconChicken": 0,
                "Chicken2": 0
            },
            "svgmap": {
                "Chicken2Bacon":   "l6/v2/svg-reactant-H2O.svg",
                "Sodium":             "l6/v2/svg-reactant-Na.svg",
                "SodiumBaconChicken":      "l6/v2/svg-product-NaOH.svg",
                "Chicken2":        "l6/v2/svg-product-H2.svg",
                "aSodium":        "l6/svg-atom-Na.svg",
                "aBacon":          "svg-bacon.svg",
                "aChicken":        "svg-chicken.svg",
                "SodiumBaconChickenPlate": "grey_plate.svg",
                "Chicken2Plate":   "pink_plate.svg"
            },
            "names":
            {   
                "Chicken2Bacon":"Two chicken and bacon",
                "Sodium":"Sodium",
                "SodiumBaconChicken":"Sodium, bacon and chicken",
                "Chicken2":"Two chickens"
            }
        },
        
        // Level 21
         // Na+H2O->NaOH+H2: v3
        {
            "reactants": {
                "Chicken2Oxygen": 0,
                "Sodium": 0
            },
            "products": {
                "SodiumOxygenChicken": 0,
                "Chicken2": 0
            },
            "svgmap": {
                "Chicken2Oxygen":   "l6/v3/svg-reactant-H2O.svg",
                "Sodium":             "l6/v3/svg-reactant-Na.svg",
                "SodiumOxygenChicken":      "l6/v3/svg-product-NaOH.svg",
                "Chicken2":        "l6/v3/svg-product-H2.svg",
                "aSodium":        "l6/svg-atom-Na.svg",
                "aOxygen":          "svg-o-atom.svg",
                "aChicken":        "svg-chicken.svg",
                "SodiumOxygenChickenPlate": "grey_plate.svg",
                "Chicken2Plate":   "pink_plate.svg"
            },
            "names":
            {   
                "Chicken2Oxygen":"Two chicken and oxygen",
                "Sodium":"Sodium",
                "SodiumOxygenChicken":"Sodium, oxygen and chicken",
                "Chicken2":"Two chickens"
            }
        },
        
        // Level 22
        {
            "reactants": {
                "Hydrogen2Oxygen": 0,
                "Sodium": 0
            },
            "products": {
                "SodiumOxygenHydrogen": 0,
                "Hydrogen2": 0
            },
            "svgmap": {
                "Hydrogen2Oxygen":   "l6/v4/svg-reactant-H2O.svg",
                "Sodium":             "l6/v4/svg-reactant-Na.svg",
                "SodiumOxygenHydrogen":      "l6/v4/svg-product-NaOH.svg",
                "Hydrogen2":        "l6/v4/svg-product-H2.svg",
                "aSodium":        "l6/svg-atom-Na.svg",
                "aOxygen":          "svg-o-atom.svg",
                "aHydrogen":        "l6/svg-atom-H.svg",
                "SodiumOxygenHydrogenPlate": "grey_plate.svg",
                "Hydrogen2Plate":   "pink_plate.svg"
            },
            "names":
            {   
                "Hydrogen2Oxygen":"Hydrogen dioxide",
                "Sodium":"Sodium",
                "SodiumOxygenHydrogen":"Sodium hydroxide",
                "Hydrogen2":"Hydrogen"
            }
        },
        // Level 23
        // Chicken2Bacon + Egg --> Egg3Bacon4 + Chicken2
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
            },
            "names":
            {   
                "Chicken2Bacon":"Two chicken and bacon",
                "Egg":"Egg",
                "Egg3Bacon4":"Three eggs and four slices of bacon",
                "Chicken2":"Two chickens"
            }
        },
        
        {
            "reactants": {
                "Chicken2Bacon": 0,
                "Iron": 0
            },
            "products": {
                "Iron3Bacon4": 0,
                "Chicken2": 0
            },
            "svgmap": {
                "Chicken2Bacon":   "l7/v2/svg-reactant-H2O.svg",
                "Iron":             "l7/v2/svg-reactant-Fe.svg",
                "Iron3Bacon4":      "l7/v2/svg-product-Fe3O4.svg",
                "Chicken2":        "l7/v2/svg-product-H2.svg",
                "aChicken":        "svg-chicken.svg",
                "aBacon":          "svg-bacon.svg",
                "aIron":            "svg-fe-atom.svg",
                "Iron3Bacon4Plate": "grey_plate.svg",
                "Chicken2Plate":   "pink_plate.svg"
            },
            "names":
            {   
                "Chicken2Bacon":"Two chicken and bacon",
                "Iron":"Iron",
                "Iron3Bacon4":"Three iron and four slices of bacon",
                "Chicken2":"Two chickens"
            }
        },
    ];
	console.log("Levels: ");
	console.log(module.levels);

    return module;
})();