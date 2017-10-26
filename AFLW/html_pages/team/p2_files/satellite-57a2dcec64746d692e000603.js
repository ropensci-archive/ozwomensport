if(_satellite.getVar('tmh')("afl.com.au")){
    var _sf_startpt=(new Date()).getTime()
     var _sf_async_config={};
    /** CONFIGURATION START **/
    _sf_async_config.uid = 59397;
    _sf_async_config.domain = 'afl.com.au';
    _sf_async_config.useCanonical = true;
    _sf_async_config.videoType = 'ooyala';
    _sf_async_config.sections = window.location.pathname.replace(/^\/(.*).html/, "$1");
    _sf_async_config.authors = '';    //CHANGE THIS
    /** CONFIGURATION END **/
   (function(){
      function loadChartbeat() {
        window._sf_endpt=(new Date()).getTime();
        var e = document.createElement('script');
        e.setAttribute('language', 'javascript');
        e.setAttribute('type', 'text/javascript');
        e.setAttribute('src', '//static.chartbeat.com/js/chartbeat_video.js');
        document.body.appendChild(e);
      }
      var oldonload = window.onload;
      window.onload = (typeof window.onload != 'function') ?
         loadChartbeat : function() { oldonload(); loadChartbeat(); };
     })();
  }


