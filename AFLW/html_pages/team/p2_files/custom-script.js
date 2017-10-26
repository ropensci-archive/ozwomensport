
function bn_getCanonical() {
	var canonical = "";
	var links = document.getElementsByTagName("link");
	for (var i = 0; i < links.length; i++) {
		if (links[i].getAttribute("rel") === "canonical") {
			canonical = links[i].getAttribute("href");
			return canonical;
		}
	}
	return;
}

//Custom method to find meta content by meta name
function bn_getMeta(meta_name) {
	var metas = document.getElementsByTagName("meta");
	if (!metas) return;
	for (var i = 0; i < metas.length; i++) {
		if (!metas[i]) return;
		if (metas[i].name.toLowerCase() == meta_name.toLowerCase()) {
			return metas[i].content;
		}
	}
}

function bn_setAttributes(tag){
	var url = bn_getCanonical();
	if(!BaynoteAPI.isNotEmpty(url)){
		url = window.location.href;
	}
	
	var myEntityUpdates = [];
	if (typeof(rec_contentType) != "undefined" && BaynoteAPI.isNotEmpty(rec_contentType)) {
		tag.docAttrs.contentType = rec_contentType;
		myEntityUpdates.push({
			"name":"document",
			"id":url,
			"attr":"contentType",
			"values":[rec_contentType]
		});
	}
    if (typeof(rec_title) != "undefined" && BaynoteAPI.isNotEmpty(rec_title)) {
        tag.docAttrs.title = rec_title;
        myEntityUpdates.push({
			"name":"document",
			"id":url,
			"attr":"title",
			"values":[rec_title]
		});
    }
    if (typeof(rec_category) != "undefined" && BaynoteAPI.isNotEmpty(rec_category)) {
        tag.docAttrs.category = rec_category;
        myEntityUpdates.push({
			"name":"document",
			"id":url,
			"attr":"category",
			"values":[rec_category]
		});
    }
    if (typeof(rec_vcmGuid) != "undefined" && BaynoteAPI.isNotEmpty(rec_vcmGuid)) {
        tag.docAttrs.vgnGuid = rec_vcmGuid;
        myEntityUpdates.push({
			"name":"document",
			"id":url,
			"attr":"vgnGuid",
			"values":[rec_vcmGuid]
		});
    }
    if (typeof(rec_summary) != "undefined" && BaynoteAPI.isNotEmpty(rec_summary)) {
        tag.docAttrs.summary = rec_summary;
        myEntityUpdates.push({
			"name":"document",
			"id":url,
			"attr":"summary",
			"values":[rec_summary]
		});
    }
    if (typeof(rec_thumbnailURL) != "undefined" && BaynoteAPI.isNotEmpty(rec_thumbnailURL)) {
        tag.docAttrs.thumbnailURL = rec_thumbnailURL;
        myEntityUpdates.push({
			"name":"document",
			"id":url,
			"attr":"thumbnailURL",
			"values":[rec_thumbnailURL]
		});
    }
    if (typeof(rec_responsiveThumbnailURL) != "undefined" && BaynoteAPI.isNotEmpty(rec_responsiveThumbnailURL)) {
        tag.docAttrs.LargeThumbnailURL = rec_responsiveThumbnailURL;
        myEntityUpdates.push({
			"name":"document",
			"id":url,
			"attr":"LargeThumbnailURL",
			"values":[rec_responsiveThumbnailURL]
		});
    }
    if (typeof(rec_site) != "undefined" && BaynoteAPI.isNotEmpty(rec_site)) {
        tag.docAttrs.site = rec_site;
        myEntityUpdates.push({
			"name":"document",
			"id":url,
			"attr":"site",
			"values":[rec_site]
		});
    }
    var publishDate = bn_getMeta("afl-publish-date-full");
    if (typeof(publishDate) != "undefined" && BaynoteAPI.isNotEmpty(publishDate)) {
        tag.docAttrs.publishDate = publishDate;
        myEntityUpdates.push({
			"name":"document",
			"id":url,
			"attr":"publishDate",
			"values":[publishDate]
		});
        if (publishDate >= getTargetDate(3)) {
        	myEntityUpdates.push({
    			"name":"document",
    			"id":url,
    			"attr":"recentContent",
    			"values":["yes"]
    		});
        }
        else {
        	myEntityUpdates.push({
    			"name":"document",
    			"id":url,
    			"attr":"recentContent",
    			"values":["no"]
    		});
        }
    }
    bnObserver.myTag = bnObserver.myTag || tag;
	bnObserver.soEnabled = true;
    bnObserver.registerEntityUpdates(myEntityUpdates);
}

