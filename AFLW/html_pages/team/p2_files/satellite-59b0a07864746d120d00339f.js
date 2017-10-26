_satellite.pushAsyncScript(function(event, target, $variables){
  if (/afl\.com\.au/i.test(location.hostname) && !(/True/i.test(_satellite.readCookie("darkLaunchOffer")))){
  $(document).ready(function(){
    $('.tmhf-afl').on('click', '.oo-icon-system-minimizescreen', function() {
          _satellite.notify("Video Fullscreen");
          s.linkTrackVars='events';
          s.linkTrackEvents='event49';
          s.events='event49';
          s.tl(true,'o', "fullscreen");
    });
  });
}
});
