
/* Global variables */
var reactant0 = {"coeff":1, "N":1, "H":3};
var reactant1 = {"coeff":1, "O":2};
var reactants = [reactant0, reactant1];

var product0 = {"coeff":1, "N":1, "O":1};
var product1 = {"coeff":1, "H":2, "O":1};

var products = [product0, product1];

worktableReactants = [];
worktableProducts = [];

// For each reactant, create a div
$(document).ready(function() {
    initializeLevel(exampleLevel);
});
