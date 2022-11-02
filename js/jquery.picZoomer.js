
;(function($){
	$.fn.picZoomer = function(options){
		var opts = $.extend({}, $.fn.picZoomer.defaults, options), 
			$this = this,
			$picBD = $('<div class="picZoomer-pic-wp"></div>').css({'width':opts.picWidth+'px', 'height':opts.picHeight+'px'}).appendTo($this),
			$pic = $this.children('img').addClass('picZoomer-pic').appendTo($picBD), 
			$cursor = $('<div class="picZoomer-cursor"><i class="f-is picZoomCursor-ico"></i></div>').appendTo($picBD),
			cursorSizeHalf = {w:$cursor.width()/2 ,h:$cursor.height()/2},
			
			$zoomWP = $('<div class="picZoomer-zoom-wp"><img src="" alt="" class="picZoomer-zoom-pic"></div>').appendTo($this),
			$zoomPic = $zoomWP.find('.picZoomer-zoom-pic'),
			$zoomWP1 = $('<div class="picZoomer-zoom-wp1"><img src="" alt="" class="picZoomer-zoom-pic1"></div>').appendTo($this),
			$zoomPic1 = $zoomWP1.find('.picZoomer-zoom-pic1'),
			$zoomWP2 = $('<div class="picZoomer-zoom-wp2"><img src="" alt="" class="picZoomer-zoom-pic2"></div>').appendTo($this),
			$zoomPic2 = $zoomWP2.find('.picZoomer-zoom-pic2'),
			$zoomWP3 = $('<div class="picZoomer-zoom-wp3"><img src="" alt="" class="picZoomer-zoom-pic3"></div>').appendTo($this),
			$zoomPic3 = $zoomWP3.find('.picZoomer-zoom-pic3'),
			
			picBDOffset = {x:$picBD.offset().left,y:$picBD.offset().top};

		
		opts.zoomWidth = opts.zoomWidth||opts.picWidth;
		opts.zoomHeight = opts.zoomHeight||opts.picHeight;
		var zoomWPSizeHalf = {w:opts.zoomWidth/2 ,h:opts.zoomHeight/2};

		$zoomWP.css({'width':opts.zoomWidth+'px', 'height':opts.zoomHeight+'px'});
		$zoomWP1.css({'width':opts.zoomWidth+'px', 'height':opts.zoomHeight+'px'});
		$zoomWP2.css({'width':opts.zoomWidth+'px', 'height':opts.zoomHeight+'px'});
		$zoomWP3.css({'width':opts.zoomWidth+'px', 'height':opts.zoomHeight+'px'});
		
		$zoomWP.css(opts.zoomerPosition || {top: 0, left: opts.picWidth+5+'px'});
		$zoomWP1.css(opts.zoomerPosition1 || {top: 0, left: 2*(opts.picWidth+5)+'px'});
		$zoomWP2.css(opts.zoomerPosition2 || {top: 0, left: 3*(opts.picWidth+5)+'px'});
		$zoomWP3.css(opts.zoomerPosition3 || {top: 0, left: 4*(opts.picWidth+5)+'px'});
		 
		
		$zoomPic.css({'width':opts.picWidth*opts.scale+'px', 'height':opts.picHeight*opts.scale+'px'});
		$zoomPic1.css({'width':opts.picWidth*opts.scale+'px', 'height':opts.picHeight*opts.scale+'px'});  
		$zoomPic2.css({'width':opts.picWidth*opts.scale+'px', 'height':opts.picHeight*opts.scale+'px'});  
		$zoomPic3.css({'width':opts.picWidth*opts.scale+'px', 'height':opts.picHeight*opts.scale+'px'});    
		 
		$picBD.on('mouseenter',function(event){
			// $cursor.show();
			$cursor.hide();
			$zoomWP.show();
			$zoomWP1.show();
			$zoomWP2.show();
			$zoomWP3.show();
			$zoomPic.attr('src',$pic.attr('src'));
			$zoomPic1.attr('src',$pic.attr('src1'));
			$zoomPic2.attr('src',$pic.attr('src2'));
			$zoomPic3.attr('src',$pic.attr('src3'))
		}).on('mouseleave',function(event){
			//
			$cursor.hide();
			$zoomWP.hide();
			$zoomWP1.hide();
			$zoomWP2.hide();
			$zoomWP3.hide();
		}).on('mousemove', function(event){
			var x = event.offsetX,
			    y = event.offsetY;
			$cursor.css({'left':x-cursorSizeHalf.w+'px', 'top':y-cursorSizeHalf.h+'px'});
			
			$zoomPic.css({'left':-(x*opts.scale-zoomWPSizeHalf.w)+'px', 'top':-(y*opts.scale-zoomWPSizeHalf.h)+'px'});
			$zoomPic1.css({'left':-(x*opts.scale-zoomWPSizeHalf.w)+'px', 'top':-(y*opts.scale-zoomWPSizeHalf.h)+'px'});
			$zoomPic2.css({'left':-(x*opts.scale-zoomWPSizeHalf.w)+'px', 'top':-(y*opts.scale-zoomWPSizeHalf.h)+'px'});
			$zoomPic3.css({'left':-(x*opts.scale-zoomWPSizeHalf.w)+'px', 'top':-(y*opts.scale-zoomWPSizeHalf.h)+'px'});

		});
		return $this;

	};
	$.fn.picZoomer.defaults = {
		picWidth: 400,
		picHeight: 300,
		scale: 12.0,
		zoomerPosition: {top: '0', left: '410px'},
		zoomerPosition3: {top: '300', left: '0px'},
		zoomerPosition1: {top: '300', left: '410px'},
		zoomerPosition2: {top: '300', left: '820px'}
	};
})(jQuery);
