//Destructure is used to get some of value from object.

const person = {
    name: 'Nazrul Islam',
    age: 26,
    address: 'Dhaka',
    email: 'nazrulislam.cse28@gmail.com',
    phone: '01758752528',
    skill: {
        programming: 'C',
        windows: '10',
    }
}

const {name, address, skill:{programming}} = person;

console.log(name, address, programming);