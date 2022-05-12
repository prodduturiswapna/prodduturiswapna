var META_BTN="Btn";
var META_POP="Pop";
var META_QUE="Que";
var META_SUR="Sur";
var META_FEED="feed";
var META_NOT_FOUND="META DATA TAG NOT TAGGED IN THE TARGET DIV";
var metaTagArr=[META_BTN,META_POP,META_QUE,META_SUR];
var windowRef=window.top;
var myArr=[2,10,15,3,9,6,95];
// declare the Feedback variables
var selectedFeedback;
var selectedFeedArray=new Array();
var pageFeedRespArray=new Array();
var curPageID=-1;
var feedback_track='';
//
$(function () {
	setBtnEvents();
	trackInitMetas();
});

function setMetaDataTag(metaType,metaTagName){
	var metaTag=windowRef[metaTagName];
	if(metaTag!=undefined){
		switch(metaType){
			case metaTagArr[0]:
				Button_Click(metaTag);
				break;
			case metaTagArr[1]:
				Popup_Opened(metaTag);
				break;
			case metaTagArr[2]:
				if(metaType===META_QUE)	var metaAns=windowRef[metaTagName+"Ans"];
				if(jQuery.type(metaAns) == "array")
				{
					if(metaAns.length>0)
						Question_Submit(metaTag,metaAns);						
				}
				else if(metaAns!=undefined){					
					Question_Submit(metaTag,metaAns);
				}else{
					console.log("Answer is missing for Question submit "+metaTagName);
				}
				break;
			case metaTagArr[3]:
				if(metaType===META_SUR)	var metaAns=windowRef[metaTagName+"Ans"];
				if(jQuery.type(metaAns) == "array")
				{
					if(metaAns.length>0)
						Survey_Submit(metaTag,metaAns);						
				}
				else if(metaAns!=undefined){					
					Survey_Submit(metaTag,metaAns);
				}else{
					console.log("Answer is missing for Question submit "+metaTagName);
				}
				break;
			default:
				console.log("Meta data is not tagged");
		}
	}
}
function trackInitMetas(){
	setMetaDataTag(META_BTN,"root_track");
}
function setBtnEvents(){

	for(var i in metaTagArr){
		var targetObj=$("[data-metaTag^='"+metaTagArr[i]+"']");
		
		targetObj.on(tarEvent,function(){
			captureEvent($(this));
		});
	}
}

function captureEvent(target) {
	var targetMetaTag=target.attr("data-metaTag");
	
	if(targetMetaTag!=undefined){
		var metaTagArr=targetMetaTag.split(",");
		for(var i in metaTagArr){
			var metaType=findMetaDataType(metaTagArr[i]);
			var metaTagName=metaTagArr[i];
			setMetaDataTag(metaType,metaTagName);
		}
	}else{
		console.log(META_NOT_FOUND+" <><> "+target.attr("id"));
	}
}
function findMetaDataType(metaTag){
	var metaType=metaTag.substr(metaTag.length-3,metaTag.length);
	return metaType;
}
/************************* FEEDBACK RELATED CODE ***************************/
function createFeedElements(){
	//Feedback Related Code
	$('body').append('<div id="positive_feedback"  style=" position: absolute; z-index: 2;"> </div>');
	$('body').append('<div id="negative_feedback"  style=" position: absolute; z-index: 2;" > </div>');
	//Feedback tracking 
    $('#positive_feedback').on(tarEvent,function(){
		//$('#positive_feedback').css({ '-webkit-box-shadow': 'rgba(0, 0, 0, 0.8) 8px 9px 1px;'});
		$('#positive_feedback').transition({ 'opacity':'0.5' },100,'ease',function(){
		$('#positive_feedback').css({'opacity':'1'});});		
		if(feedback_track==undefined||feedback_track==''||feedback_track==null)
		{
			return;
		}		
		
		if(curPageID==-1){
			selectedFeedback="pos";
		}	
		
		if(curPageID!=-1){
			subPageFeedArray[curPageID]="pos";
		}		
	});
	$('#negative_feedback').on(tarEvent,function(){
		$('#negative_feedback').transition({ 'opacity':'0.5' },100,'ease',function(){$('#negative_feedback').css({'opacity':'1'});});
		//$('#negative_feedback').css({ '-webkit-box-shadow': 'rgba(0, 0, 0, 0.5) 8px 9px 1px;'});
		if(feedback_track==undefined||feedback_track==''||feedback_track==null)
		{
			return;
		}		
		if(curPageID==-1){
			selectedFeedback="neg";
		}		
		if(curPageID!=-1){
			subPageFeedArray[curPageID]="neg";
		}
	});

}
/************************* FEEDBACK RELATED CODE ***************************/
//Method used to track the feedback at the SLIDE level
function trackFeedback(){
	if(selectedFeedback=="pos"){
		Feedback_Click(feedback_track, ESPFeedback.ACCEPT); 
	}else if(selectedFeedback=="neg"){
		Feedback_Click(feedback_track, ESPFeedback.REJECT);
	}
	trackSubPageFeedback();
	resetFeedVars();
	console.log("<<<<<<<<<<<<<<<<<<<< SLIDE FEEDBACK >>>>>>>>>>>>>>>>>> ");
	/* $.each( feedback_track, function( key, value ) {
		if(key=="m_trackID" || key=="m_description"){
		//alert( key + ": " + value );
		}
	}); */
}
// End of code
//Method used to track the feedback at the PAGE level
function trackSubPageFeedback(){
	var subPageLen=subPageFeedRespArray.length;	
	for(var i=1;i<=subPageLen;i++){
		if(subPageFeedArray[i]=="pos"){
			Feedback_Click(subPageFeedRespArray[i], ESPFeedback.ACCEPT); 
		}else if(subPageFeedArray[i]=="neg"){
			Feedback_Click(subPageFeedRespArray[i], ESPFeedback.REJECT);
		}
	}
	resetFeedVars();
}
function resetFeedVars(){
	curPageID=-1;
	selectedFeedback="";
	subPageFeedRespArray=[];
	subPageFeedArray=[];
}

// End of code
/************************* END OF FEEDBACK RELATED CODE ***************************/
