
/* Helper function that combines all reactant/product elements 
 * into one long list for easier iteration.
 */
function createArrayOfIndividualElements(compoundsWithCoeffs) {    
   var finalArray = [];
   for (var compound in compoundsWithCoeffs) {
       var coeff = compoundsWithCoeffs[compound];
       
       // Break compounds into individual elements
       elements = nameToObj(compound);
       
       // Calculate the amount of each individual element and add to final array
       for (var elem in elements) {
            if (finalArray.hasOwnProperty(elem)) {
                finalArray[elem] += coeff * elements[elem];
            } else {
                finalArray[elem] = coeff * elements[elem];
            }
           //console.log(elem + ": " + finalArray[elem]);
        } 
    }
    return finalArray;
}

/* Checks if chemical equation is balanced */
function isBalanced(level, currentState) {
    numBalanced = 0;
    numReactants = 0;
    
    // Flatten the arrays for easy searching
    //console.log("Flatten reactants from current state: ");
    reactantElements = createArrayOfIndividualElements(currentState["reactants"]);
    //console.log("Flatten products from current state: ");
    productElements = createArrayOfIndividualElements(currentState["products"]);
    
    // Check if number of reactants is equal to the number of products, 
    // but that the trivial case where all elements = 0 does not count
    for (var elem in reactantElements) {
        if (productElements.hasOwnProperty(elem) &&
            reactantElements[elem] === productElements[elem] &&
            productElements[elem] !== 0) {
            console.log(elem + " was balanced.");
            numBalanced++;
        } else {
            console.log(elem + " was not balanced.");
        }
        numReactants++;
    }
    
    // Flatten the level reactants and products to make sure all reactants and products were used
    //console.log("Flatten reactants from level: ");
    allReactants = createArrayOfIndividualElements(level["reactants"]);
    //console.log("Flatten products from level: ");
    allProducts = createArrayOfIndividualElements(level["products"]);
    
    // All elements are properly balanced
    //console.log("numBalanced = " + numBalanced + 
    //            "\nlength of level reactants = " + Object.keys(allReactants).length +
    //            "\nlength of level products = " + Object.keys(allProducts).length);
    if (numBalanced === Object.keys(allReactants).length &&
        numBalanced === Object.keys(allProducts).length) {
        return true;
    }
    
    // >= 1 elements were not properly balanced
    return false;
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

function reactantAdded(event) {
    $("#" + event.target.id).appendTo($("#worktable"));
    
    // Extract reactant's location in array
    var id = event.target.id.substr(8);
    worktableReactants.push(reactants[id]);
    // Check if balanced
    balanced = isBalanced(worktableReactants, worktableProducts);
    if (balanced) {
        $("#finishButton").css("background-color", "green");
    }
}

function reactantRemoved(event) {
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
        $("#finishButton").css("background-color", "green");
    }
}

function productRemoved(event) {
    // Check if balanced
}
