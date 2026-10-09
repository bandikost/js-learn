function getOrders() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5

            if (success) {
                resolve([
                    { id: 1, price: 1000 },
                    { id: 2, price: 500 },
                    { id: 3, price: 700 }
                ])
            } else {
                reject(new Error("Не удалось загрузить заказы"))
            }
        }, 1000)
    })
}

async function loadOrders() {
    try {
        const data = await getOrders()
        const total = data.reduce((sum, count) => {
            return sum += count.price
        }, 0)
        return total
    }

    catch (error) {
        console.log("Ошибка загрузки:", error.message)
        return null
    }
}

loadOrders().then(value => console.log(value))


function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 10,
        name: "Roman"
      })
    }, 1000)
  })
}

function getOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5

      if (success) {
        resolve([
          { id: 1, userId: 10, price: 1000 },
          { id: 2, userId: 20, price: 500 },
          { id: 3, userId: 10, price: 700 }
        ])
      } else {
        reject(new Error("Не удалось загрузить заказы"))
      }
    }, 1500)
  })
}


async function loadUserOrders() {
  try {
    const data = await Promise.all([
      getUser(),
      getOrders()
    ])

  const [user, orders] = data

    const userOrder = orders.filter(o => o.userId === user.id)
    const total = userOrder.reduce((sum, count) => sum + count.price, 0)
    const result = [...data, total]
    return console.log(result)
  
  }
    
  catch (error) {
    console.log(error.message)
    return null
  }
  
}

loadUserOrders()