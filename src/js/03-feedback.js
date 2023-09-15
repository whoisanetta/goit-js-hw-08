// form.addEventListener('');

// function saveFormState() {
//   const formState = {
//     email: emailInput.value,
//     message: messageTextarea.value,
//   };
//   localStorage.setItem('feedback-form-state', JSON.stringify(formState));
// }

// function print(value) {
//   console.log(value);
// }
// print('hello world');

// function returnSmth(value) {
//   return value;
// }
// const pisun = returnSmth(9);
// console.log(pisun);

// const smth = returnSmth(6);
// print(smth);
// print(returnSmth(9));

// const user = {
//   age: 18,
//   name: 'Vasiliy',
// };
// const userStringified = JSON.stringify(user);
// console.log(user);
// console.log(JSON.stringify(user));
// console.log(userStringified);

// const number = 75;
// console.log(typeof number);
// console.log(typeof JSON.stringify(number));

// function printName(name) {
//   console.log(name);
// }

// printName('Ivan');

// function callbackExample(value, callback) {
//   callback(value);
// }

// callbackExample('anya', printName);

// const book = printName;
// book('danya');

// const obj = {};
// obj.name = 'Lida';
// console.log(obj);

// console.log(obj['name']);

// const name = 'name';
// console.log(obj[name]);

// obj['age'] = 18;
// console.log(obj);

//[]

// const array = [1, 2, 3, 4, 5];
// const [one, , three] = array;
// const two = array[1];
// console.log(one, two, three);

import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';
let feedbackFormStateObj = {};

const form = document.querySelector('.feedback-form');
const btn = document.querySelector('.btn');

// const feedbackFormStateParsedJSON = JSON.parse(localStorage.getItem(LS_KEY));
const feedbackFormStateJSON = localStorage.getItem(LS_KEY);
// console.log(feedbackFormStateJSON);
let feedbackFormStateParsedJSON = JSON.parse(feedbackFormStateJSON);
console.log(feedbackFormStateParsedJSON);

if (feedbackFormStateParsedJSON) {
  const feedbackFormStateEntries = Object.entries(feedbackFormStateParsedJSON);
  console.log('entries: ', feedbackFormStateEntries);

  feedbackFormStateEntries.forEach(array => {
    const [key, value] = array;
    console.log(key, value);

    document.querySelector(`[name='${key}']`).value = value;
  });
  feedbackFormStateObj = { ...feedbackFormStateParsedJSON };
}

form.addEventListener('input', event => {
  const name = event.target.name;
  const text = event.target.value;
  feedbackFormStateObj[`${name}`] = text;
  console.log(feedbackFormStateObj);

  //   const name = event.target.name;
  //   const text = event.target.value;
  //   const feedbackFormStateObj = {};
  //   if (name === 'email') {
  //     feedbackFormStateObj.email = text;
  //   } else {
  //     feedbackFormStateObj.message = text;
  //}

  //   const feedbackFormStateObj2 = {
  //     name: event.target.name,
  //     message: event.target.value,
  //   };
  //   console.log(feedbackFormStateObj2);

  //   localStorage.setItem(
  //     'feedback-form-state',
  //     JSON.stringify(feedbackFormStateObj)
  //   );
  //localStorage.setItem(LS_KEY, JSON.stringify(feedbackFormStateObj));

  const feedbackFormStateObjStringified = JSON.stringify(feedbackFormStateObj);
  localStorage.setItem(LS_KEY, feedbackFormStateObjStringified);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('aaa');
});
