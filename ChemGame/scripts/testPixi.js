$(document).ready(function() {
    // Create the renderer 
    // Create a container object called the 'stage'
    var stage = new PIXI.Container(), 
        renderer = PIXI.autoDetectRenderer(256, 256,
        {antialias: false, transparent: false, resolution: 1});

    // Add the canvas to the HTML document
    document.body.appendChild(renderer.view);
    
    renderer.view.style.position = "absolute";
    renderer.view.style.display = "block";
    renderer.autoResize = true;
    renderer.resize(window.innerWidth, window.innerHeight);
    
    // Tell the 'renderer' to 'render' the 'stage'
    //renderer.render(stage);

    PIXI.loader
        .add([
            "../svg/svg-bacon.svg",
            "../svg/svg-chicken.svg"
        ])
        .load(setup);
    
    function setup() {
        var bacon = new PIXI.Sprite(
            PIXI.loader.resources["../svg/svg-bacon.svg"].texture
        );

        stage.addChild(bacon);

        renderer.render(stage);
    }
});

