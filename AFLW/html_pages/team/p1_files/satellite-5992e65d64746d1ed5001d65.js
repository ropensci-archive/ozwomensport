if((/sandpit001/i.test(location.hostname) || 
    /build001/i.test(location.hostname) || 
    /afl\.com\.au/i.test(location.hostname))  &&  
    (/news/i.test(location.pathname) || 
     /video/i.test(location.pathname)) && 
     (/Repeat/i.test(_satellite.readCookie("s_nr")) || 
     (/s_nr\=/i.test(document.location.search)) ) && 
     _satellite.getVar('traffic_bucket') <= 10){
	_satellite.notify('***darkLaunchOffer set cookie');
  _satellite.setCookie("darkLaunchOffer","true",365);
}


