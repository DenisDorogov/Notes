// 1 Lesson_____________________________________ ________________________________

let a = '3' + 2 - 1;
console.log(a);

// Деструктуризация массивов.
const [a1, a2] = arr;

const fullName = 'Dmitriy Bondarchuk';
const [firstName, lastName] = fullName.split(' '); // Разбили строку на массив элементов.

let k = 10;
let l = 12;
[k, l] = [l, k]; // Меняем перенные в массиве местами.

arr = [1, 2, 3, 4, 5, 6, 7];
const [,, a3, a4, ...rest] = arr; // Пропустили первые два элемента. Присвоили 3, 4 эл-ты и остаток массива (спред оператор ...rest)
//a3 == 3 a4 == 4 rest == [5, 6, 7]

const [, , , , , , , , a8 = 10 + 54] = arr; // 8 элемента в массиве нет, значит запишется значение по умолчанию (64)


// Деструктуризация объектов
const human = { // Исходный объект
    firstName: 'Luke',
    lastName: 'Vaider',
    address: { city: 'St-Pete', street: 'Nevsky'},
    roles: ['moderator', 'sith']
}
const { firstName, lastName } = human; // Присваиваем переменным firstName, lastName соответствующие значения из объекта human.
const {
    firstName: fName, // В переменную fName запишется свойство firstName из объекта human.
    lastName: lName, //
    address: { city, street }, //Деструктуризируем объект внутри.
       
    roles: [],
    age = 150, // Работают значения по умолчанию (но не в этом виде)
    ...rest // Объект в который запишется остаток исходного объекта.
} = human;

// Стрелочные функции
//        параметры  возвращаемое значение 
const sum = (a, b) => a + b; // Можно без return
const sum = (a, b) => { // если несколько операций, тогда return
    a++;
    b++;
    return a + b;
}

arr.filter(item => item % 2); // Метод массива который отбирает только чётные элементы массива. (один параметр функции можно без скобочек)

function getFullName(human, greeting) {
    return greeting + ', ' + human.firstName + ' ' + human.lastName;
} 
// Можно преобразовать следующим образом: 
function getFullName({firstName, lastName}, greeting = 'Hi', ...restArg ) { 
    return greeting + ', ' + firstName + ' ' + lastName;
} // Деструктурировали объект прямо в параметрах функции, и добавили значение по умолчанию. Остальные аргументы попадут в массив restArg благодаря спред оператору

//Шаблонные строки
`Hello, ${human.firstName}` // Добавляется значение переменной. "Hello, Dart"

const transform = str => str[0].toUpperCase(); // str[0] делаем потому что, в функцию приходит массив со строками.
transform`hi` // необычный вызов функции с аргументом из шаблонной строки.

//Идея применения:
const h1 = text => `<h1>${text[0]}</h1>`;
document.write(h1`Hello`);

//Практика






// lesson 2_____________________________________________________________________

1: 27 - записать код
1: 47


function Container() {
    this.id = 'something';
}

const c1 = new Container();
const c2 = new Container();

Container.prototype.getId = function () {
    return this.id;
}

// lesson 3_____________________________________________________________________

//callback функция

const async = (a, callback) => {
    setTimeout(() => {
        const b = a + 1;
        callback(b);
    }, 200);

    async = (5, (b) => {
        console.log(b);
    });
}
...............................
function sendRequest(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url); // настройка запроса
      xhr.send();

      xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
          callback(JSON.parse(xhr.responseText));
        }
      }
    }

    $button.addEventListener('click', () => {
      sendRequest('/phones.json', (items) => { (в качестве callback аргумента используем функцию, которую вызываем в конце sendRequest)
        $phones.innerHTML = items.map((item) => `<li>${item.name}: ${item.phone}</li>`).join('');
      });
    });
.................................

// Промис Promise
const promise = mew Promise((resolve, reject) => {
    // Здесь асинхронный код
    // при успехе вызываем функцию колбэк resolve()
    // при ошибке вызываем функцию reject()
});
promise.then(() => {});

const promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve ({ name: 'Vasya', }); }, 2000 ); // Имитируем задержку выполнения запроса.
});
// Как только промис меняет своё состояние с pending -> fulFilled или rejected срабатывает then
promise.then((human) => {human.age = 30; return human;}, () => {}).then( /* и так далее */)


// lesson 4_____________________________________________________________________

