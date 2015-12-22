
sigma.plugins.rescale = function (sigmaInstance) {
    sigmaInstance.camera.goTo({
        x: 0,
        y: 0,
        angle: 0,
        ratio: 1
    });
    sigmaInstance.refresh();
};
