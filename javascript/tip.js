$(document).ready(function(){
  $('.submit_button').on('click', function(){
    // store the values from the bill, tip percent input fields
    var bill = $('.bill_amount').val();
    // check for non numeric or negative input values
    if (bill === '' || parseFloat(bill) < 0) {
      $('.tip_amount').val(0);
      $('.total_bill').val(0);
    } else {
      // if bill amount is nonempty
      var percent = $('.tip_percent').val();
      // set the tip amount to 2 decimal places using toFixed
      var tipAmount = (parseFloat(bill)*percent*0.01).toFixed(2);
      totalBill = parseFloat(bill) + parseFloat(tipAmount);
      // toFixed returns a string, so use parseFloat here as well
      $('.tip_amount').val(parseFloat(tipAmount));
      // display 2 decimal places using toFixed. this number has parseFloat applied to it already
      $('.total_bill').val((totalBill).toFixed(2));
    } // ends if
  }); // ends onclick function

  getPercentSelect()[0].addEventListener('change', function(){
    if(getPercentSelect()[1] === '0') {
      getMessageAlert().style.display = 'block';
      getPercentSelect()[0].classList.remove('has-value');
      getPercentSelect()[0].classList.add('no-tip');
    } else {
      getMessageAlert().style.display = 'none';
      getPercentSelect()[0].classList.remove('no-tip');
      getPercentSelect()[0].classList.add('has-value');
    }
  });

  function getPercentSelect() {
    let percent = document.querySelector('.tip_percent');
    return [percent, percent.value]
  }

  function getMessageAlert() {
    let alert = document.querySelector('.alert-message');
    return alert
  }
})
