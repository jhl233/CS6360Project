/* Combines all reactant/product elements into one long list
 * for easier iteration 
 */
function flatten(arrayWithHashes) {
    var finalHashArray = [];
    for (var i = 0; i < arrayWithHashes.length; i++) {
        var coeff = arrayWithHashes[i]["coeff"];
        for (var key in arrayWithHashes[i]) {
            if (key !== "coeff") {
                if (finalHashArray.hasOwnProperty(key)) {
                    finalHashArray[key] += coeff * arrayWithHashes[i][key];
                } else {
                    finalHashArray[key] = coeff * arrayWithHashes[i][key];
                }
            }
        }
    }
    return finalHashArray;
}

/* Checks if chemical equation is balanced */
function isBalanced(react, prod) {
    numBalanced = 0;
    numReactants = 0;
    
    // Flatten the arrays for easy searching
    reactantElements = flatten(react);
    productElements = flatten(prod);
    
   /* var text = "";
    for (var key in reactantElements) {
        text += "key: " + key + " value: " + reactantElements[key] + "\n";
    }
    alert(text);*/
    
    // Check if number of reactants is equal to the number of productss
    for (var key in reactantElements) {
        if (productElements.hasOwnProperty(key) &&
            reactantElements[key] === productElements[key]) {
            numBalanced++;
        }
        numReactants++;
    }
    
    // All elements are properly balanced
    if (numBalanced === Object.keys(reactantElements).length) {
        return true;
    }
    
    // >= 1 elements were not properly balanced
    return false;
}

function reactantAdded(event) {
    $("#" + event.target.id).appendTo($("#worktable"));
    
    // Extract reactant's location in array
    var id = event.target.id.substr(8);
    worktableReactants.push(reactants[id]);
    // Check if balanced
    balanced = isBalanced(worktableReactants, worktableProducts);
    if (balanced) {
        $("#finishButton").css({"background-color", "green"});
    }
}

function reactantRemoved(reactant) {
    // Check if balanced
}

function productAdded(product) {
    $("#" + event.target.id).appendTo($("#worktable"));
    
    // Extract reactant's location in array
    var id = event.target.id.substr(7);
    worktableProducts.push(products[id]);
    // Check if balanced
    balanced = isBalanced(worktableReactants, worktableProducts);
    if (balanced) {
        $("#finishButton").css({"background-color", "green"});
    }
}

function productRemoved(product) {
    // Check if balanced
}