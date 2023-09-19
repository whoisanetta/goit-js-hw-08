import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';
let feedbackFormStateObj = {};

const form = document.querySelector('.feedback-form');

// const feedbackFormStateParsedJSON = JSON.parse(localStorage.getItem(LS_KEY));
const feedbackFormStateJSON = localStorage.getItem(LS_KEY);
// console.log(feedbackFormStateJSON);
let feedbackFormStateParsedJSON = JSON.parse(feedbackFormStateJSON);
// console.log(feedbackFormStateParsedJSON);

if (feedbackFormStateParsedJSON) {
  const feedbackFormStateEntries = Object.entries(feedbackFormStateParsedJSON);
  // console.log('entries: ', feedbackFormStateEntries);

  feedbackFormStateEntries.forEach(array => {
    const [key, value] = array;
    // console.log(key, value);

    document.querySelector(`[name='${key}']`).value = value;
  });
  feedbackFormStateObj = { ...feedbackFormStateParsedJSON };
}

form.addEventListener(
  'input',
  throttle(event => {
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

    const feedbackFormStateObjStringified =
      JSON.stringify(feedbackFormStateObj);
    localStorage.setItem(LS_KEY, feedbackFormStateObjStringified);
  }, 2000)
);

form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.removeItem(LS_KEY);

  const feedbackFormStateEntries = Object.entries(feedbackFormStateObj);
  feedbackFormStateEntries.forEach(array => {
    const [key, value] = array;
    if (value) document.querySelector(`[name='${key}']`).value = '';
  });

  console.log(feedbackFormStateObj);
});
