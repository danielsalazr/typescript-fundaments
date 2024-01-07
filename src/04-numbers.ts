(() => {

  // Forma implicita
let productPrice = 100;
productPrice = 12;
console.log('ProductPrice ', productPrice)

// Forma explicita
let customerAge: number = 28;
customerAge = customerAge + 1;
console.log('customerAge ', customerAge)


let productInStore: number ;
// console.log('productInStore ', productInStore)



let discount = parseInt('123');
// let discount = parseInt('fwefew');
console.log('discount ', discount)

if(discount < 200){
  console.log("Apply")
} else{
  console.log("Not Apply")
}

let hex = 0xfff;
console.log('hex', hex)

let bin = 0b1010;
console.log('bin', bin)

const myNumber: number =10;
console.log('myNumber', myNumber)
})();
