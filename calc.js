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

    function calcShipping() {
      shipFee = (pkgWeight*0.25)+4;
      console.log("the shipping fee is $"+shipFee);
      document.getElementById('shipResult').innerHTML = "Shipping Fee: $"+shipFee;

    }
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
  //  calcShipping();
  //  calcCustoms();
  })
})
