$(function() {

	// Adding
	$('#add').on('click', function() {
		var num1 = parseInt($('#num_one').val(), 10)
		var num2 = parseInt($('#num_two').val(), 10)
		var add = num1 + num2

		$('.calculator__display').text(add)
	})

})