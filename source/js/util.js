/* eslint-disable comma-dangle */
// ESCAPE
const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};
// Случайное число
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Проверка строки
const stringCount = (text, sign) => {
  return text.length <= sign;
};

// Случайный элемент массива
const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

// Проверка кода события
const isEscEvent = (evt) => {
  return evt.key === Keys.ESC || evt.key === Keys.ESCAPE;
};

// перемешиваем массив
const shuffleArray = (arr) => {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

// таймаут запроса
const DEBOUNCE_INTERVAL = 500;

const debounce = (cb) => {
  let lastTimeout = null;
  return (...args) => {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(() => {
      cb(...args);
    }, DEBOUNCE_INTERVAL);
  };
};

export {
  getRandomInt,
  stringCount,
  getRandomElementArr,
  isEscEvent,
  shuffleArray,
  debounce,
};
