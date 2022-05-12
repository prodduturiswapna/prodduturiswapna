var pageNameContainer;
var tarEndEvent= detectEndEventType();
var tarMoveEvent = detectMoveEventType();
var tarEvent = detectEventType();
var slideName = "";


$(function () {
	getSlideName();
	global_funtion();
	header_menu_nav();
});

 
function getSlideName(){
	slideName=document.title; 
	return slideName;
}

/* Global Page level funtions */

function global_funtion()
{
	$('.container').append('\
	<!-- Header Navigation -->\
	    <div id="header_menu_1" class="header_menu"><p class="font_aln">HOME</p></div>\
		<div id="header_menu_2" class="header_menu"><p class="font_aln">メニュー</p></div>\
		<div id="header_menu_3" class="header_menu"><p class="font_aln">添付文書<span id="header_menu_3_1">・</span><span id="header_menu_3_2">IF</span></p></div>\
	</div>'
	);
}

function header_menu_nav(){	
	$('.page_nav').on(tarEndEvent, function(){
		var page_nav = $(this).attr('data-nav');
		if(slideName!= page_nav)
		{
            nav.navSlide(page_nav);
		}
	});
	$("#header_menu_1").bind(tarEndEvent,function(){
		com.veeva.clm.gotoSlide("HPP研修用スライド：BE SURE試験、BE READY試験_01_02_1_V1.zip","HPP研修用スライド：BE SURE試験、BE READY試験");
	});
	$("#header_menu_2").bind(tarEndEvent,function(){
		com.veeva.clm.gotoSlide("HPP研修用スライド：BE SURE試験、BE READY試験_01_02_1_V1.zip","HPP研修用スライド：BE SURE試験、BE READY試験");
	});
	$("#header_menu_3").bind(tarEndEvent,function(){
		com.veeva.clm.gotoSlide("HPP研修用スライド：BE SURE試験、BE READY試験_01_02_1_V1.zip","HPP研修用スライド：BE SURE試験、BE READY試験");
	});

	$('.pop7,.btnnormal7').bind('swiperight swipeleft', function(){
		return false;
	});
}

/**************** End of navigation flow ****************/
/********************** Mandatory Method to apply events to all the objects.
@: tagetObj : It is a target div and  event applied to this div object.
@: eventType: It is a normal JQUERY events. i.e. 'mousedown','click','mouseup' etc...
@: callBKFn: It is a callback button of the target div. All the manipulation/action should come inside this function. This function should be available in the page level js file.
@: isRemoveEvent: Boolean True/False. If it is TRUE, it will remove previous eventtype and keep only the given event.
***********************/
var verifyMetaData=this["captureEvent"];
function setObjectEvent(targetObj,eventType,callBKFn,isRemoveEvent){
	if(eventType===MOUSE_DOWN) eventType=tarEvent;
	if(isRemoveEvent) targetObj.off(eventType);
	targetObj.on(eventType,function(){
		//To update meta data events
		//if(verifyMetaData!=undefined) verifyMetaData($(this));
		captureEvent($(this));
		callBKFn.call($(this));
	})
}

/**************************** DETECT EVENT TYPE *********************************/
function detectEventType(){
   var ua = navigator.userAgent,
   event = (ua.match(/iPhone/i) || ua.match(/iPad/i)) ? "touchstart" : "mousedown";
   return event;
}
function detectEndEventType(){
   var ua = navigator.userAgent,
   event = (ua.match(/iPhone/i) || ua.match(/iPad/i)) ? "touchend" : "mouseup";
   return event;
}
function detectMoveEventType(){
   var ua = navigator.userAgent,
   event = (ua.match(/iPhone/i) || ua.match(/iPad/i)) ? "touchmove" : "mousemove";
   return event;
}
/**************************** DETECT EVENT TYPE *********************************/

/*********** Top Click Event Start***********/


/*********** Top Click Event End***********/