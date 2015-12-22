sigma.plugins.showAllNodes = function(sigmaInstance){
    if(showAllNodes){
        $('.show-all').text('Show All');
        showAllNodes = false;
        sigmaInstance.graph.nodes().forEach(function (n) {
            n.hidden = graphViewer_config.nodeConfig[n.attributes['Node Type']] ? graphViewer_config.nodeConfig[n.attributes['Node Type']].hidden : graphViewer_config.nodeConfig[n.attributes['Node Subtype']].hidden
        });
        sigmaInstance.refresh();

    }
    else{
        $('.show-all').text('Hide Chunks');
        showAllNodes = true;
        sigmaInstance.graph.nodes().forEach(function (n) {
            n.hidden = false;
        });
        sigmaInstance.refresh();
    }
};