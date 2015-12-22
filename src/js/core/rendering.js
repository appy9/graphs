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
        //console.log(sigma.renderers[0].height)
        //console.log(sigma.renderers)

       /* n.x = 0;
        n.y = 0;*/
      /*  n.x = Math.random();
        n.y = Math.random();*/
        n.x = 30*i;
        n.y = -20
        //n.x = graphViewer_config.nodeConfig[n.attributes['Node Type']] ? Math.cos(Math.PI*(i++)/L)*R : 100;
        //n.y = graphViewer_config.nodeConfig[n.attributes['Node Type']] ? Math.sin(Math.PI*(i++)/L)*R : 1;
        n.size = 10;
        n.color = graphViewer_config.nodeConfig[n.attributes['Node Type']] ? graphViewer_config.nodeConfig[n.attributes['Node Type']].color : graphViewer_config.nodeConfig[n.attributes['Node Subtype']].color;
        n.size = graphViewer_config.nodeConfig[n.attributes['Node Type']] ? graphViewer_config.nodeConfig[n.attributes['Node Type']].size : graphViewer_config.nodeConfig[n.attributes['Node Subtype']].size;
        n.hidden = graphViewer_config.nodeConfig[n.attributes['Node Type']] ? graphViewer_config.nodeConfig[n.attributes['Node Type']].hidden : graphViewer_config.nodeConfig[n.attributes['Node Subtype']].hidden;
        if(n.attributes['Node Subtype'] == "NULL")
            n.type =  "NULL"
        else
            n.type = n.attributes['Node Subtype'];
        n.originalColor = n.color;
        /*if([n.attributes['Node Subtype']] == "Primary Skill"){
            var L = sigma.graph.getNodesCountByType(n);
            console.log(L);
            n.x = 191*i;
            n.y = 20;
            n.type = "Primary Skill";
            n.size = 25;
        };*/
        if(n.type == "NULL" ){
            i++;
            var count = nodeType[n.type].length ;
            var width = sigmaInstance.renderers[0].width;
            var region = width/count;
            console.log(count, width ,region , i);
          /*  n.x = region*i;
            n.y = 100;*/
            n.x =  Math.cos(Math.PI*(i++)/L)*R;
            n.y =  Math.sin(Math.PI*(i++)/L)*R ;
            n.fixed =  true;
        }

        if(n.type == "Parent Skill" ){
            k++;
            var count = nodeType[n.type].length ;
            var width = sigmaInstance.renderers[0].width;
            var region = width/count;
            console.log(count, width ,region, k);
            /*n.x = region*k;
            n.y = -160;*/
            n.x =  Math.cos(Math.PI*(k++)/L)*R;
            n.y =  Math.sin(Math.PI*(k++)/L)*R ;
            n.fixed =  true;
        }
        if(n.type == "Prerequisite Skill" ){
            l++;
            var count = nodeType[n.type].length ;
            var width = sigmaInstance.renderers[0].width;
            var region = width/count;
            console.log(count, width ,region, l);
            n.x = region*l;
            n.y = -100;
            n.fixed =  true;
        }
        if(n.type == "Primary Skill" ){
            j++;
            var count = nodeType[n.type].length ;
            var width = sigmaInstance.renderers[0].width;
            var region = width/count;
            console.log(count, width ,region, j);
            n.x = (region)*j;
            n.y = 20;
            n.fixed =  true;
        }

    console.log(n);
    });
    sigmaInstance.graph.edges().forEach(function (e) {
        console.log(e);
        //e.size = 5;
        e.type = "arrow";
        //e.type = 'curve';
        e.originalColor = e.color;
    });
};

