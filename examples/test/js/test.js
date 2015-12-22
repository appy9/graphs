var graphViewer_config = {
    container : 'graph-container',
    input : '../data/graph.gexf',
    nodeConfig : {
        'Primary Skill': {
            color: '#FF6600',
            size: 25,
            hidden: false,
            type: "Primary Skill"
        },
        'Prerequisite Skill': {
            color: '#FFDC65',
            size: 15,
            hidden: false
        },
        'Parent Skill': {
            color: '#5FCABE',
            size: 15,
            hidden: false
        },
        Chunk: {
            color: '#A9D0FD',
            size: 10,
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
            maxNodeSize: 25,
            defaultNodeBorderColor: '#777',
            edgeColor: 'source',
            drawLabels: false,
            autoRescale : true
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