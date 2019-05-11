//Declare variables
$(document).ready(function(){
  let productType = document.getElementById('productList');
  let chosenProduct = productType.options[productType.selectedIndex].text;
  const customs = [0.5,0.4,0.35,0.25,0.15];
  let fees = '';
  let total = '';
//assign functions to the submit button
  $('button').on('click',function() {
    let pkgWeight = document.getElementById('pkgWeight').value;
    let pkgCost = document.getElementById('pkgCost').value;
//Calculate Customs Fees based on product category
    function calcCustoms(){
      switch (chosenProduct) {
        case "Cellphone":
            fees = pkgCost*customs[0];
            document.getElementById('custResult').innerHTML = "Customs and Fees: $"+fees;
          break;
        case "Books":
            fees = pkgCost*customs[4];
            document.getElementById('custResult').innerHTML = "Customs and Fees: $"+fees;
          break;
        case "Bath Products":
            fees = pkgCost*customs[3];
            document.getElementById('custResult').innerHTML = "Customs and Fees: $"+fees;
          break;
          case "Beauty Products":
            fees = pkgCost*customs[1];
            document.getElementById('custResult').innerHTML = "Customs and Fees: $"+fees;
            break;
          case "TV":
            fees = pkgCost*customs[2];
            document.getElementById('custResult').innerHTML = "Customs and Fees: $"+fees;
            break;


      }
    }
//Calculate shipping fees based on example from Amazon Seller Central
    function calcShipping() {
      shipFee = (pkgWeight*0.25)+4;
      document.getElementById('shipResult').innerHTML = "Shipping Fee: $"+shipFee;

    }

//test for weights and cost, run functions if passed
    if (pkgWeight.length == 0) {
      alert('Please enter a weight');
    } else {
      calcShipping();
    }

    if (pkgCost.length == 0) {
      alert('Please enter the product cost')
    } else {
      calcCustoms();
    }
  })
})
