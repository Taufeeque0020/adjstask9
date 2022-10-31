function sum(a, b) {

    return a + b;
  
  }
  
  let result = sum.call(this, 5, 3);
  
  console.log(result);