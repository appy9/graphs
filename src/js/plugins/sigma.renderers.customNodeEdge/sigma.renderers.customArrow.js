;(function() {
    'use strict';

    sigma.utils.pkg('sigma.canvas.edges');

    /**
     * This edge renderer will display edges as arrows going from the source node
     *
     * @param  {object}                   edge         The edge object.
     * @param  {object}                   source node  The edge source node.
     * @param  {object}                   target node  The edge target node.
     * @param  {CanvasRenderingContext2D} context      The canvas context.
     * @param  {configurable}             settings     The settings function.
     */
    sigma.canvas.edges.customArrow = function(edge, source, target, context, settings) {
        var color = edge.color,
            prefix = settings('prefix') || '',
            edgeColor = settings('edgeColor'),
            defaultNodeColor = settings('defaultNodeColor'),
            defaultEdgeColor = settings('defaultEdgeColor'),
            size = edge[prefix + 'size'] || 1,
            sSize = source[prefix + 'size'],
            tSize = target[prefix + 'size'],
            sX = source[prefix + 'x'],
            sY = source[prefix + 'y'],
            tX = target[prefix + 'x'],
            tY = target[prefix + 'y'],
            aSize = Math.max(size * 2.5, settings('minArrowSize')),
            d = Math.sqrt(Math.pow(tX - sX, 2) + Math.pow(tY - sY, 2));

            var aX, aY;
            if(tX > (sX + (sSize)) ) {
                aX = tX - (tSize) - aSize;
                aY = tY;
            } else if ( tX <= (sX - sSize)) {
                aX = tX + (tSize) ;
                aY = tY;
            } else {
                aX = tX;

               if(tY>sY) {
                   aY = tY - (tSize / 2) - aSize;
               }else {
                   aY = tY + (tSize / 2) ;
               }
            }


            var vX = (tX - sX) * aSize / d,
            vY = (tY - sY) * aSize / d;
            console.log('size,tSize,sX,sY,tX,tY,aSize',size,tSize,sX,sY,tX,tY,aSize);
            console.log('d,aX,aY,vX,vY',d,aX,aY,vX,vY);

        if (!color)
            switch (edgeColor) {
                case 'source':
                    color = source.color || defaultNodeColor;
                    break;
                case 'target':
                    color = target.color || defaultNodeColor;
                    break;
                default:
                    color = defaultEdgeColor;
                                                     break;
            }

        context.strokeStyle = color;
        context.lineWidth = size;
        context.beginPath();
        context.moveTo(sX, sY);
        context.lineTo(
            aX,
            aY
        );
        context.stroke();

        context.fillStyle = color;
        context.beginPath();
        context.moveTo(aX + vX, aY + vY);
        context.lineTo(aX + vY * 0.6, aY - vX * 0.6);
        context.lineTo(aX - vY * 0.6, aY + vX * 0.6);
        context.lineTo(aX + vX, aY + vY);
        context.closePath();
        context.fill();
    };
})();