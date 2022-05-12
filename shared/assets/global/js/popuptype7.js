/************ Completed Popup Type1 --- 
/************ Completed Popup Type1 --- 
On button click popup and its close button will be displayed
when close button clicked popup and the close button will be hidden *********/
function PopupType7(){
	
	var BtnCls = '.btnnormal7';
	var PopCls =  '.pop7';
	var PopCloseCls = '.btnclose7';
	var popupOverlay ='.popoverlay7'
	var self = this;
	$(BtnCls).bind(tarEvent,openPopup);	
	$(popupOverlay).unbind().bind(tarEvent,closeAllPop);
	
	function openPopup(e){
		e.stopPropagation();
		var BtnId = $(this).attr('id');
		//$(this).addClass("orange_open");
		var Btnindex =$(BtnCls).index($("#"+BtnId));
		$(PopCls).eq(Btnindex).show();
		$(PopCloseCls).eq(Btnindex).show();
		$(PopCloseCls).unbind().bind(tarEvent,function(e){ClosePop(e);});
		$(popupOverlay).unbind().bind(tarEvent,closeAllPop);
		$(PopCls).children().not(popupOverlay).not(PopCloseCls).unbind().bind(tarEvent,function (e){e.stopPropagation();});
	}
	var closeAllPop=function(e){			
		e.stopPropagation();
		$(PopCls).hide();
		$(PopCloseCls).hide();
		ClosePop(e);
		$(popupOverlay).unbind(tarEvent,closeAllPop);
	}
	var ClosePop=function(e){
		e.stopPropagation();
		//$(".btnnormal7").removeClass("orange_open");
		$(PopCls).children().not(popupOverlay).not(PopCloseCls).unbind();
		var CloseBtnId = e.target.id;
		var CloseBtnIndex = $(PopCloseCls).index($("#"+CloseBtnId));
		$(PopCls).eq(CloseBtnIndex).hide();
		$(PopCloseCls).eq(CloseBtnIndex).hide();		
	}
	
	this.resetpop = function(){
		$(PopCls).hide();
		$(PopCloseCls).hide();
	}
}