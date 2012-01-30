
//Load the booklet
	
$(function() {
	
	//single book
	$('#mybook').booklet({
		width: 1200,
		height: 800,
		closed: false,
		autoCenter:true,
		keyboard:true,
		pagePadding:25
	});
	
	//Main

    function show(item){
        $(this).parent().append('<div class="context-menu"><p>'+$(this).find("img").attr("alt")+'</p></div>');
    }

    function hide(item) {
        $(this).parent().find(".context-menu").remove();
    }

    $(".context").hoverIntent({
        sensitivity: 1,
        over: show,
        timeout: 300,
        out: hide
    });

	
	$("#sidebar-right").hover(
		function() { //Enter
			
			$(this).find("h1.vertical").hide();
			$(this).find(".close_btn").show();
			$(this).css('z-index','99');
			$(this).animate({
				width:800,
				height:600,
				right:($(window).width() - 800)/2,
				top:200
			});
			
			$('#sidebar-right-content').show();
			
		},
		function () { //Exit
			//Do Nothing
		}
	)
	
	$("#sidebar-right img.close_btn").click(
		function() { //Each action in this function should be the same as for the Enter section in the hover function
			$(this).parent().find("h1.vertical").show();
			$(this).parent().find(".close_btn").hide();
			$(this).parent().css('z-index','99');
			$(this).parent().animate({
				width:40,
				height:800,
				right:0,
				top:110
			});
			$('#sidebar-right-content').hide();
		}
	);
		
});
