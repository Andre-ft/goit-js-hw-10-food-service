import css from './styles.css';

console.log(localStorage);

localStorage.setItem('new-data', 'bhdjndv');

const objForLocalStorage = [{ userName: 'Nik' }, { age: 25 }, { citizen: true }];

localStorage.setItem("data", JSON.stringify(objForLocalStorage));

const value = localStorage.getItem('data');
console.log('value', value);

const parsedValue = JSON.parse(value)
console.log('parsedValue )))=', parsedValue);