function getTimeString(date){
	var publishDate = date;
	var year = publishDate.substring(0,4);
	var month = publishDate.substring(5,7);
	var date = publishDate.substring(8,10);
	var hour = publishDate.substring(11,13);
	var minute = publishDate.substring(14,16);
	var monthArray = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var dateString = monthArray[parseInt(month)] + " " + parseInt(date) + ", " + year;
	var time;
	if (hour > 12){
		if (hour < 22){
			time = "0" + (hour - 12) + ":" + minute + "pm";
		} else {
			time = (hour - 12) + ":" + minute + "pm";
		}
	}
	else {
	  time = hour + ":" + minute + "am";
	}
	return time + " " + dateString;
}

function getTargetDate(target){
	var d = new Date();
	d.setDate(d.getDate() - target);
	var year = d.getFullYear();
	var month = d.getMonth()+1;
	if (month < 10){
		month = "0" + month;
	}
	var date = d.getDate();
	if (date < 10){
		date = "0" + date;
	}
	return year + "-" + month + "-" + date;
}

function ArticleRec(widget){
	var widgetName, displayName, placeholderName;
	widgetName = widget.name;
	displayName = widget.displayName;
	placeholderName = widget.placeholderName;
	
	// String contains HTML of individual rec item
	var recItem = '';
	
	var recData = widget.recData;
	for (var i = 0; i < recData.length; i++) {
		var slot = '';
		var url = '';
		var publishDate = '';
		var title = '';
		var summary = '';
		var thumbnailURL = '';
		var vgnGuid = '';
		slot = recData[i].slot;
		url = recData[i].url;
		var attrs = recData[i].attrs;
		for (var j = 0; j < attrs.length; j++) {
			switch (attrs[j].name) {
				case "publishDate":
					publishDate = attrs[j].values[0];
					break;
				case "title":
					title = attrs[j].values[0];
					break;
				case "summary":
					summary = attrs[j].values[0];
					break;
				case "thumbnailURL":
					thumbnailURL = attrs[j].values[0];
					break;
				case "vgnGuid":
					vgnGuid = attrs[j].values[0];
					break;
			}
		}
		var listName = "list-item";
		if (i == recData.length - 1){
			listName = "list-item last";
		}
		
		recItem += '<div id="bn_g_result_'+widgetName+'_'+slot+'" class="'+listName+'">';
		
		if (BaynoteAPI.isNotEmpty(thumbnailURL)){
			recItem += '<div class="img-holder"><a data-baynote="'+widgetName+'_'+slot+'" data-baynote-pid="'+vgnGuid+'" title="'+title+'" href="'+url+'"><img src="'+thumbnailURL+'" alt="'+title+'"></img></a><div class="play-btn"><a data-baynote="'+widgetName+'_'+slot+'" data-baynote-pid="'+vgnGuid+'" title="'+title+'" href="'+url+'"></a></div></div>';
		} else {
			recItem += '<div class="img-holder" style="width:72px;">&nbsp;</div>';
		}
		recItem += '<div class="inner"><h4><a data-baynote="'+widgetName+'_'+slot+'" data-baynote-pid="'+vgnGuid+'" title="'+title+'" href="'+url+'">'+title+'</a></h4><p>'+summary+'</p><p class="pubdate">'+getTimeString(publishDate)+'</p></div></div>';
	}
	
	if (document.getElementById(placeholderName)){
		document.getElementById(placeholderName).innerHTML = '<div id="bn_guidecontainer_'+widgetName+'" class="segment"><h3 id="bn_guidewelcome_'+widgetName+'" class="section-header bare">'+displayName+'</h3><div class="content">'+recItem+'</div></div>';
	}
}

