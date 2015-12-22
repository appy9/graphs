for (var k in graphViewer_config.nodeConfig)
	{
		$('.legend').append('<div class = "'+k+' legend-container"><div class = "legend-icon '+k+'-icon" id="'+k+'-icon"></div><span style = "margin-left:15px">' + k + '</span></div>');
		document.getElementById(k + "-icon").style.backgroundColor = graphViewer_config.nodeConfig[k].color;
		/*$([id= 'Primary Skill-icon']).css("background-color", 'red');
		$([id= k + "-icon"]).css("background-color", 'red');
		$('.'+k+'-icon').css("background-color", 'red');
		console.log($([id= k + "-icon"]));*/
	}
