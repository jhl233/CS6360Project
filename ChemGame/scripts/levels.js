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
        
        //level 4
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

        // Level 5
        //BroccoliEggCarrot3 -> BroccoliEgg + Carrot2
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
        
        // Level 6
        // Na+H2O->NaOH+H2: v1 Lot of ingredients
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
        
        //level 7
        //EggCarrots3 + BreadBacon -> Egg2Bacon3 + BreadCarrot2
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
        
        // Level 8
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
        
        //level 9
        // KClO3 -> KCl + O2
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
        
        //level 10
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
        
        //Type in only from now on
        //level 11
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

        //level 12
        // Broccoli2 + O2 -> Broccoli2O
        {
            "reactants":{
                "Broccoli2":0,
                "O2": 0,
            },
            "products":{
                "Broccoli2O": 0,
            },
            "svgmap":{
                "Broccoli2": "svg-broccoli2.svg",
                "O2": "svg-O2.svg",
                "Broccoli2O": "svg-broccoli2O.svg",
                "aBroccoli": "l2/svg-broccoli.svg",
                "aO": "svg-O-atom.svg",
                "Broccoli2OPlate":   "pink_plate.svg",
            },
            "names":{
                "Broccoli2":0,
                "O2": 0,
                "Broccoli2O": 0
            },
        },
        
        //level 13
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
        //level 14
        //Fe + H2O -> Fe3O4 + H2
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
        
        //level 15
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
        
        //level 16
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
        //level 17 
        // Chicken2Bacon + Iron -> Iron3Bacon4 + Chicken2
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
        
        //level 18
        //NH3 + N2O -> N2 + H2O
        {
            "reactants":{
                "NH3": 0,
                "N2O": 0
            },
            "products":{
                "N2": 0,
                "H2O": 0
            },
            "svgmap":{
                "NH3": "svg-reactant-NH3.svg",
                "N2O": "svg-reactant-N2O.svg",
                "N2": "svg-N2.svg",
                "H2O": "svg-product-H2O.svg",
                "aN": "svg-N-atom.svg",
                "aH": "svg-atom-H.svg",
                "aO": "svg-o-atom.svg",
                "N2Plate": "grey_plate.svg",
                "H2OPlate": "pink_plate.svg"
            }, 
            "names":{
                "NH3": "NH3",
                "N2O": "N2O",
                "N2": "N2",
                "H2O": "H2O"
            }
        },
        
        //check from now on
        //level 19
        //H2 + O2 -> H2O
        {
            "reactants":{
                "H2":0,
                "O2": 0,
            },
            "products":{
                "H2O": 0,
            },
            "svgmap":{
                "H2": "svg-reactant-H2.svg",
                "O2": "svg-O2.svg",
                "H2O": "svg-product-H2O.svg",
                "aH": "svg-atom-H.svg",
                "aO": "svg-o-atom.svg",
                "H2OPlate":   "pink_plate.svg",
            },
            "names":{
                "H2": "H2",
                "O2": "O2",
                "H2O": "H2O",
            },
        },
        
        //level 20
        //C2H2 + O2 -> CO2 + H2O
        {
            "reactants":{
                "C2H2":0,
                "O2": 0,
            },
            "products":{
                "H2O": 0,
                "CO2": 0,
            },
            "svgmap":{
                "C2H2": "svg-reactant-C2H2.svg",
                "O2": "svg-O2.svg",
                "H2O": "svg-product-H2O.svg",
                "CO2":"svg-product-CO2.svg",
                "aC":"svg-c-atom.svg",
                "aH": "svg-atom-H.svg",
                "aO": "svg-o-atom.svg",
                "H2OPlate":   "pink_plate.svg",
                "CO2Plate": "grey_plate.svg"
            },
            "names":{
                "C2H2": "C2H2",
                "O2": "O2",
                "H2O": "H2O",
                "CO2":"CO2"
            },
        },
        
        //level 21
        //NH3 + F2 -> NH4F + NF3
          {
            "reactants":{
                "NH3": 0,
                "F2": 0
            },
            "products":{
                "NH4F": 0,
                "NF3": 0
            },
            "svgmap":{
                "NH3": "svg-reactant-NH3.svg",
                "F2": "svg-reactant-F2.svg",
                "NH4F": "svg-product-NH4F.svg",
                "NF3": "svg-product-NF3.svg",
                "aN": "svg-N-atom.svg",
                "aH": "svg-atom-H.svg",
                "aF": "svg-F-atom.svg",
                "NH4F2Plate": "grey_plate.svg",
                "NF3Plate": "pink_plate.svg"
            }, 
            "names":{
                "NH3": "NH3",
                "F2": "F2",
                "NH4F": "NH4F",
                "NF3": "NF3",
            }
        },
        //level 22
        //Fe2O3 + C -> Fe + CO2
                {
            "reactants":{
                "Fe2O3":0,
                "C": 0,
            },
            "products":{
                "Fe": 0,
                "CO2": 0,
            },
            "svgmap":{
                "Fe2O3": "svg-reactant-Fe2O3.svg",
                "C": "svg-reactant-C.svg",
                "Fe": "svg-product-Fe.svg",
                "CO2":"svg-product-CO2.svg",
                "aFe":"svg-fe-atom.svg",
                "aO": "svg-o-atom.svg",
                "aC": "svg-c-atom.svg",
                "FePlate":   "pink_plate.svg",
                "CO2Plate": "grey_plate.svg"
            },
            "names":{
                "Fe2O3": "C2H2",
                "C": "O2",
                "Fe": "H2O",
                "CO2":"CO2"
            },
        },
        //level 23
        //AlCl3 + Ca3N2 -> AlN + CaCl2
                        {
            "reactants":{
                "AlCl3":0,
                "Ca3N2": 0,
            },
            "products":{
                "AlN": 0,
                "CaCl2": 0,
            },
            "svgmap":{
                "AlCl3": "svg-reactant-AlCl3.svg",
                "Ca3N2": "svg-reactant-Ca3N2.svg",
                "AlN": "svg-product-AlN.svg",
                "CaCl2":"svg-product-CaCl2.svg",
                "aFe":"svg-fe-atom.svg",
                "aO": "svg-o-atom.svg",
                "aC": "svg-c-atom.svg",
                "AlNPlate":   "pink_plate.svg",
                "CaCl2Plate": "grey_plate.svg"
            },
            "names":{
                "AlCl3": "AlCl3",
                "Ca3N2": "Ca3N2",
                "AlN": "AlN",
                "CaCl2":"CaCl2"
            },
        },
    ];
	console.log("Levels: ");
	console.log(module.levels);

    return module;
})();
