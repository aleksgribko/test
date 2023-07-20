function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const photos = [];

// генерируем объекты и добавляем их в массив photos
for (let i = 1; i <= 25; i++) {
  const url = `photos/${i}.jpg`;
  const description = `Описание фотографии ${i}`;
  const likes = getRandomInt(15, 200);
  const comments = [];

  // генерируем случайное количество комментариев (от 1 до 5)
  const numComments = getRandomInt(1, 5);
  for (let j = 1; j <= numComments; j++) {
    const comment = {
      id: getRandomInt(1, 1000),
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: '',
      name: '',
    };

    // генерируем случайный текст комментария
    const sentences = [
      'Всё отлично!',
      'В целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    ];
    const message = sentences[getRandomInt(0, sentences.length - 1)];

    // генерируем случайное имя комментатора
    const names = ['Александр', 'Иван', 'Мария', 'Елена', 'Дмитрий', 'Анна'];
    const name = names[getRandomInt(0, names.length - 1)];

    comment.message = message;
    comment.name = name;
    comments.push(comment);
  }

  const photo = {
    id: i,
    url: url,
    description: description,
    likes: likes,
    comments: comments,
  };

  photos.push(photo);
}

// выводим массив photos в консоль
// console.log(photos);
