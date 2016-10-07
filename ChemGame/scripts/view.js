var reactantView = {};
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
            id = elem + "0";
            reactantView[elem] = {
                "nextId": 1,
                "elems": [{"id":id, "x":x, "y":y}],
            }
        } else {
            id = elem + reactantView[elem]["nextId"];
            reactantView[elem]["nextId"]++;
            reactantView[elem]["elems"].push({"id":id, "x":x, "y":y});
        }
        img = "svg/" + currentState["svgmap"]["a" + elem];
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
    for (var elem in product) {
        if (elem !== "coeff") {
            // Append to existing list for the element 
           // var productWidth = $(".productView").width();
            //var productHeight = $(".productView").height();
            var x = Math.round(Math.random() * width * 0.5 + width * 0.5 - 80);
            var y = Math.round(Math.random() * height);
            var id = 0;
            if (productView.hasOwnProperty(elem)) {
                var prevElem = productView[elem].peek();
                var prevIDNum = prevElem["id"].substr("product".length + elem.length);
                id = "product" + elem + (prevIDNum + 1);
                productView[elem].push({"id":id, "x":x, "y":y});
            }
            // Create a new list for the element
            else {
                id = "product" + elem + 1;
                productView[elem] = [{"id":id, "x":x, "y":y}];
            }
            var newDiv = "<div id=" + id + " class='productView'></div>";
            $(newDiv).appendTo($("#worktable"));
            $("#" + id).css("position", "relative");
            $("#" + id).css("left", x + "px");
            $("#" + id).css("bottom", y + "px");
        }
    }
}

function removeReactantFromView(reactant) {
    
}

function removeProductFromView(product) {
    
}