function VideoRec(widget){
	var widgetName, displayName, placeholderName;
	widgetName = widget.name;
	displayName = widget.displayName;
	placeholderName = widget.placeholderName;
	
	// String contains HTML of individual rec item
	var recItem = '';
	
	var recData = widget.recData;
	for (var i = 0; i < recData.length; i++) {
		var slot = '';
		var url = '';
		var publishDate = '';
		var title = '';
		var summary = '';
		var thumbnailURL = '';
		var vgnGuid = '';
		slot = recData[i].slot;
		url = recData[i].url;
		var attrs = recData[i].attrs;
		for (var j = 0; j < attrs.length; j++) {
			switch (attrs[j].name) {
				case "publishDate":
					publishDate = attrs[j].values[0];
					break;
				case "title":
					title = attrs[j].values[0];
					break;
				case "summary":
					summary = attrs[j].values[0];
					break;
				case "thumbnailURL":
					thumbnailURL = attrs[j].values[0];
					break;
				case "vgnGuid":
					vgnGuid = attrs[j].values[0];
					break;
			}
		}
		var listName = "list-item vidlist";
		if (i == recData.length - 1){
			listName = "list-item vidlist last";
		}
		
		recItem += '<div id="bn_g_result_'+widgetName+'_'+slot+'" class="'+listName+'">';
		
		if (BaynoteAPI.isNotEmpty(thumbnailURL)){
			recItem += '<div class="video-link img-holder"><a data-baynote="'+widgetName+'_'+slot+'" data-baynote-pid="'+vgnGuid+'" title="'+title+'" href="'+url+'"><img src="'+thumbnailURL+'" alt="'+title+'"></img></a><div class="play-btn"><a data-baynote="'+widgetName+'_'+slot+'" data-baynote-pid="'+vgnGuid+'" title="'+title+'" href="'+url+'"></a></div></div>';
		} else {
			recItem += '<div class="img-holder" style="width:72px;">&nbsp;</div>';
		}
		recItem += '<div class="inner"><h4><a data-baynote="'+widgetName+'_'+slot+'" data-baynote-pid="'+vgnGuid+'" title="'+title+'" href="'+url+'">'+title+'</a></h4><p>'+summary+'</p><p class="pubdate">'+getTimeString(publishDate)+'</p></div></div>';
	}
	
	if (document.getElementById(placeholderName)){
		document.getElementById(placeholderName).innerHTML = '<div id="bn_guidecontainer_'+widgetName+'" class="segment"><h3 id="bn_guidewelcome_'+widgetName+'" class="section-header bare">'+displayName+'</h3><div class="content">'+recItem+'</div></div>';
	}
}

function VideoCarouselRec(widget){
	var widgetName, displayName, placeholderName;
	widgetName = widget.name;
	displayName = widget.displayName;
	placeholderName = widget.placeholderName;
	
	// String contains HTML of individual rec item
	var recItem = '';
	
	var recData = widget.recData;
	for (var i = 0; i < recData.length; i++) {
		var slot = '';
		var url = '';
		var publishDate = '';
		var title = '';
		var summary = '';
		var thumbnailURL = '';
		var vgnGuid = '';
		slot = recData[i].slot;
		url = recData[i].url;
		var attrs = recData[i].attrs;
		for (var j = 0; j < attrs.length; j++) {
			switch (attrs[j].name) {
				case "publishDate":
					publishDate = attrs[j].values[0];
					break;
				case "title":
					title = attrs[j].values[0];
					break;
				case "summary":
					summary = attrs[j].values[0];
					break;
				case "thumbnailURL":
					thumbnailURL = attrs[j].values[0];
					break;
				case "vgnGuid":
					vgnGuid = attrs[j].values[0];
					break;
			}
		}
		var listName = "list-item vidlist";
		if (i == recData.length - 1){
			listName = "list-item vidlist last";
		}
		
		recItem += '<div id="bn_g_result_'+widgetName+'_'+slot+'" class="'+listName+'">';
		
		if (BaynoteAPI.isNotEmpty(thumbnailURL)){
			recItem += '<div class="video-link img-holder"><a data-baynote="'+widgetName+'_'+slot+'" data-baynote-pid="'+vgnGuid+'" title="'+title+'" href="'+url+'"><img src="'+thumbnailURL+'" alt="'+title+'"></img></a><div class="play-btn"><a data-baynote="'+widgetName+'_'+slot+'" data-baynote-pid="'+vgnGuid+'" title="'+title+'" href="'+url+'"></a></div></div>';
		} else {
			recItem += '<div class="img-holder" style="width:72px;">&nbsp;</div>';
		}
		recItem += '<div class="inner"><h4><a data-baynote="'+widgetName+'_'+slot+'" data-baynote-pid="'+vgnGuid+'" title="'+title+'" href="'+url+'">'+title+'</a></h4><p>'+summary+'</p><p class="pubdate">'+getTimeString(publishDate)+'</p></div></div>';
	}
	
	if (document.getElementById(placeholderName)){
		document.getElementById(placeholderName).innerHTML = '<div id="bn_guidecontainer_'+widgetName+'" class="segment recommended"><h3 id="bn_guidewelcome_'+widgetName+'" class="section-header bare">'+displayName+'</h3><div class="content">'+recItem+'</div></div>';
	}
}

