adaptiveGraph.applyPlugins = function(sigmaInstance){

    //sigma.plugins.layout(sigmaInstance);

    sigma.plugins.dragNodes(sigmaInstance, sigmaInstance.renderers[0]);

    $('.show-all').click(function () {
        sigma.plugins.showAllNodes(sigmaInstance);
    });
    $('.rescale').click( function () {
        sigma.plugins.rescale(sigmaInstance);
    });
    $('.change-graph').click( function () {
        sigma.plugins.changeGraph(sigmaInstance);
    });
    $('.tooltip').click( function () {
        adaptiveGraph.showTooltip = 1
    });

};