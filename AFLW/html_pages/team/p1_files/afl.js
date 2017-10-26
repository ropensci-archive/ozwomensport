 
 
 var amf=_mcn.amf;
  //Devicecheck
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ||
    (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.platform))) {
    //mobile
    if (amf.tag("device")) {
        amf.tag("device").value("Mobile");

    } else {
        amf.targeting("device", "Mobile");
    }
    }
if (document.location.href.indexOf("?google-backdrop-test") != -1) {
  document.querySelector(".c-site-nav__primary.js-burger-menu-fill-below-target").setAttribute("data-goog-bkdp-hdr","");
  amf.targeting("keyword", "googskin");
  var googSkin = top.document.createElement("script");
  googSkin.src = "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/backdrop/resources/content_binder.js";
  top.document.body.appendChild(googSkin);
}
//SAS Code
var sasCode = top.document.createElement("script");
sasCode.setAttribute("id", "ob-script-async");
sasCode.setAttribute("a", "b2ab3642f400013b99abb496");
sasCode.setAttribute("src", "https://execution-euw.ci360.sas.com:443/js/ot_boot-min.js");
sasCode.setAttribute("type", "text/javascript");
var firstScript = top.document.getElementsByTagName("script")[0];
firstScript.parentNode.insertBefore(sasCode, firstScript);

///////// P.L tagging hack for web portal pages in mobile apps.
if(_mcn.amf.tag("device")&&_mcn.amf.tag("device").value()=="Mobile"&&document.location.href.indexOf("fantasy.afl.com") === -1){


//Footer leader switch to mobile banner
	if(_mcn.amf.ad('id','mcn-728901')){
			_mcn.amf.ad('id','mcn-728901').size("300x50, 320x50");
	};

	if(document.location.href.indexOf(".mobileapp") != -1){
		if (/Android/i.test(navigator.userAgent) || (/Android/i.test(navigator.platform))) {
		    	_mcn.amf.initialise("app.android.afl","$");
		} else if (/webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) || (/webOS|iPhone|iPad|iPod/i.test(navigator.platform))) {
		    	_mcn.amf.initialise("app.ios.afl","$");
		}
	} else {
		_mcn.amf.initialise("TEL.MOB.AFL","$");
	}
 }else{
 _mcn.amf.initialise("TEL.AFL", "$");
    if ((document.location.href.indexOf("fantasy.afl") == -1) && (document.location.href.indexOf("tipping.afl") == -1)) {

        if (_mcn.amf.tag("pagetype") && _mcn.amf.tag("pagetype").value().indexOf("responsive") !== -1) {} else {
            _mcn.amf.skin();
            if( (document.location.href.indexOf("goaloftheyear.afl") != -1) ){
	            _mcn.skinConfig = {
	                pageContainer: document.querySelector("body > div.page.wrapper"),
	                contentWidth: 980,
	                contentTop: 298,
	                setBackground: function(picPath, bgColour, fixed) {
	                    top.document.body.setAttribute('style', 'background-image:url(' + picPath + ') !important;' + (bgColour ? 'background-color: ' + bgColour + ' !important;' : '') + ' background-position: center  0!important;background-repeat: no-repeat !important;' + (fixed ? 'background-attachment: fixed;' : ''));
	                }
	            }
	        }else{
	            _mcn.skinConfig = {
	                pageContainer: document.querySelector("body > div.page.wrapper"),
	                contentWidth: 940,
	                contentTop: 295,
	                setBackground: function(picPath, bgColour, fixed) {
	                    top.document.body.setAttribute('style', 'background-image:url(' + picPath + ') !important;' + (bgColour ? 'background-color: ' + bgColour + ' !important;' : '') + ' background-position: center  0!important;background-repeat: no-repeat !important;' + (fixed ? 'background-attachment: fixed;' : ''));
	                }
	            }	        	
            if (top.document.location.host.indexOf("markoftheyear.afl") != -1) {
              _mcn.skinConfig.pageContainer = top.document.querySelector("div.content-container");
            } else if (top.document.location.host.indexOf("allaustralian.afl") != -1) {
              console.log("boom sizzle");
              _mcn.skinConfig = {
                pageContainer: top.document.getElementById("game"),
                contentWidth: 980,
                contentTop: 292
              };
            }
	        }
        };
    } else if (document.location.href.indexOf("tipping.afl") != -1) {
      _mcn.skinConfig = {
        pageContainer: document.querySelector("div.wrapper div.content") || document.querySelector(".wrapper > div.ng-scope"),
        widthContainer: document.querySelector("div.afl-tipping-container"),
        containerOffsetWidth: 40,
        containerOffsetTop: 20,
        contentWidth: 1130,
        contentTop: 259
        }
    } else if (document.location.href.indexOf("fantasy.afl") != -1) {
      _mcn.skinConfig = {
        topPosContainer: top.document.querySelector(".match-centre-gamebar"),
        pageContainer: top.document.querySelector("body > .main.wrapper"),
        containerOffsetWidth: 20,
        contentWidth: 997,
        containerOffsetTop: 9
      }
    }
  }
 
 //add area fantasy for fantasy losing area issue
 if(document.location.href.indexOf("fantasy.afl.com.au") != -1){
 	if(_mcn.amf.tag("area") == false && document.location.href.indexOf("fantasy.afl.com.au/help") == -1){
 		amf.targeting("area","Fantasy");
 	}
 }
 
