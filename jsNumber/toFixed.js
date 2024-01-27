var num = 5.56789;
  var n = num.toFixed(2);
  console.log(n);  //5.57
  console.log(typeof n)  //string

  var num = 5.56789;
  var num1 = 5.1;
  var num2 = 5.5;
  var num3 = 5.56789;
  var num4 = 5.467;
  var n = num.toFixed();
  console.log(n);               //6
  console.log(num1.toFixed()); //5
  console.log(num2.toFixed()); //6
  console.log(num4.toFixed()); //5
  console.log(num3.toFixed(10));//5.5678900000
  /*
  The toFixed() method converts a number into a string, rounding to a specified number of decimals.
Note: if the desired number of decimals are higher than 
the actual number, zeros are added to create the desired decimal length.
  */