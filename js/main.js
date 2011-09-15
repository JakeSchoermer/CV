
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
        $(this).parent().append('<div class="context-menu"<p>'+$(this).find("img").attr("alt")+'</p></div>');
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
		
});
