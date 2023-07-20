// import { getRandomInt, getRandomElementArr } from './util.js';

const PHOTO_COUNT = 25;

const Likes = {
  MIN: 15,
  MAX: 200,
};

const Comments = {
  MIN: 1,
  MAX: 5,
};

const Avatars = {
  MIN: 1,
  MAX: 6,
};

const RandomId = {
  MIN: 1,
  MAX: 999,
};

let photos = [];

const names = [
  'Дима',
  'Тимофей',
  'Алексей',
  'Мария',
  'Кристина',
  'Вика',
  'Игорь',
  'Виктор',
  'Катя',
  'Денис',
];

const descriptionPhoto = [
  'Без фильтров',
  'Новая камера',
  'Зацените фотку!',
  'Хороший ракурс',
  'Просто так',
  'Из архива',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const addComments = () => {
  const comments = [];

  for (let i = 0; i < getRandomInt(Comments.MIN, Comments.MAX); i++) {
    comments.push({
      id: getRandomInt(RandomId.MIN, RandomId.MAX),
      avatar: 'img/avatar-' + getRandomInt(Avatars.MIN, Avatars.MAX) + '.svg',
      message: getRandomElementArr(messages),
      name: getRandomElementArr(names),
    });
  }

  return comments;
};

const addPhotos = () => {
  for (let i = 0; i < PHOTO_COUNT; i++) {
    photos.push({
      id: i + 1,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomElementArr(descriptionPhoto),
      likes: getRandomInt(Likes.MIN, Likes.MAX),
      comments: addComments(),
    });
  }
};

// addPhotos();

// export { photos };
