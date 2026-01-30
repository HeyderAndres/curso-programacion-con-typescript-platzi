(()=>{

  //tipo number inferido
  let produtPrice = 100;
  produtPrice = 12;
  console.log(produtPrice);


  //tipo number explicito
  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log(customerAge);

  let productInStock: number;
  console.log(productInStock);

  if (productInStock > 10) {
    console.log('is grater');

  }

  let discount = parseInt('123');
  console.log(discount);

  if (discount <= 200) {
    console.log('apply');

  }else{
    console.log('not apply');

  }

  


})();
