(() => {
  let productTitle = 'My Amazing product';

  // productTitle = null;
  // productTitle= () => {};
  // productTitle= () => {};

  productTitle = 'My amazing product change';
  console.log('productTitle', productTitle);

  const productDescription = "I'm bla bla bla"
  console.log('productDescription', productDescription);
  let productPrice =100;
  let isNew: boolean = false;

  const sumary :string = `

  title: ${productTitle},
  description : ${productDescription},
  price: ${productPrice}
  `;
  console.log('sumary', sumary);

})()
