adaptiveGraph.layout = function(sigmaInstance){
    var j= 0,m= 0,n= 0,p= 0,q= 0,r= 0,s=0;
    var nodeType = sigmaInstance.graph.getNodesCountByType();
    sigmaInstance.graph.nodes().forEach(function (node) {
        if(node.type == "Primary Skill"){
            j++;
            var nodeId = node.id,
                toKeep = sigmaInstance.graph.neighbors(nodeId);
            var count = nodeType[node.type].length ;
            var width = sigmaInstance.renderers[0].width;
            var region = width/count;
            toKeep[nodeId] = node;
            //console.log(toKeep);
            node.x = (region)*j;
            node.y = 20;
            for (k in toKeep){
                //console.log(toKeep[k]);
                if(toKeep[k].type == "Prerequisite Skill"){
                    m++;
                    toKeep[k].x = (region/2)*m;
                    toKeep[k].y = -80;
                }
                if(toKeep[k].type == "Parent Skill"){
                    n++;
                    toKeep[k].x = (region/2)*n;
                    toKeep[k].y = -140;
                }
                if(toKeep[k].type == "Assessment"){
                    p++;
                    toKeep[k].x = (region/2)*p;
                    toKeep[k].y = 80;
                }
                if(toKeep[k].type == "Reading"){
                    q++;
                    toKeep[k].x = (region/2)*q;
                    toKeep[k].y = -200;
                }
                if(toKeep[k].type == "Practice"){
                    r++;
                    toKeep[k].x = (region/2)*r;
                    toKeep[k].y = -260;
                }
                if(toKeep[k].type == "Video"){
                    s++;
                    toKeep[k].x = (region/2)*s;
                    toKeep[k].y = -320;
                }

            }
        }
        if(node.x == 0&& node.y == 0 ){
            var nodeId = node.id,
                toKeep = sigmaInstance.graph.neighbors(nodeId);
            var count = nodeType[node.type].length ;
            var width = sigmaInstance.renderers[0].width;
            var region = width/count;
            toKeep[nodeId] = node;
            console.log(toKeep);
            for (k in toKeep) {
                console.log(toKeep[k]);
                if (toKeep[k].type == "Prerequisite Skill") {
                    node.x = toKeep[k].x+100;
                    node.y = toKeep[k].y-80;
                    /*m++;
                    toKeep[k].x = (region / 2) * m;
                    toKeep[k].y = -80;*/
                }
            }
        }
    });
};
