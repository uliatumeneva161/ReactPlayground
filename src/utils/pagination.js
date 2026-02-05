class Az{ 
    constructor(pars){ 
        this.name = pars.name
        this.age = pars.age
        this.folls = pars.folls
    }
    sayHi(){ 
        console.log(`hi, ${this.name}`)
    }
}
const obj = new Az({ name: 'Alice', age: 25, folls: 100 })
// const par = 
export { Az, obj }
