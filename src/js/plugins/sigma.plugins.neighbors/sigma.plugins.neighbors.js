sigma.classes.graph.addMethod('neighbors', function (nodeId) {
    var k,
        neighbors = {},
        index = this.allNeighborsIndex[nodeId] || {};
    for (k in index)
        neighbors[k] = this.nodesIndex[k];
    return neighbors;
});

sigma.classes.graph.addMethod('getNodesCountByType', function() {
    var k,
        nodeType = {};

    for (k in this.nodesArray){
        if(!nodeType[this.nodesArray[k].attributes["Node Subtype"]])
            nodeType[this.nodesArray[k].attributes["Node Subtype"]] = [];
        nodeType[this.nodesArray[k].attributes["Node Subtype"]].push(this.nodesArray[k]);
    }
    return nodeType;
});