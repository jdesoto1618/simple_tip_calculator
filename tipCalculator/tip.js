// set height of the divs to be the same
$('.tip_section').height($('.bill_section').height());

$(function(){
  // target the button first. use the button's class
  $('.submit_button').on('click', function(){
    // get the value from the bill, tip percent input fields. using jquery, just target the class and use .val(). this didnt work when using document.getElementsByClassName....
    var bill = $('.bill_amount').val();
    var percent = $('.tip_percent').val();
    var tipAmount = bill*percent*0.01;
    // now target the input fields to display the new values when the button is clicked. grab the input to display the info in by its class
    $('.tip_amount').val(tipAmount);
    // to add the numbers, use parseFloat since they are decimals. they are passed as strings from the dom inputs, and will be concatenated, not added as numbers if parseFloat is not used
    $('.total_bill').val(parseFloat(bill) + parseFloat((tipAmount)));
  });
})
