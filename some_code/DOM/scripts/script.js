let page = 1 // Это не страница, а страница данных
let loading = false

async function loadProducts() {
    if (loading) return

    loading = true

    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`)

    const products = await response.json()

    products.forEach(product => {
        const li = document.createElement("li")
        li.textContent = `${product.name} — ${product.email}$`

        document.querySelector(".products").append(li)
    })

    page++
    loading = false
}

const loader = document.querySelector(".loader")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadProducts()
        }
    })
})

observer.observe(loader)


// Copyboard 
const buttonCopy = document.querySelector(".copy")
const buttonPaste = document.querySelector(".paste")
const input = document.querySelector(".input")

buttonCopy.addEventListener("click", async () => {
    const inputValue = input.value
    await navigator.clipboard.writeText(inputValue) 
    console.log(inputValue)
    input.value = ""
    
})

buttonPaste.addEventListener("click", async () => {
   const text = await navigator.clipboard.readText() 
   input.value = text
})


// test creator 
const form = document.querySelector(".user-creator")
const inputName = document.querySelector(".input-name")
const inputAge = document.querySelector(".input-age")
const buttonAdd = document.querySelector(".add-user")
const user = document.querySelector(".user")
const savedUser = localStorage.getItem("user-info")


function loadUserInfo() {
    if (!savedUser) return

    const info = JSON.parse(savedUser)
    const information = `${info.name} - ${info.age}`
    user.append(information)
    
}

loadUserInfo()

function Locker() {
    if (savedUser) form.remove()
    

    else {
        form.addEventListener("submit", (event) => {
        event.preventDefault()
        const name = inputName.value
        const age = Number(inputAge.value)

        const newUser = {
            name: name,
            age: age
        }

        localStorage.setItem("user-info", JSON.stringify(newUser))

        const li = document.createElement("li")
        li.textContent = `${name} - ${age}`

        user.append(li)

    })
    }
}
Locker()




