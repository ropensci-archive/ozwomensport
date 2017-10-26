if (/afl\.com\.au/i.test(location.hostname) && !(/True/i.test(_satellite.readCookie("darkLaunchOffer")))){


$(document.body).on('click','.match-status, .partial--ticketing__details',function(e){
  trackFinalsLinks(e.target.parentElement.search || e.target.search, e.target.parentElement.href || e.target.href, "");
});
 

  
function trackFinalsLinks(regionName, linkURL, linkName) {
  _satellite.notify("regionName: " + regionName + " -> linkURL: " + linkURL + " linkName:" + linkName);
    if (typeof s != 'undefined') {
        s.linkTrackVars = 'events,channel,prop1,eVar1,prop2,eVar2,prop3,eVar3,prop4,eVar5,eVar19,prop11,eVar9,prop19';
        s.linkTrackEvents = 'event9';
        s.events = 'event9';
      	s.eVar9 = regionName && regionName.replace(/\?sh=/i, '') || linkURL&&linkURL.replace(/.*\//i,'');  
        s.prop11 = 'D=pageName';
        s.eVar19 = linkURL;
        s.tl(true,'o', "Finals-link");
        s.linkTrackEvents= "";
        s.events = '';
        //e.preventDefault();
    }
}

function trackFinalsNav(regionName, linkURL, linkName) {
  _satellite.notify("regionName: " + regionName + " -> linkURL: " + linkURL + " linkName:" + linkName);
    if (typeof s != 'undefined') {
        s.linkTrackVars = 'channel,prop1,eVar1,prop2,eVar2,prop3,eVar3,prop4,eVar5,eVar19,prop11,eVar9,prop19';
       	//s.eVar9 = regionName; 
        s.prop11 = 'D=pageName';
        s.prop19 = regionName +"|"+linkName;
        s.eVar19 = linkURL;
        s.tl(true,'o', "Navigation-link");
        //e.preventDefault();
    }
}
  
//Finals click
$(document.body).on('click', '.partial--ticketing__promos-layout__left:eq(1)', function() {
    var regionName = $(this).attr('data-insights-region');
    var linkName = $(this).find('span.c-news-feed__list-item-link').text()||$(this).find('.button--dark').text();
    if (typeof linkName == 'string') linkName = linkName.trim();
    //var linkURL = $(this).attr('href') || $(this).find('.partial--ticketing__tagline').attr('href');
   var linkURL = $(this).find('.partial--ticketing__tagline').attr('href');
    trackFinalsNav(regionName,linkURL, linkName);
});

  
//Navigation
$(document.body).on('click', '[data-insights-region="Finals top navigation"] li a', function() {
    var regionName ='Finals top navigation';
    var linkName = $(this).text();
  	if (typeof linkName == 'string') {
        linkName = linkName.trim();
  	}
    var linkURL = $(this)[0].baseURI;
    trackFinalsNav(regionName, linkURL,linkName)
});
//Finals tile
$(document.body).on('click', '.finalsfeature', function() {
    var regionName ='Finals tile';
    var linkName = $(this).find('h5').text();
     	if (typeof linkName == 'string') {
        linkName = linkName.trim();
  	}
    var linkURL = $(this).attr('onclick').split("=")[1];
    trackFinalsNav(regionName, linkURL,linkName);

});
}