if (_mcn.amf.tag("area") && (_mcn.amf.tag("area").value().indexOf("HOME") === -1) && (_mcn.amf.tag("area").value().indexOf("Tipping") === -1) && (_mcn.amf.tag("area").value().indexOf("Fantasy") === -1 )){
	if(amf.ad('id','mcn-3002501')){
		amf.ad('id','mcn-3002501').size("300x250,300x600");
	};
}

if (_mcn.amf.tag("area") && (_mcn.amf.tag("area").value().indexOf("HOME") != -1)) {
	//set new sizes on ad slots - richard.abao@mcn.com.au, 13 May 2016 
	if(amf.ad('id','mcn-9702501')){
		amf.ad('id','mcn-9702501').size("970x250,980x250,980x40");
	}
}

if (_mcn.amf.tag("area") && ((_mcn.amf.tag("area").value().indexOf("bogeymen") !== -1 ) || document.title.indexOf("bogeymen")!==-1)){
	amf.targeting("keyword","bogeymen");
};

if (_mcn.amf.tag("area") && ((_mcn.amf.tag("area").value().indexOf("In_the_mix") !== -1 ) || document.title.indexOf("In the mix")!==-1)){
	amf.targeting("keyword","inthemix");
};

if (_mcn.amf.tag("area") && ((_mcn.amf.tag("area").value().indexOf("Sliding_Doors") !== -1 ) || document.title.indexOf("Sliding doors")!==-1)){
	amf.targeting("keyword","slidingdoors");
};

if (_mcn.amf.tag("area") && ((_mcn.amf.tag("area").value().indexOf("After_the_Siren") !== -1 ) || document.title.indexOf("After the siren")!==-1)){
	amf.targeting("keyword","afterthesiren");
};

if (_mcn.amf.tag("area") && ((_mcn.amf.tag("area").value().indexOf("The_Stats_Files") !== -1 ) || document.title.indexOf("The stats files")!==-1)){
	amf.targeting("keyword","thestatsfiles");
};

//decode postcode and age for fantasy and tipping section 
if (_mcn.amf.tag("area") && (_mcn.amf.tag("area").value().indexOf("Fantasy") === 0 )){



	var alphanumeric , deHex;

	alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

	deHex = function (input){
		var value = 0, i = 0, j = input.length;
		for ( ; i < j ; i++ ){
			value +=alphanumeric.indexOf(input.charAt(i));
			if (i !== input.length-1)
				value *= 26;
			}
			return value;
		};
	
	//decode age
	if(amf.tag("AA")){
		//check if the rego data been duplicated
		if(amf.tag("AA").value().indexOf(",") == -1){
			amf.targeting("dega", ""+ amf.tag("AA").value());
		}else{
			amf.targeting("dega", ""+ amf.tag("AA").value().split(",")[0]);
		}									 		
		amf.tag("AA").remove();
	}

	//decode postcode	
	if(amf.tag("AB")){				
		//check if the rego data been duplicated
		if(amf.tag("AB").value().indexOf(",") == -1){
			amf.targeting("pcode", ""+ deHex(amf.tag("AB").value()));
		}else{
			amf.targeting("pcode", ""+ deHex(amf.tag("AB").value().split(",")[0]));			
		}
		amf.tag("AB").remove();
	}

	//gender
	if(amf.tag("AC")){
		//check if the rego data been duplicated
		if(amf.tag("AC").value().indexOf(",") == -1){
			amf.targeting("dneg",amf.tag("AC").value());
		}else{
			amf.targeting("dneg",amf.tag("AC").value().split(",")[0]);
		}
		amf.tag("AC").remove();
	}
	//state
	if(amf.tag("AD")){
		//remove state as no need
		//var state = ["VIC","NSW","QLD","WA","SA","TAS","NT","ACT"];		
		//amf.targeting("state",state[amf.tag("AD").value()-1]);
		amf.tag("AD").remove();
	}
	//club
	if(amf.tag("AE")){
		//check if the rego data been duplicated
		if(amf.tag("AE").value().indexOf(",") == -1){
			amf.targeting("keyword",amf.tag("AE").value());
		}else{
			amf.targeting("keyword",amf.tag("AE").value().split(",")[0]);
		}
		amf.tag("AE").remove();
	}
	//country
	if(amf.tag("AF")){
		//check if the rego data been duplicated
		if(amf.tag("AF").value().indexOf(",") == -1){
			amf.targeting("keyword",amf.tag("AF").value());
		}else{
			amf.targeting("keyword",amf.tag("AF").value().split(",")[0]);
		}
		amf.tag("AF").remove();
	}
	//subscription
	if(amf.tag("AG")){
		//check if the rego data been duplicated
		if(amf.tag("AG").value().indexOf(",") == -1){
			amf.targeting("keyword", (amf.tag("AG").value() ===1) ? "subscribed" : "not_subscribed");
		}else{
			amf.targeting("keyword", (amf.tag("AG").value().split(",")[0] ===1) ? "subscribed" : "not_subscribed");
		}
		amf.tag("AG").remove();
	}		
	
}

