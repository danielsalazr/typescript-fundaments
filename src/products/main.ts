import { addProduct, calcularStock, products } from "./product.service";

addProduct({
    name: 'Pro1',
    createdAt: new Date(),
    stock: 5,
    size : 'XL',
})

addProduct({
    name: 'Pro2',
    createdAt: new Date(),
    stock: 6,
    size : 'XL',
})

console.log(products)

const total = calcularStock()
console.log(total)
