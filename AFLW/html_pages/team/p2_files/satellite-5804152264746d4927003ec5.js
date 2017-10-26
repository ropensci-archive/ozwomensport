window.additionalEmbed = function(videoPlayer) 
{
  additionalEmbedV4(videoPlayer,"OO");
}
 
window.additionalEmbedV4 = function(videoPlayer, ns) 
	{
		concatMetaData = function(metadataBase)
		{
			var returnMe = '';
			for(val in metadataBase)
			{
				returnMe += val + '|';
				returnMe += metadataBase[val] + '|';
			}
			return returnMe;
		}
		
		initialize = function(vp, ns)
		{
			vp.adFinished =  true;
			vp.videoPlaying = false;
			vp.videoOpen = false;
			vp.videoPlayStart = 0;
			vp.videoPlayheadTime;
			vp.videoScrubbed = false;
			vp.videoPrimaryTimingGranularity = 60;
			vp.videoSecondaryTimingGranularity = 5*60;
			vp.videoSecondaryTimingPoint = 5*60;
			vp.videoSecondaryTimingActive = false;
			vp.videoType = 'VOD:';
			vp.videoMetaDataFetched = false;
			vp.videoDuration = undefined;
			vp.videoTitle = undefined;
			vp.adStartTime = 0;
			vp.vmsID = undefined;
			if(typeof s !== 'undefined') s.Media.trackMilestones="25,50,75";
			vp.metadata = undefined;
			vp.videons = ns;
		}

		initialize(videoPlayer, ns);
		
		trackSeconds = function( seconds, player )
		{
			player.videoType = 'STREAM:';
			s.Media.trackSeconds = seconds;					
		};
		
		trackMediaOpen = function( videoTitle, videoDuration, player )
		{
			if (player.vmsID === undefined ) player.vmsID = videoTitle = player.getItem().external_id || player.getItem().title;
      
      _satellite.notify('*****trackMediaOpen( ' + player.videoType + videoTitle + ', ' + videoDuration + ') videoOpen:' +!player.videoOpen);
			
			if( !player.videoOpen )
			{
				/*if( !player.videoMetaDataFetched )
				{
					player.mb.publish(window[player.videons].EVENTS.WILL_FETCH_METADATA);
				}*/
				
				videoTitle = typeof videoTitle === 'undefined' ? '<undefined videoTitle>' : videoTitle;
				
				if( typeof player.videoDuration !== 'undefined' )
				{
					videoDuration = player.videoDuration;
				}
				videoDuration = (typeof videoDuration === 'undefined' || videoDuration < 1 ) ? -1 : videoDuration;
				
				if( videoDuration < 0 )
				{
					trackSeconds( player.videoPrimaryTimingGranularity, player );
					player.videoTimeTracked = Math.floor( new Date().getTime() / 1000 );
				}
				setTimeout(function(){ 
					_satellite.notify('timeout->*****trackMediaOpen( ' + player.videoType + videoTitle + ', ' + videoDuration + ')');
					s.Media.open( player.videoType + videoTitle, videoDuration, 'Ooyala');
          s.eVar63 = player.getTitle();

				},0 );
				player.videoOpen = true;
				player.videoTitle = videoTitle;
			}
		};
		
		trackMediaPlay = function( videoTitle, videoPlayPosition, player )
		{
			if (player.vmsID === undefined ) player.vmsID = videoTitle = player.getItem().external_id || player.getItem().title;

			_satellite.notify('*****trackMediaPlay( ' +player.videoType +  videoTitle + ', ' + videoPlayPosition + ' -> )'+!player.videoPlaying);
			if(!player.videoPlaying )
			{
				trackMediaOpen( videoTitle, player.videoDuration, player );
				videoTitle = typeof videoTitle == 'undefined' ? '<undefined videoTitle>' : videoTitle ;
				if(videoPlayPosition >= player.getDuration() - 1 )
				{
					videoPlayPosition = 0;
					player.videoPlayStart = 0;
				}
				videoPlayPosition = typeof videoPlayPosition == 'undefined' ? player.videoPlayStart : Math.floor(videoPlayPosition) ;							
				setTimeout(function(){ 
					s.Media.play( player.videoType + videoTitle , videoPlayPosition );
				},0 );
				player.videoPlaying = true;
			}							
		};
		
		trackMediaStop = function( videoTitle, videoStopPosition, player )
		{

			if( player.videoOpen && player.videoPlaying )
			{
				videoTitle = typeof videoTitle === 'undefined' ? '<undefined videoTitle>' : videoTitle ;
				videoStopPosition = typeof videoStopPosition === 'undefined' ? player.videoPlayStart : videoStopPosition ;
				setTimeout(function(){ 
					_satellite.notify('*****trackMediaStop( ' + player.videoType + videoTitle + ', ' + videoStopPosition + ')');
					s.Media.stop( player.videoType + videoTitle , videoStopPosition );
				},0 );
				player.videoPlaying = false;
				player.videoPlayStart = videoStopPosition;
			}
		};
		
		trackMediaClose = function( videoTitle, player )
		{
			if( player.videoOpen )
			{
				videoTitle = typeof videoTitle === 'undefined' ? '<undefined videoTitle>' : videoTitle ;
				trackMediaStop( videoTitle, player.getPlayheadTime(), player );								
				setTimeout(function(){ 
					_satellite.notify('*****trackMediaClose( ' + player.videoType + videoTitle + ')');
					s.Media.close( player.videoType + videoTitle );
				},0 );
				initialize(player, player.videons);
			}
			
		};

		videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.PLAYED, 'TelstraMedia', 
		function(eventName) {
			trackMediaClose( videoPlayer.vmsID, videoPlayer );
		});
		videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.PLAYING, 'TelstraMedia', 
		function(eventName) {
			_satellite.notify("[EVENTS.PLAYING->+++++"+videoPlayer.videons+"] "+videoPlayer.vmsID+" PLAYING-> adfinish:"+videoPlayer.adFinished);
			if (videoPlayer.adFinished == true) {
			trackMediaPlay( videoPlayer.vmsID, typeof videoPlayer.adStartTime !== 'undefined' && videoPlayer.adStartTime > -1 ? videoPlayer.adStartTime : videoPlayer.getPlayheadTime(), videoPlayer );
			videoPlayer.adStartTime = -1;
			}
		});
		//////////// HTML5 player events to mimic flash player event ordering ///////////

		/*videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.PLAY, 'TelstraMedia', 
		function(eventName) {
			_satellite.notify("[*****"+videoPlayer.videons+"] "+videoPlayer.vmsID+" PLAY, "+videoPlayer.adStartTime);
			trackMediaPlay( videoPlayer.vmsID, typeof videoPlayer.adStartTime !== 'undefined' && videoPlayer.adStartTime > -1 ? videoPlayer.adStartTime : videoPlayer.getPlayheadTime(), videoPlayer );
			
			videoPlayer.adStartTime = -1;
		});
		videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.PLAY_STREAM, 'TelstraMedia', 
		function(eventName) {
			_satellite.notify("[*****"+videoPlayer.videons+"] "+videoPlayer.vmsID+" PLAY_STREAM, "+videoPlayer.adStartTime+","+videoPlayer.getPlayHeadTime());
			trackMediaPlay( videoPlayer.vmsID, typeof videoPlayer.adStartTime !== 'undefined' && videoPlayer.adStartTime > -1 ? videoPlayer.adStartTime : videoPlayer.getPlayheadTime(), videoPlayer );
			
			videoPlayer.adStartTime = -1;
		});

		videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.WILL_PLAY_STREAM, 'TelstraMedia', 
		function(eventName) {
			_satellite.notify("[*****"+videoPlayer.videons+"] "+videoPlayer.vmsID+" WILL_PLAY_STREAM, "+videoPlayer.adStartTime+","+videoPlayer.getPlayHeadTime());
			trackMediaPlay( videoPlayer.vmsID, typeof videoPlayer.adStartTime !== 'undefined' && videoPlayer.adStartTime > -1 ? videoPlayer.adStartTime : videoPlayer.getPlayheadTime(), videoPlayer );
			
			videoPlayer.adStartTime = -1;
		});*/

		////////////////////////////// END //////////////////////////////////////////////
		
		videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.PAUSED, 'TelstraMedia', 
		function(eventName, metadata) {
			trackMediaStop( typeof videoPlayer.videoTitle !== 'undefined' ? videoPlayer.videoTitle : videoPlayer.vmsID, videoPlayer.getPlayheadTime(), videoPlayer );
		});	
				
			videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.PLAYBACK_READY, 'TelstraMedia', 
		function(eventName, arg1, arg2, arg3) {
			_satellite.notify('*****PLAYBACK_READY videoplay start VMSID :' +  videoPlayer.getItem().external_id || videoPlayer.getItem().title);
			
			var playHeadTime = typeof videoPlayer.getPlayheadTime() !== 'undefined' ? videoPlayer.getPlayheadTime() : arg1 ;
			
			if(typeof arg1 === 'undefined' )
			{
				videoPlayer.videoDuration = videoPlayer.getItem().duration/1e3;
				    videoPlayer.vmsID = videoPlayer.getItem().external_id || videoPlayer.getItem().title;

        		if( !videoPlayer.videoMetaDataFetched ){
					videoPlayer.mb.publish(window[videoPlayer.videons].EVENTS.WILL_FETCH_METADATA);
				}else {
        		setTimeout(function(){ trackMediaOpen( videoPlayer.vmsID, videoPlayer.videoDuration, videoPlayer ); },1 );
        		}
			}
			
			if( videoPlayer.videoPlaying )
			{
				if( !videoPlayer.videoSecondaryTimingActive )
				{					
					var currentTime = Math.floor( new Date().getTime() / 1000 );
					if( typeof videoPlayer.videoTimeTracked !== 'undefined' && currentTime - videoPlayer.videoTimeTracked > videoPlayer.videoSecondaryTimingPoint )
					{
						trackSeconds( videoPlayer.videoSecondaryTimingGranularity, videoPlayer );
						videoPlayer.videoSecondaryTimingActive = true;
					}						
				}
				s.eVar64 = '' + Math.floor( playHeadTime / (videoPlayer.videoSecondaryTimingActive ? videoPlayer.videoPrimaryTimingGranularity : videoPlayer.videoPrimaryTimingGranularity) ) * (videoPlayer.videoSecondaryTimingActive ? videoPlayer.videoPrimaryTimingGranularity : videoPlayer.videoPrimaryTimingGranularity);				
			}
		});


		videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.PLAYHEAD_TIME_CHANGED, 'TelstraMedia', 
		function(eventName, arg1, arg2, arg3) {
			
			if(typeof videoPlayer.videoDuration === 'undefined' )
			{
				videoPlayer.videoDuration = videoPlayer.getItem().duration/1e3;
			}
		});
	


		videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.METADATA_FETCHED, 'TelstraMedia', 
		function(eventName, metadata) {
      _satellite.notify("[*****metadataFetched]");
			videoPlayer.metadata = metadata;
			s.contextData['metaData'] = concatMetaData(metadata.base);
			s.contextData['channelname'] = videoPlayer.metadata.base.ChannelName;
			s.contextData['channelname'] = concatMetaData(metadata.base);
			// s.contextData['classification'] = videoPlayer.metadata.base.Classification;
			// s.contextData['contentprovider'] = videoPlayer.metadata.base.ContentProvider;
			// s.contextData['collection'] = videoPlayer.metadata.base.Collection;
			// s.contextData['aspectratio'] = videoPlayer.metadata.base.AspectRatio;
			// s.contextData['site'] = videoPlayer.metadata.base.Site;
			// s.contextData['drmprotected'] = videoPlayer.metadata.base.DRMProtected;
			s.contextData['videoURL'] = window.location.toString();
			videoPlayer.vmsID = videoPlayer.getItem().external_id || videoPlayer.getItem().title;
			videoPlayer.videoMetaDataFetched = true;
		});
		
		videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.WILL_PLAY_ADS, 'TelstraMedia', 
		function(eventName) {
			_satellite.notify("[*****"+videoPlayer.videons+"] "+videoPlayer.vmsID+" WILL_PLAY_ADS : videoPlaying ->"+videoPlayer.videoPlaying);
			videoPlayer.adFinished=false;
			if(videoPlayer.videoPlaying)
			{
				videoPlayer.adStartTime = typeof videoPlayer.getPlayheadTime() === 'undefined' ? 0 : videoPlayer.getPlayheadTime();
				trackMediaStop(videoPlayer.vmsID , videoPlayer.adStartTime, videoPlayer);	
			}
		});

		videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.ADS_PLAYED, 'TelstraMedia', 
		function(eventName) {
			_satellite.notify("[*****"+videoPlayer.videons+"] "+videoPlayer.vmsID+" ADS_PLAYED->"+videoPlayer.videoPlaying);
			if( videoPlayer.adStartTime > -1 && videoPlayer.videoPlaying)
			{
				trackMediaPlay(videoPlayer.vmsID , videoPlayer.adStartTime, videoPlayer);
			}
			videoPlayer.adStartTime = -1;
			videoPlayer.adFinished=true;
		});

		videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.EMBED_CODE_CHANGED, 'TelstraMedia', 
		function(eventName, payload) {
			//if(typeof payload === 'object')
			//{
				//hack for flash player as metadata is missing if video is played from discovery
				if( !videoPlayer.videoMetaDataFetched && typeof videoPlayer.item.time !== 'undefined' )
				{
					player.mb.publish(window[videoPlayer.videons].EVENTS.WILL_FETCH_METADATA);
				}
				if( typeof videoPlayer.videoTitle !== 'undefined' )
				{
					trackMediaClose(videoPlayer.videoTitle, videoPlayer);
					initialize(videoPlayer, videoPlayer.videons);
				}
			//}
		});

		videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.INITIAL_PLAY, 'TelstraMedia', 
		function(eventName, payload) {
		if( !videoPlayer.videoOpen )
			{
				if( !videoPlayer.videoMetaDataFetched )
				{
					videoPlayer.mb.publish(window[videoPlayer.videons].EVENTS.WILL_FETCH_METADATA);
				}
			}
		});
		
		/*videoPlayer.mb.subscribe(window[videoPlayer.videons].EVENTS.ADS_CLICKED, 'TelstraMedia', 
		function(eventName, payload) {
			if(eventName === 'adsClicked')
			{
				s.contextData['adsClicked'] = window.location.toString();
			}
		});*/
		
		// Logs all player events to view differences between HTML5 and flash player events
		videoPlayer.mb.subscribe("*", 'TelstraMedia', 
		function(eventName) {
			_satellite.notify("Event: "+eventName);
		});
			
	};
