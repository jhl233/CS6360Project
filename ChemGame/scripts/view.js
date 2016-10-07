var reactantView = {};
var productView = {};

var testReactant = {"coeff":1, "K":1};
var testProduct = {"coeff":2, "K":1, "Cl":1};

$(document).ready(function() {
    addReactantToView(testReactant);
    addProductToView(testProduct);
});

function addReactantToView(reactant) {
    var width = $("#worktable").width();
    var height = $("#worktable").height();
    for (var elem in reactant) {
        if (elem !== "coeff") {
            // Append to existing list for the element 
            var x = Math.round(Math.random() * width * 0.5);
            var y = Math.round(Math.random() * height);
            var id = 0;
            if (reactantView.hasOwnProperty(elem)) {
		    console.log("yipeee");
                var prevElem = reactantView[elem];
                var prevIDNum = prevElem["id"].substr("reactant".length + elem.length);
                id = "reactant" + elem + (prevIDNum + 1);
                reactantView[elem].push({"id":id, "x":x, "y":y});
            }
            // Create a new list for the element
            else {
		    console.log("moooooooo "+ elem);
                id = elem + "0";
                reactantView[elem] = [{"id":id, "x":x, "y":y}];
            }
            var newImg = $("<img>", {id: id, src: "a"+elem+".svg"
            var newDiv = "<div id=" + id + " class='reactantView'></div>";
            $(newDiv).appendTo($("#worktable"));
            $("#" + id).css("position", "relative");
            $("#" + id).css("left", x + "px");
            $("#" + id).css("bottom", y + "px");
        }
    }
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