//Add team keyword for fixtures page
if (amf.tag("area") && amf.tag("area").value().indexOf("FIXTURE") === 0 && window.location.href.indexOf("teamId=") != -1) {
  amf.targeting("keyword", window.location.href.match(/teamId\=.*?(?=#|$)/)[0].split("=")[1]);
}
  
//Adding keyowrd targeting for Wash Up pages for 155343 - Gerni sponsorship - ends 17/10/15
if(document.location.href.indexOf("season-review") != -1){
	amf.targeting("keyword","SEASONREVIEW");
}

// added in floating ad unit code - richard.abao on 06 May 2016
try{
	if (document.location.href.indexOf("floater-mrec") != -1){
		_mcn.floater({adSize:"300x250",position:"right"});
	}
	else if (document.location.href.indexOf("floater-leaderboard") != -1){
		_mcn.floater({adSize:"728x90",position:"bottom"});
	}
}
catch(e){}
//remove ads from page shanghai 2017
if (document.location.href.indexOf('www.afl.com.au/afl-hq/shanghai-2017') != -1){
  		_mcn.amf.ad("id", "mcn-728901").disable();
  		_mcn.amf.ad("id", "mcn-3002501").disable();
  		_mcn.amf.ad("id", "mcn-3002502").disable();
  		_mcn.amf.ad("id", "mcn-728902").disable();
  		_mcn.amf.ad("id", "mcn-728903").disable();
  		_mcn.amf.ad("id", "mcn-111").disable();
		_mcn.amf.ad("id","mcn-411").disable();
		_mcn.amf.ad("id","mcn-oop").disable();
		document.getElementById('mcn-728901').parentNode.parentNode.style.display='none';
  }


_mcn.drop("ga");
_mcn.cache.write('drop',["ga"], 3600 /**hour*/* 24 /**day*/* 3);
//for afl tippings
if (_mcn.amf.tag("Age")){
  _mcn.amf.targeting("categ", _mcn.amf.tag("Age").value());
  _mcn.amf.tag("Age").remove();
}

//exclusions
_mcn.amf.targeting("!c", "Telecomms");
_mcn.amf.targeting("!c", "Porn");
_mcn.amf.targeting("!c", "Gambling");
_mcn.amf.targeting("!c", "Media");
_mcn.amf.targeting("!c", "Casino");
_mcn.amf.targeting("!c", "Motor_Vehicles");
_mcn.amf.targeting("!c", "Betting");
_mcn.amf.targeting("!c", "Finance");
_mcn.amf.targeting("!c", "Alcoholic_Beverages");
_mcn.amf.targeting("!c", "FMCG");
_mcn.amf.targeting("!c", "Entertainment_Leisure");
_mcn.amf.targeting("!c", "Insurance");
_mcn.amf.targeting("!c", "2849_Telstra");

// enable absense to log ad blocking activity for afl
_mcn.absense({
    timeout: 4000
});

_mcn.amf.vpm({"home":{"300x250":{"1":0.9},"4x1":{"1":0.8},"1x1":{"1":0.8}},"news":{"300x250":{"1":0.8},"300x600":{"1":0.8},"":{"1":0.8}},"ladder":{"728x90":{"1":0.9},"300x250":{"1":1},"300x600":{"1":0.9}},"_ROOT":{"300x250":{"1":0.9},"300x600":{"1":0.9},"4x1":{"1":0.8}},"video":{"728x90":{"1":0.9},"300x250":{"1":0.9},"300x600":{"1":0.9}},"tipping\/tipping":{"300x250":{"1":0.8}},"fantasy\/match_day":{"728x90":{"3":0.9},"300x250":{"0":0.8,"3":0.8,"4":0.8,"5":0.8,"7":0.8,"8":0.8,"9":0.8}},"fantasy\/stat_centre":{"300x250":{"2":0.8,"7":0.8,"9":0.8}},"tv_radio":{"728x90":{"1":0.8},"300x250":{"1":0.9},"300x600":{"1":0.9}},"tickets":{"728x90":{"1":0.8},"300x250":{"1":0.9},"300x600":{"1":0.8}},"stats":{"300x250":{"1":0.9},"300x600":{"1":1}},"tipping\/other":{"300x250":{"1":0.9,"4":0.8,"6":0.8,"7":0.8}},"fantasy\/pulse":{"728x90":{"3":0.8}},"tipping\/prizes":{"300x250":{"1":0.8}},"tipping\/gauntlet":{"300x250":{"1":0.8}}});
