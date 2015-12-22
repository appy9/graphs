var adaptiveGraph = {};
adaptiveGraph.Rendering = function (sigmaInstance) {
    var R = 100,
        i = 0,
        j = 0,
        k= 0,
        l= 0,
        L =26;
    var nodeType = sigmaInstance.graph.getNodesCountByType();
    console.log(nodeType);
    sigmaInstance.graph.nodes().forEach(function (n) {
        n.x = 0;
        n.y = 0;
        n.color = graphViewer_config.nodeConfig[n.attributes['Node Type']] ? graphViewer_config.nodeConfig[n.attributes['Node Type']].color : graphViewer_config.nodeConfig[n.attributes['Node Subtype']].color;
        n.size = graphViewer_config.nodeConfig[n.attributes['Node Type']] ? graphViewer_config.nodeConfig[n.attributes['Node Type']].size : graphViewer_config.nodeConfig[n.attributes['Node Subtype']].size;
        n.hidden = graphViewer_config.nodeConfig[n.attributes['Node Type']] ? graphViewer_config.nodeConfig[n.attributes['Node Type']].hidden : graphViewer_config.nodeConfig[n.attributes['Node Subtype']].hidden;
        if(n.attributes['Node Subtype'] == "NULL")
            n.type =  n.attributes['Chunk Interaction Type'];
        else
            n.type = n.attributes['Node Subtype'];
        n.originalColor = n.color;
    });
    sigmaInstance.graph.edges().forEach(function (e) {
        e.type = "arrow";
        //e.type = 'curve';
        e.originalColor = e.color;
    });
};