function initThorRecsInjection(){
	var element;
	if (element = document.getElementById("BN_VideoRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_VideoRec");
	}
	if (element = document.getElementById("BN_VideoCarouselRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_VideoCarouselRec");
	}
	if (element = document.getElementById("BN_HawArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_HawArticleRec");
	}
	if (element = document.getElementById("BN_GeelArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_GeelArticleRec");
	}
	if (element = document.getElementById("BN_WceArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_WceArticleRec");
	}
	if (element = document.getElementById("BN_CarlArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_CarlArticleRec");
	}
	if (element = document.getElementById("BN_CollArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_CollArticleRec");
	}
	if (element = document.getElementById("BN_WbArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_WbArticleRec");
	}
	if (element = document.getElementById("BN_StkArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_StkArticleRec");
	}
	if (element = document.getElementById("BN_SydArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_SydArticleRec");
	}
	if (element = document.getElementById("BN_MelbArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_MelbArticleRec");
	}
	if (element = document.getElementById("BN_BlArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_BlArticleRec");
	}
	if (element = document.getElementById("BN_PortArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_PortArticleRec");
	}
	if (element = document.getElementById("BN_AdelArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_AdelArticleRec");
	}
	if (element = document.getElementById("BN_GwsArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_GwsArticleRec");
	}
	if (element = document.getElementById("BN_EssArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_EssArticleRec");
	}
	if (element = document.getElementById("BN_FreArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_FreArticleRec");
	}
	if (element = document.getElementById("BN_GcfcArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_GcfcArticleRec");
	}
	if (element = document.getElementById("BN_NmfcArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_NmfcArticleRec");
	}
	if (element = document.getElementById("BN_RichArticleRec")) {
	    element.setAttribute("data-baynote-page-template", "PT_RichArticleRec");
	}
	
	var requestDefinedAttrs = [];
	requestDefinedAttrs.push({"entityName":"Context","attrName":"targetDate","attrValue":getTargetDate(2)});
	
	if (BNThor.getInjectPolicy() === BNThor.Constants.THOR_INJECT_POLICY) {
		BNThor.retrieveRenderingContext({
			successFn:function(context){
				console.log("Success:", context);
				window.BNData = context.rawResponse.trackingData;
				var widgets = context.widgets || [];
				for (var i= 0; i < widgets.length; i++) {
					if (widgets[i].name == "VideoRec") {
						VideoRec(widgets[i]);
					} else if (widgets[i].name == "VideoCarouselRec") {
						VideoCarouselRec(widgets[i]);
					} else {
						ArticleRec(widgets[i]);
					}
				}
				bnObserver.impressionOccurred();
			},
			errorFn:function(err){
				console.log("Error:", err);
			},
			attrs:["publishDate", "title", "summary", "thumbnailURL", "vgnGuid"],
			requestDefinedAttrs:requestDefinedAttrs,
			visitstrail:[]
		});
	}
}

function myPreHandler(tag) { 

	if (typeof tag != 'undefined' &&  typeof tag.type != 'undefined' && tag.type==bnConstants.OBSERVER_TAG)   {	
		
		bn_setAttributes(tag);
		var url = bn_getCanonical();
		if(BaynoteAPI.isNotEmpty(url)){
			tag.url = url;
		}
		
		if (useThorRecs()) {
			initThorRecsInjection();
		}
	} 
	
	if (typeof tag != 'undefined' &&  typeof tag.type != 'undefined' && tag.type==bnConstants.GUIDE_TAG)   {	
		
		var url = bn_getCanonical();
		if(BaynoteAPI.isNotEmpty(url)){
			tag.url = url;
		}
		
	}

    return true;      
} 

function myPostHandler(tag) {

	return true;
}

function useThorRecs() {
    return true;
}

// if the page is a staging environment, use thor for injection
if (useThorRecs()) {
    BNThor.setInjectPolicy(BNThor.Constants.THOR_INJECT_POLICY);
}
// otherwise, use IC
else {
    BNThor.setInjectPolicy(BNThor.Constants.IC_INJECT_POLICY);
}


   // register the event handler
baynote_globals.onBeforeTagShow.push(myPreHandler);
baynote_globals.onTagShow.push(myPostHandler); 
bnResourceManager.registerResource(baynote_globals.ScriptResourceId); 