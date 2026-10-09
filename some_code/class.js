class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

} // Класс

class Admin extends User {
    constructor(name, age, role, city) {
        super(name, age)
        this.role = role
        this.city = city
    }
} // Наследование

const user = new Admin("Roman", 25, "Frontend Developer", "Minsk")

const {name, city} = user // Деструктуризация 
console.log(name, city)                                  

// Я связал 3 темы в один код, чтобы наглядно был пример их работы