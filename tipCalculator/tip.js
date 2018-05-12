$(document).ready(function(){
  // target the button first. use the button's class
  $('.submit_button').on('click', function(){
    // get the value from the bill, tip percent input fields. using jquery, just target the class and use .val(). this didnt work when using document.getElementsByClassName....
    var bill = $('.bill_amount').val();
    // sanity check for a bill amount other than 0. this is fine, but parseFloat hasn't happened at this point yet! so account for that by using only double equals to avoid the type check of triple
    // also, to verify the input for the bill, used isNaN, combined with parseFloat. did this because when a string, empty or otherwise, is passed to parseFloat, the result is NaN. built in isNaN function checks for this, no need to specify == "NaN"
    if (bill == "" || bill == 0 || isNaN(parseFloat(bill))) {
      $('.tip_amount').val(0);
      $('.total_bill').val(0);
    } else {
      // if bill amount is nonempty
      var percent = $('.tip_percent').val();
      // set the tip amount to 2 decimal places using toFixed
      var tipAmount = (bill*percent*0.01).toFixed(2);
      // store split info
      var split = $('.people').val();
      // store the word Split in this var. this will allow it to be placed in the span element of the h3 for the total bill information
      var sp = 'Split';
      // check split value. only value that matters is anything other than 0
      if (parseFloat(split) != 0) {
        // insert an italic Split word to indicate the bill is split
        $('.italic').text(sp);
        // set the split bill amount
        var totalBill = (parseFloat(bill) + parseFloat(tipAmount)) / parseInt(split, 10);
        // toFixed returns a string, so use parseFloat here as well
        $('.tip_amount').val(parseFloat(tipAmount));
        // display 2 decimal places using toFixed. totalBill has parseFloat applied to it already
        $('.total_bill').val((totalBill).toFixed(2));
      } else {
        // if the bill is not split
        $('.total').text('Total Bill');
        // store the total bill amount. also need this so parseFloat can be applied to it when displaying the value in the dom
        // to add the numbers, use parseFloat since they are decimals. they are passed as strings from the dom inputs, and will be concatenated, not added as numbers if parseFloat is not used
        totalBill = parseFloat(bill) + parseFloat(tipAmount);
        // now target the input fields to display the new values when the button is clicked. grab the input to display the info in by its class
        // toFixed returns a string, so use parseFloat here as well
        $('.tip_amount').val(parseFloat(tipAmount));
        // display 2 decimal places using toFixed. this number has parseFloat applied to it already
        $('.total_bill').val((totalBill).toFixed(2));
      } // ends split bill else
    } // ends bill sanity check
  });
})
