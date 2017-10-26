try { 
  
  var pageTracker = _gat._getTracker(getGoogleAcct());
  
  pageTracker._trackPageview();
} catch(err) {}
  
function getGoogleAcct() {
    var hostname = window.location.hostname.replace(/^(www\.|m\.)/,'');
    
    aflSitesArray = new Object();
    aflSitesArray['afl.com.au']             = 'UA-12150804-1';
    aflSitesArray['afc.com.au']             = 'UA-12150804-2';
    aflSitesArray['lions.com.au']           = 'UA-12150804-3';
    aflSitesArray['carltonfc.com.au']       = 'UA-12150804-4';
    aflSitesArray['collingwoodfc.com.au']   = 'UA-12150804-5';
    aflSitesArray['essendonfc.com.au']      = 'UA-13190527-1';
    aflSitesArray['fremantlefc.com.au']     = 'UA-12150804-7';
    aflSitesArray['geelongcats.com.au']     = 'UA-12150804-8';
    aflSitesArray['goldcoastfc.com.au']     = 'UA-12829069-1';
    aflSitesArray['gwsgiants.com.au']       = 'UA-12150804-18'; 
    aflSitesArray['hawthornfc.com.au']      = 'UA-12150804-9';
    aflSitesArray['melbournefc.com.au']     = 'UA-12150804-10';
    aflSitesArray['nmfc.com.au']            = 'UA-12150804-11';
    aflSitesArray['kangaroos.com.au']       = 'UA-12150804-11';
    aflSitesArray['portadelaidefc.com.au']  = 'UA-12150804-12';
    aflSitesArray['richmondfc.com.au']      = 'UA-12150804-13';
    aflSitesArray['saints.com.au']          = 'UA-12150804-14';
    aflSitesArray['sydneyswans.com.au']     = 'UA-12150804-15';
    aflSitesArray['westcoasteagles.com.au'] = 'UA-12150804-16';
    aflSitesArray['westernbulldogs.com.au'] = 'UA-12150804-17';
    
        
    if(aflSitesArray[hostname]) {
      return aflSitesArray[hostname];
    } else {
      return '';
    }
}

