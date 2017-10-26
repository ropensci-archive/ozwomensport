
(function(){
	var vgnScripts = [];

	// Only load json if it isn't already defined
	if (typeof window.JSON === 'undefined') {
		vgnScripts.push("/sites/scripts/json/json.min.js");
	}

	// Only load vquery if it isn't already defined
	if ( typeof window.vQuery === 'undefined' ) {
		vgnScripts.push("/sites/scripts/vquery/vquery.min.js");
	}
	vgnScripts.push("/sites/scripts/async/ajaxlib.js");

	// Only load ajax if it isn't already defined
	if (typeof window.OT === 'undefined' || typeof window.OT.wem === 'undefined') {
		vgnScripts.push("/sites/scripts/async/wem-ajax-min.js");
	}

	// Only load messaging if it isn't already defined
	if (typeof window.OT === 'undefined' || typeof window.OT.wem === 'undefined' || typeof window.OT.wem.messaging === 'undefined') {
		vgnScripts.push("/sites/scripts/messaging/wem-messaging-min.js");
	}

	var vgnScriptBlock = "";
	for ( var i=0; i < vgnScripts.length; ++i ) {
		var vgnScript = vgnScripts[i];
		vgnScriptBlock += "<script type='text/javascript' src='" + vgnScript + "'></script>";
	}
	
	// Need to make sure vquery doesn't conflict with other jquery libraries
	vgnScriptBlock += "<script type='text/javascript' src='/sites/scripts/vcm32266.js'></script>";
	document.write(vgnScriptBlock);
})();
