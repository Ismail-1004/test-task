// Функция с фильтрами на числа
const filterByNumbers = (list) => list.filter(el => !isNaN(el))

// Первый вариант 
function accum (str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        newStr += i !== 0 ? '-' + str[i].toUpperCase() : str[i].toUpperCase() 
        for (let j = 0; j < str.indexOf(str[i]); j++) {
            newStr += str[i]
        }
    }
}

// Второй вариант 
function accum2(str) {
    let parts = [];
    for (let i = 0; i < str.length; i++) {
        parts.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i));
    }
    return parts.join('-');
}

const products = [
  { name: 'Футболка', price: 20, quantity: 2 },
  { name: 'Джинсы', price: 50, quantity: 1 },
  { name: 'Носки', price: 5, quantity: 10 },
  { name: 'Штаны', price: 30, quantity: 1 }
];


function calcSum (productsList) {
    return productsList.map(el => el.price *= el.quantity).reduce((acc, el) => acc + el, 0)
}