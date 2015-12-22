var graphViewer_config = {
    container : 'graph-container',
    input : '../data/graph.gexf',
    nodeConfig : {
        'Primary Skill': {
            color: '#A5C5FF',
            size: 80,
            hidden: false
            //type: "Primary Skill"
            //type: 'primary_skill'
        },
        'Prerequisite Skill': {
            color: '#BEBEBE',
            size: 60,
            hidden: false
        },
        'Parent Skill': {
            color: '#5FCABE',
            size: 60,
            hidden: false
        },
        'Chunk': {
            color: 'green',
            size: 60,
            hidden: false
        }
    },
    plugins : {
        showAll : 1,
        rescale : 1,
        layout : 1,
        neighbors : 1,
        drag : 1,
        changeGraph : 1
    },
    display : {
        showClickedNode: 1,
        showLegend: 1,
        graph: {
            defaultNodeColor: '#ec5148',
            defaultEdgeColor: '#dbc09b',
            defaultLabelColor: '#777',
            sideMargin: 30,
            minEdgeSize: 1,
            labelSizeRatio: 1,
            maxEdgeSize: 5,
            labelThreshold: 20,
            minNodeSize: 1,
            maxNodeSize: 80,
            defaultNodeBorderColor: '#777',
            edgeColor: 'source',
            drawLabels: false,
            autoRescale : true,
            drawEdges:false
        }
    }/*,
    callBacks : {
        onOverNode : callBack,
        onOutNode : callBack,
        onClickNode : callBack,
        onClickStage : callBack,
        onClickEdge : callBack
    }*/

};