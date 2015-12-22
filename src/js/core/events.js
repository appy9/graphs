var showAllNodes = false;

adaptiveGraph.registerEvents = function (sigmaInstance) {
	sigmaInstance.bind('overNode', function (e) {
		adaptiveGraph.onOverNode(e,sigmaInstance);
	});
	sigmaInstance.bind('outNode', function (e) {
		adaptiveGraph.onOutNode(e,sigmaInstance);
	});
	sigmaInstance.bind('clickNode', function (e) {
		//console.log(e.data.node['renderer1:size']);
		adaptiveGraph.onClickNode(e);
	});
	sigmaInstance.bind('clickStage', function (e) {
		adaptiveGraph.onClickStage(e);
	});
};

adaptiveGraph.onOverNode = function(e,sigmaInstance){
	sigma.plugins.showPopover(e);
	var nodeId = e.data.node.id,
		toKeep = sigmaInstance.graph.neighbors(nodeId);
	toKeep[nodeId] = e.data.node;
	//sigmaInstance.settings({drawNodes:false})
	//sigmaInstance.graph.clear();
	sigmaInstance.graph.nodes().forEach(function (n) {
		if (toKeep[n.id]) {
			n.color = n.originalColor;
			n.hidden = false;
		}
		else
			n.hidden = true;
	});
	/*sigmaInstance.graph.edges().forEach(function(e) {
	 if (toKeep[e.source] && toKeep[e.target])
	 e.color = e.originalColor;
	 else
	 e.color = '#F5F5F5';
	 });*/
	sigmaInstance.refresh()
};

adaptiveGraph.onOutNode = function (e,sigmaInstance) {
	sigma.plugins.hidePopover(e);
	sigmaInstance.graph.nodes().forEach(function (n) {
		n.color = n.originalColor;
		if (showAllNodes)
			n.hidden = false;
		else
			n.hidden = graphViewer_config.nodeConfig[n.attributes['Node Type']] ? graphViewer_config.nodeConfig[n.attributes['Node Type']].hidden : graphViewer_config.nodeConfig[n.attributes['Node Subtype']].hidden
	});
	sigmaInstance.graph.edges().forEach(function (e) {
		e.color = e.originalColor;
	});
	sigmaInstance.refresh()
};

adaptiveGraph.onClickNode = function(e){
	if($('.clicked-node').css('display','block'))
		$('.clicked-node').html("<h3>Clicked Node: </h3>");
	clicknode = e.data.node;
	for (var k in clicknode.attributes) {
		if (clicknode.attributes[k] != undefined) {
			$('.clicked-node').append("<span class='clicked-node-attributes'>" + k + " :  " + clicknode.attributes[k] + "<br></span>") ;
		}
	}
};

adaptiveGraph.onClickStage =function(){
	$('.clicked-node').html("<h3>Clicked Node: </h3>");
	$('.clicked-node').hide();
};

