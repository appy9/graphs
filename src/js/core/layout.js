adaptiveGraph.layout = function(sigmaInstance){
    var j= 0,m= 0,n= 0,p= 0,q= 0,r= 0,s=0;
    var nodeType = sigmaInstance.graph.getNodesCountByType();
    sigmaInstance.graph.nodes().forEach(function (node) {
        if(node.type == "Primary Skill"){
            var chunkCount = 0;
            j++;
            var nodeId = node.id,
                toKeep = sigmaInstance.graph.neighbors(nodeId);
            var count = nodeType[node.type].length ;
            var width = sigmaInstance.renderers[0].width;
            var factor = width/2;
            var region = width/(count+1);
            toKeep[nodeId] = node;
            //console.log(region,j);
            node.x = (region)*j-factor;
            node.y = 120;
            for (k in toKeep){
                if(toKeep[k].type == "Assessment"){
                    if(toKeep[k].x==0){
                        p++;
                        var count = nodeType[toKeep[k].type].length ;
                        var region = (width-500)/(count+1);
                        //console.log('assessment',region,p);
                        //console.log(region,p);
                        toKeep[k].x = (region)*p-factor+250;
                        toKeep[k].y = 235;
                    }

                }
                else if(toKeep[k].attributes["Node Type"] == "Chunk"){ // any other chunk
                    if(toKeep[k].x==0) {
                        chunkCount++;
                        var count = nodeType[node.type].length;
                        var region = (width) / (count + 1);
                        toKeep[k].x = (region) * j - factor;
                        toKeep[k].y = 40 -(chunkCount * 45);
                    }
                }

                if(toKeep[k].type == "Prerequisite Skill"){
                    if(toKeep[k].x==0) {
                        m++;
                        var count = nodeType[toKeep[k].type].length;
                        var width = sigmaInstance.renderers[0].width;
                        var region = width / count;
                        //console.log(region, m);
                        toKeep[k].x = (region) * m;
                        toKeep[k].y = -100;
                    }
                }
                if(toKeep[k].type == "Parent Skill"){
                    if(toKeep[k].x==0){
                        n++;
                        var count = nodeType[toKeep[k].type].length ;
                        var width = sigmaInstance.renderers[0].width;
                        var region = width/count;
                        //console.log(region,n);
                        toKeep[k].x = (region)*n;
                        toKeep[k].y = -200;
                    }
                }

              /*  if(toKeep[k].type == "Reading"){
                    if(toKeep[k].x==0) {
                        q++;
                        var count = nodeType[toKeep[k].type].length;
                        var width = sigmaInstance.renderers[0].width;
                        var region = width / count;
                        console.log(region, q);
                        toKeep[k].x = (region) * q;
                        toKeep[k].y = -300;
                    }
                }
                if(toKeep[k].type == "Practice"){
                    if(toKeep[k].x==0) {
                        r++;
                        var count = nodeType[toKeep[k].type].length;
                        var width = sigmaInstance.renderers[0].width;
                        var region = width / count;
                        console.log(region, r);
                        toKeep[k].x = (region) * r;
                        toKeep[k].y = -300;
                    }
                }
                if(toKeep[k].type == "Video"){

                    if(toKeep[k].x==0){
                        s++;
                        var count = nodeType[toKeep[k].type].length ;
                        var width = sigmaInstance.renderers[0].width;
                        var region = width/count;
                        console.log(region,s);
                        toKeep[k].x = (region)*s;
                        toKeep[k].y = -300;
                    }

                }*/

            }
        }
        if(node.x == 0&& node.y == 0 ){
            var nodeId = node.id,
                toKeep = sigmaInstance.graph.neighbors(nodeId);
            var count = nodeType[node.type].length ;
            var width = sigmaInstance.renderers[0].width;
            var region = width/count;
            toKeep[nodeId] = node;
            //console.log(toKeep);
            for (k in toKeep) {
                //console.log(toKeep[k]);
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
