(function() {
    'use strict';

    if (typeof sigma === 'undefined')
        throw 'sigma is not declared';

    sigma.utils.pkg('sigma.plugins');

    sigma.plugins.showPopover =  function(e){
        var left = e.data.node["renderer1:x"];
        var top = e.data.node["renderer1:y"];
        var clickNode = e.data.node;

        for (var k in clickNode.attributes) {
            {
                if (clickNode.attributes[k] != undefined) {
                    $('.popover').append("<span class='clicked-node-attributes'>" + k + " :  " + clickNode.attributes[k]
                    + "<br></span>");
                }
            }}
        $('.popover').css('left', left+'px');
        $('.popover').css('top' , top+20+'px').show();
    };

    sigma.plugins.hidePopover = function(e){
        $('.popover').html("").hide();
    };

}).call(window);
