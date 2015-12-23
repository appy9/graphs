
adaptiveGraph.display = function () {
    $('#container').append( "<div id='graph-container'></div><div class='legend'></div><div class=clicked-node></div><div class='popover'></div>" );


};
adaptiveGraph.display();
adaptiveGraph.settings = new sigma(

    {
        renderer: {
            container: document.getElementById('graph-container'),
            type: 'canvas'
        },
        settings : graphViewer_config.display.graph
    });

sigma.parsers.gexf(graphViewer_config.input,
    adaptiveGraph.settings,
    function (sigmaInstance) {
        adaptiveGraph.Rendering(sigmaInstance);

        adaptiveGraph.layout(sigmaInstance);

        //sigmaInstance.refresh();

        adaptiveGraph.applyPlugins(sigmaInstance);

        //adaptiveGraph.registerEvents(sigmaInstance);

        console.log(sigmaInstance.isForceAtlas2Running());
        sigmaInstance.refresh();
        setTimeout(function () {
            sigmaInstance.refresh();
            console.log(sigmaInstance.isForceAtlas2Running())
        }, 5000);

    }
);