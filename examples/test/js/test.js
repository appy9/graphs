var graphViewer_config = {
    container : 'graph-container',
    input : '../data/graph.gexf',
    nodeConfig : {
        'Primary Skill': {
            color: '#A5C5FF',
            startColor: '#E6EDFF',
            size: 80,
            hidden: false,
            borderClr:'rgb(89,137,192)'

        },
        'Prerequisite Skill': {
            color: '#BEBEBE',
            startColor: '#ECECEC',
            size: 60,
            hidden: true
        },
        'Parent Skill': {
            color: '#9BBB59',
            startColor: '#E7EED7',
            size: 60,
            hidden: true
        },
        'Chunk': {
            color: '#FFF',
            startColor: 'red',
            size: 60,
            hidden: false,
            borderClr:'rgb(247,150,70)'
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
            autoRescale : false,
            drawEdges:false,
            enableHovering: false
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