// Anastasia Mizki предложила
xhr.onload = () => resolve(JSON.parse(xhr.responseText));
xhr.onerror = () => reject(console.log('error'));
xhr.send();
});
}

RegExp - класс шаблонов
const regexp = new RegExp('abc', 'ig');
const regexp = /abc/ig;
// ASCII таблица

/\b/ //Граница слова 
/
\B / //Не граница слова
    /[a-zA-Z1-0]/

regexp.test('768764182') //true
str.match(/javascript/ig);
regexp.exec(str);
str.replace(/javascript/ig, 'Python');

// Lesson 5_____________________________________________________________________

const app = new Vue({
    el: '#app',
    data: [{
        name: 'Dmitriy'
    }, {
        weigth: 80
    }],
    methods: function () {},
    mounted: computed:
})

// Урок 6 _____________________________________________________________________

@click.pervent

const app = new Vue({
  el: '#app', // элемент в DOM в котором всё происходит.
  data: {
    name: 'Dmitry', // Данные, переменные и т.п. которые работают в приложении
    dbs: [
      {title: 'MySQL', weight: 13},
      {title: 'MongoDB', weight: 10},
      {title: 'Redis', weight: 1},
      {title: 'RethinkDB', weight: 3},
    ],
  },
  methods: {
    handleButtonClick() {
      const title = prompt('Input title');
      const weight = prompt('Input weight');
      this.dbs.push({ title, weight });
    }
  },
  mounted() {
    alert('mounted');
  },
  computed: {
    transformedName() {
      return ('Mr.' + name).toUpperCase();
    }
  }
});



// Урок 7 _____________________________________________________________________

const fs = require('fs'); // Подключение модулей (fs - файловая система)
fs.readFile('./db.json', 'utf-8', (err, data) => { // Читаем файл
    if (err) {
        console.log(err);
        return;
    }
    console.log(data) ж
});

// Делаем изменения в файле:
const products = JSON.parse(data); // Парсим json

products.push({
    id: 4,
    name: 'Зарядное устройство',
    price: 1500
}); // Добавляем новый товар.

fs.writeFile('./db/products.json', JSON.stringify(products), (err) => { // Записываем обратно в файл.
if (err) {
    console.log(err);
}
});
});


//Новый файл
// Делаем с помощю фреймворка Express
const express = require('express'); // подключаем
const fs = require('fs'); // файловая система
const bodyParser = require('body-parser');

const app = express(); // объект нашего приложения с настройками.

app.use(express.static('./public')); // Указываем, за какой папкой наблюдаем.
app.use(bodyParser.json()); // Утилита для отправки данных (нужно для POST)

app.get('/products', (req, res) => { // Формируем GET запрос продуктов.
    fs.readFile('./db/products.json', 'utf-8', (err, data) => {
        if (err) {
            return console.log(err);
        }

        res.send(data); // Возвращаем с сервера
    });
});

app.get('/cart', (req, res) => {
    fs.readFile('./db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            return console.log(err);
        }

        res.send(data);
    });
});

app.post('/cart', (req, res) => { Запрос с передачей данных
    fs.readFile('./db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            return console.log(err);
        }

        const cart = JSON.parse(data); // Распарсить корзину
        cart.push(req.body); // Всё что отправили, попадает в req.body

        fs.writeFile('./db/cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                return console.log(err);
            }

            res.send(req.body);
        });
    });
});

app.patch('/cart/:id', (req, res) => { //Патч запрос на изменение элемента с номером равным id (вместо :id будет значение этого id)
    fs.readFile('./db/cart.json', 'utf-8', (err, data) => {
        if (err) {
            return console.log(err);
        }

        let cart = JSON.parse(data);

        cart = cart.map((item) => { // проверяем наличие в корзине товара
            if (item.id === +req.params.id) { // Вытаскиваем параметр id
                return { ...item, ...req.body }; // Спред оператор
            }
            return item;
        });

        fs.writeFile('./db/cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                return console.log(err);
            }

            res.send(cart.find((item) => item.id === +req.params.id));
        });
    });
});

app.listen(3000, () => { // начинаем слушать 3000 порт
    console.log('Server has been started!');
});

// couchdb - server
// pouchdb - client

// rethinkdb - changefeeds

// Урок 8 -----------------------------------------------------------

['POST', 'PATCH', 'DELETE'].includes(reg.method) - условие

