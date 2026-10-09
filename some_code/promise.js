const promise = new Promise((resolve, reject) => {
  resolve("Успех")
  reject("Ошибка")
})

promise
  .then(result => console.log(result))
  .catch(error => console.log(error))


  const resolved = Promise.resolve(10)
  const rejected = Promise.reject("Ошибка")


//Все вернется

 Promise.all([resolved, rejected])
  .then(value => console.log(value))
  .catch(error => console.log(error))

//Все вернется, но с результатом информации в виде массива

 Promise.allSettled([resolved, rejected])
  .then(value => console.log(value))
  .catch(error => console.log(error))

// Первый добрый вернется

Promise.any([resolved, rejected])
  .then(value => console.log(value))
  .catch(error => console.log(error))


// Первый завершенный вернется

Promise.race([resolved, rejected])
  .then(value => console.log(value))
  .catch(error => console.log(error))

