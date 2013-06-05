
$(document).ready(function(){

$('.send_comment').submit(function(eventObject){
	
	$('.error2').text("");

	if ($('.input_name').val() == "" && $('.input_text').val() == "")
	{
		eventObject.preventDefault();
		$('.error2').prepend("<div class='error'><img src='img/err.png'>Пожалуйста, заполните все поля перед отправкой</div>");
	}
});
})

$(document).ready(function(){

$('.reply_this').submit(function(eventObject){
	
	$('.cerror3').text("");

	if ($('.input_name').val() == "" && $('.input_text').val() == "")
	{
		eventObject.preventDefault();
		$('.cerror3').prepend("<div class='error'><img src='img/err.png'>Пожалуйста, заполните все поля перед отправкой</div>");
	}	
});
});

	
						$(document).ready(function() {
					  	$('#rep1').click(function(){
					  		$("#comment1").toggle();
					  	});
					  	$('#rep2').click(function(){
					  		$("#comment2").toggle();
					  	});
					  	$('#rep3').click(function(){
					  		$("#comment3").toggle();
					  	});
					  	$('#rep4').click(function(){
					  		$("#comment4").toggle();
					  	});

						});

		