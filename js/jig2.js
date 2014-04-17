$(function() {
	
var puzzleProto = {
	keyConfig: {
			keyLeft : 37,
			keyRight : 39,
			keyUp : 38,
			keyDown : 40
	},
	currentRotate: 0,
	touchStartX:0,
	touchStartY:0,
	
	antiClockWise: function() {
		this.currentRotate -=90;		
		$("#jigsawpiece").css( "-webkit-transform", "rotate("+this.currentRotate+"deg)" );
	    
		
	},
	clockWise: function() {	
		this.currentRotate +=90;
		$("#jigsawpiece").css( "-webkit-transform", "rotate("+this.currentRotate+"deg)" );
	}

};

		
$(document).keydown(function(e){	
//alert(e.keyCode);

				switch (e.keyCode) {
					case puzzleProto.keyConfig.keyUp:
					case puzzleProto.keyConfig.keyLeft:
					 					puzzleProto.antiClockWise();
						break;
					case puzzleProto.keyConfig.keyRight:
					case puzzleProto.keyConfig.keyDown:
					 					puzzleProto.clockWise(); 
						break;
				}// end switch
			});//end keydown




			// touch events for ios
			
			
			document.ontouchstart = function(e) {
				e.preventDefault();   
				puzzleProto.touchStartX = e.touches[0].pageX;
				puzzleProto.touchStartY = e.touches[0].pageY;
				
			}
			
			document.ontouchmove = function(e) {
				e.preventDefault();   
				
			}
			
			document.ontouchend = function(e) {	
				e.preventDefault();   
							
			var t =	e.changedTouches[0];
			if (t.pageX <160) { 
				
				if (t.pageY < puzzleProto.touchStartY - 10) {
					puzzleProto.clockWise(); 
					}
					else if (t.pageY > puzzleProto.touchStartY +10)
					{
					puzzleProto.antiClockWise();
					}
					else
					{
						if ((t.pageX < puzzleProto.touchStartX + 2) && (t.pageX > puzzleProto.touchStartX - 2))
					puzzleProto.clockWise(); //default for a tap on LHS
					}
					
					
				}
			else {
				
				
				if (t.pageY > puzzleProto.touchStartY + 10) {
					puzzleProto.clockWise(); 
					}
					else if (t.pageY < puzzleProto.touchStartY - 10) 
					{
					puzzleProto.antiClockWise();
					}
					else
					{
						if ((t.pageX < puzzleProto.touchStartX + 2) && (t.pageX > puzzleProto.touchStartX - 2))
					puzzleProto.antiClockWise(); //defaul for tap on RHS
					}
				}
			
			}
			
		
			

});//end onReady