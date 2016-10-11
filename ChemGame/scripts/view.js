/*
 *
 */
var viewModule = (function() {

    // reactantView looks like:
    //    {
    //     "Chicken":
    //      {
    //        "nextId": 5,
    //        "elems": [
    //           {
    //             "id": "Chicken4",
    //             "x": 300,
    //             "y": 200,
    //           }, ...
    //         ],
    //      },
    //      "Egg":
    //       ...
    //    }
    var reactantView = {};


    // productView looks like:
    // {
    //   "Egg3Bacon4":
    //     {
    //       "nextId": 2,
    //       "products": [
    //         {
    //           "id": "Egg3Bacon4-0",
    //           "filled": true,
    //           "x": 600,
    //           "y": 100,
    //           "elemIds": ["Egg0", "Egg1", "Egg2", ...],
    //         },
    //       ],
    //     },
    // }
    var productView = {};

    // initializeScreen
    // assumes [state] looks like:
    // {
    //   "reactants": {
    //     "Chicken2Bacon": 1,
    //     ...
    //   },
    //   "products": {
    //     "Egg": 1,
    //     ...
    //   },
    //   "svgmap": {
    //     "Chicken2Bacon": "svg-reactant1.svg",
    //     ...
    //   },
    // }
    function initializeScreen(state) {
        
    }

    function addReactantToView(elem) {
        var width = $("#worktable").width();
        var height = $("#worktable").height();
        var worktabley = $("#worktable").position().top + 30;
    
        var x = Math.round(Math.random() * width * 0.4);
        var y = Math.round(Math.random() * (height - 100)) + worktabley;
    
        // Each item in reactantView and productView need to have an
        // id and an x and a y coordinate
        if (!reactantView.hasOwnProperty(elem)) {
            reactantView[elem] = {
                "nextId": 0,
                "elems": [],
            }
        }
        id = elem + reactantView[elem]["nextId"];
        reactantView[elem]["nextId"]++;
        reactantView[elem]["elems"].push({"id":id, "x":x, "y":y});

        var img = "svg/" + currentState["svgmap"]["a" + elem];
        var $newImg = $("<img>", {id: id, src: img});
        $("#worktable").append($newImg);
        $newImg.css("position", "absolute");
        $newImg.css("left", x + "px");
        $newImg.css("top", y + "px");

    }

    function addProductToView(product) {
        var width = $("#worktable").width();
        var height = $("#worktable").height();
        var worktabley = $("#worktable").position().top + 30;

        var x = width - Math.round(Math.random() * width * 0.4) - 100;
        var y = Math.round(Math.random() * (height - 100)) + worktabley;

        if (!productView.hasOwnProperty(product)) {
            productView[product] = {
                "nextId": 0,
                "products": [],
            }
        }
        var nextId = productView[product]["nextId"]++;
        var id = product + "-" + nextId;
        productView[product]["products"].push(
            {
                "id": id,
                "filled": false,
                "x": x,
                "y": y,
                "elemIds": [],
            }
        );

        var $newImg = $("<img>", {id: id, src: "svg/svg-pot.svg"});
        $("#worktable").append($newImg);
        $newImg.css("position", "absolute");
        $newImg.css("left", x + "px");
        $newImg.css("top", y + "px");
    }

    // Can be called by either addProductToView or addReactantToView
    function checkCollapsibles() {
        var reactantElems = {};
        for (var elem in reactantView) {
            console.log(elem + " has " + reactantView[elem]["elems"].length);
            reactantElems[elem] = reactantView[elem]["elems"].length;
        }
    
        for (var product in productView) { // For each Chicken2Bacon3
            var reqs = nameToObj(product);
            console.log("Trying: " + product);
            var enough = true;
            for (var elemReq in reqs) { // For each Chicken-needs-3
                if ((typeof reactantElems[elemReq] === "undefined") || (reactantElems[elemReq] < reqs[elemReq])) {
                    console.log("Not enough " + elemReq);
                    enough = false;
                    break;
                }
            }
            if (!enough) {
                continue;
            }
            console.log("there's enough here...");
            // Let's assume that only one product is MADE at any time
            //
            var elemProductList = productView[product]["products"];
            var freeProduct;
            console.log(freeProduct);
            for (var i = 0; i < elemProductList.length; i++) { // for each chicken2Bacon3{object}
                console.log(elemProductList[i]);
                if (elemProductList[i]["filled"]) {
                    continue;
                } else {
                    freeProduct = elemProductList[i];
                }
            } 
            if (typeof freeProduct === "undefined") {
                console.log("Not enough free product :(");
                continue;
            }
            
            console.log("reaping!!!");
            for (var elemReq in reqs) { // for each Chicken in Chicken-needs-3
                console.log(elemReq);
                for (var i = 0; i < reqs[elemReq]; i++) {
                    var freeElem = reactantView[elemReq]["elems"].pop();
                    var freeElemId = "#" + freeElem.id;
                    console.log("grabbing an element");
                    console.log(freeElem.id);
                    console.log(freeProduct.x);
    
    
                    var xf = freeProduct.x + (Math.random() * 40);
                    var yf = freeProduct.y + (Math.random() * 40);
                    $(freeElemId).css("left", xf + "px");
                    $(freeElemId).css("top", yf + "px");
                    $(freeElemId).css("z-index", "100");
                    freeProduct["elemIds"].push(freeElem.id);
                    console.log(productView);
                }
                freeProduct["filled"] = true;
            }
        }
    }
    
    function removeReactantFromView(reactant) {
        
    }
    
    function removeProductFromView(product) {
        
    }

    return {
        addReactant: addReactantToView,
        addProduct: addProductToView,
        removeProduct: removeProductFromView,
        removeReactant: removeReactantFromView,
    };
})();
