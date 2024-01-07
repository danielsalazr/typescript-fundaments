(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const login = (email: string, password: string) => {
    console.log(email, password);
  }

  login('Daniel@salazar.com', '123465783')

  const loginv2 = (data: {email: string, password: number}) => {
    console.log(data.email, data.password)
  }

  loginv2({
    email:'Daniel@salazar.com',
    password: 123465783,
  });

  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size? :Sizes
  }

  const products:Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    title: "Prop 1",
    createdAt: new Date(1992,1,1),
    stock: 12,
    // size? :Sizes
  })

  addProduct({
    title: "Prop 2",
    createdAt: new Date(),
    stock: 12,
    size : 'XL',
  })


  products.push({
    title: "Prop 3",
    createdAt: new Date(),
    stock: 16,
    size : 'S',
  })

  console.log(products)

}) ()
