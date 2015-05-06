$(document).ready(function()
{
	conScrolldivs = '.content-2 , .content-4';  //Scroll Divs

	$(document).scroll(function()
	{
		$(conScrolldivs).each(function()
		{

			heightWindo     = $(window).height();      // Window height
			topscrollwin    = $(window).scrollTop();   // Top Scroll
			imageDivpara    = $(this).offset().top;    // Elements, top
			
			completeHeight  = topscrollwin+heightWindo;
			lessdoneWndow   = completeHeight-imageDivpara;
			divtoSpeed      = lessdoneWndow/15;

			if (completeHeight >= imageDivpara) {
				$(this).css('background-position', '0% '+divtoSpeed+'%');
			};

		});
	});
});