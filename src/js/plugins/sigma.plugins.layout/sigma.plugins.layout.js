sigma.plugins.layout = function (sigmaInstance) {
    sigma.plugins.startForceAtlas(sigmaInstance);
    //sigma.plugins.stopForceAtlas(sigmaInstance);
};

sigma.plugins.startForceAtlas = function (sigmaInstance){
    //sigmaInstance.startForceAtlas2({adjustSizes :true,scalingRatio :5,edgeWeightInfluence:0,barnesHutOptimize :false,outboundAttractionDistribution  :true,gravity :-2});
    sigmaInstance.startForceAtlas2({adjustSizes :false,scalingRatio :5,outboundAttractionDistribution:true,worker:true,linLogMode:true});
    //sigmaInstance.startForceAtlas2();
};

sigma.plugins.stopForceAtlas = function (sigmaInstance) {
    setTimeout(function () {
        sigmaInstance.stopForceAtlas2()
    }, 10000);
};
