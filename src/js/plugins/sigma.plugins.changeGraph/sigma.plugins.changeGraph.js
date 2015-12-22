sigma.plugins.changeGraph = function (sigmaInstance) {
    showAllNodes = true;
    sigma.plugins.showAllNodes(sigmaInstance);
    sigma.parsers.gexf(graphViewer_config.input,
        adaptiveGraph.settings,
        function (sigmaInstance) {
            adaptiveGraph.Rendering(sigmaInstance);
            sigmaInstance.killForceAtlas2();
            sigma.plugins.startForceAtlas(sigmaInstance);
            sigma.plugins.stopForceAtlas(sigmaInstance);
        });
};
