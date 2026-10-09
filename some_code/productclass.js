class Product {
    constructor(name, price) {
        this.name = name
        this.price = price 
    }
}

class Cheap extends Product {
    constructor(name, price, stock) {
        super(name, price)
        this.stock = stock
    }
}

const products = [
  new Cheap("Apple", 120, 15),
  new Cheap("Banana", 90, 0),
  new Cheap("Tomato", 150, 8),
  new Cheap("Potato", 70, 50),
  new Cheap("Cucumber", 110, 0)

]


function filtredFull() {
    const filtred = products 
    .filter(p => p.stock < 1)
    .map(p => p.name)

    if(filtred.length > 1) return console.log(`Не хватает: ${filtred}`)
}

const sum = products.reduce((total, count) => {
  return total + count.stock
  return total
}, 0)

console.log(`Товаров на базе: ${sum}`)
filtredFull()

