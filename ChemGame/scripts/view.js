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

var testReactant = {"coeff":1, "K":1};
var testProduct = {"coeff":2, "K":1, "Cl":1};

function addReactantToView(elem) {
    var width = $("#worktable").width();
    var height = $("#worktable").height();
    var worktabley = $("#worktable").position().top + 30;
    console.log('worktabley ' + worktabley);
    console.log('height ' + height);

    var x = Math.round(Math.random() * width * 0.5);
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
    console.log(x + " " + y);
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
    console.log('worktabley ' + worktabley);
    console.log('height ' + height);

    var x = width - Math.round(Math.random() * width * 0.5);
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

function removeReactantFromView(reactant) {
    
}

function removeProductFromView(product) {
    
}
