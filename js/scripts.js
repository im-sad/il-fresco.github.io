const data = [
  {
    about: 'о зарплате',
    text: 'Ну только если хуй в жопу, а бабки через год.'
  },
  {
    about: 'о капитализме',
    text: 'Если у компании нет денег и ничего более, то их нет.'
  },
  {
    about: 'о времени',
    text: 'Все произойдет ровно тогда когда сможет произойти.'
  },
  {
    about: 'о самостоятельности',
    text: 'Научись задавать правильные вопросы самому себе и будешь получать правильные ответы от других.'
  },
  {
    about: 'об утрате ',
    text: 'Потери уже свершились. Больше они уже быть не могут.'
  },
  {
    about: 'о бесмысленности бытия',
    text: 'Все уже написано 10 раз, вопросы заданы. Ответы я не получил.'
  },
  {
    about: 'об ошибках',
    text: 'Не ошибается только тот, кто ничего не делает.'
  },
  {
    about: 'о готовности отдавать',
    text: 'Жду вопросов и дам ответы.'
  },
  {
    about: 'о тщетности бытия',
    text: 'Остановите поезд, я сойду.'
  },
]


document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('js-reload');
  const about = document.getElementById('js-about');
  const content = document.getElementById('js-content');

  btn.addEventListener('click', () => getCite());

  getCite();

  function getCite() {
    const citeNum = randomInteger(0, data.length - 1);

    about.innerHTML = data[citeNum].about;
    content.innerHTML = data[citeNum].text;
  }
});


function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}