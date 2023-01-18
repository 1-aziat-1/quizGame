const data = {
  dataFive : [
  {
    id : 1,
    question : "5 В каком году Европейский Союз впервые ввел евро в качестве валюты? ",
    answer : "1999",
  },
  {
    id : 2,
    question : "5 Какой национальный цветок Японии? ",
    answer : " Сакура ",
  },
  {
    id : 3,
    question : "5 Сколько полос на флаге США? ",
    answer : "13",
  },
  {
    id : 4,
    question : "5 Какое национальное животное Австралии?",
    answer : " Красный кенгуру ",
  },
  {
    id : 5,
    question : "5 Сколько дней нужно, чтобы Земля совершила оборот вокруг Солнца?",
    answer : "365",
  },
  {
    id : 6,
    question : "5 В какой из следующих империй не было письменности: инков, ацтеков, египтян, римлян ",
    answer : " Инков ",
  },
  {
    id : 7,
    question : "5 До 1923 года как назывался турецкий город Стамбул?",
    answer : " Константинополь ",
  },
  {
    id : 8,
    question : "5 Кто открыл пенициллин?",
    answer : " Александр Флеминг ",
  },
  {
    id : 9,
    question : "5 В 1952 году президентом какой страны был предложен Альберт Эйнштейн ",
    answer : " Израиль ",
  },
  {
    id : 10,
    question : "5 Какое озеро часто называют жемчужиной итальянских озер?",
    answer : " Озеро Комо",
  },
  ],

  dataFour : [
  {
    id : 1,
    question : "4 Где находится самая маленькая кость в теле человека?",
    answer : " Ухо ",
  },
  {
    id : 2,
    question : "4 Как называется столица американского штата Калифорния ",
    answer : " Сакраменто ",
  },
  {
    id : 3,
    question : "4 Что длиннее, морская миля или географическая ",
    answer : " Географическая миля длиннее ",
  },
  {
    id : 4,
    question : "4 Какой элемент обозначается химическим символом Sn в периодической таблице ",
    answer : " Олово ",
  },
  {
    id : 5,
    question : "4 Из какого зерна делается японский спирт саке? ",
    answer : " Рис ",
  },
  {
    id : 6,
    question : "4 Какая валюта Дании ",
    answer : " Крона " 
  },
  {
    id : 7,
    question : "4 Что противоположно материи ",
    answer : " Антивещество ",
  },
  {
    id : 8,
    question : "4 В какой части вашего тела вы найдете крестообразную связку ",
    answer : "(Колено ",
  },
  {
    id : 9,
    question : "4 Сколько элементов в периодической таблице?",
    answer : "118",
  },
  {
    id : 10,
    question : "4 Какой теннисный турнир Большого шлема проводится на глиняном покрытии ",
    answer : " Открытый чемпионат Франции ",
  },
  ],

  dataThree : [
  {
    id : 1,
    question : "3 Как зовут человека, запустившего eBay в 1995 году ",
    answer : " Пьер Омидьяр ",
  },
  {
    id : 2,
    question : "3 Что означает «www» в браузере веб-сайтов ",
    answer : " Всемирная паутина ",
  },
  {
    id : 3,
    question : "3 Сколько постоянных зубов у собаки ",
    answer : "42 зуба ",
  },
  {
    id : 4,
    question : "3 Какое животное можно увидеть на логотипе Porsche ",
    answer : " Лошадь " ,
  },
  {
    id : 5,
    question : "3 На каком языке больше всего слов ",
    answer : " Английский ",
  },
  {
    id : 6,
    question : "3 Как называется животное, которое употребляет в пищу растения и мясо?",
    answer : " всеядное ",
  },
  {
    id : 7,
    question : "3 Какая кошка самая большая на планете ",
    answer : " тигр ",
  },
  {
    id : 8,
    question : "3 Какое сухопутное животное может открыть рот максимально широко ",
    answer : " бегемот ",
  },
  {
    id : 9,
    question : "3 Какое животное самое крупное на земле ",
    answer : " синий кит ",
  },
  {
    id : 10,
    question : "3 Какое млекопитающее умеет летать ",
    answer : " летучая мышь ",
  },
  ],
};


const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const questionItem = document.querySelectorAll('.question__item');
const modal = document.querySelector('.modal');
const modalQuestionText = document.querySelector('.modal__question-text');
const answerText = document.querySelector('.modal__answer-text');
const answerBtn = document.querySelector('.modal__answer-btn');
const markBtns = document.querySelectorAll('.mark__btn');
const questionBtns = document.querySelectorAll('.question__btn');


let numberArr = [];
let dataMark = '';

// создание массива чисел



function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arrGeneretic = (data) => {
  for (let i = 0; i < 5; ) {
    let chislo = getRandomInRange(0, data.length-1);
    if (!numberArr.includes(chislo)) {
      numberArr.push(chislo);
      i++;
    }
  }
};


////////////////////////////////////////

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

modal.addEventListener('click', (event) => {
  let target = event.target;
  if (target.classList.contains('modal__close')){
    modal.classList.remove('modal--active');
    answerText.style.opacity = '0';
  }
});

markBtns.forEach(item => {
  item.addEventListener('click', () => {
    mark = item.getAttribute('data-mark');
    dataMark = mark;
    screens[1].classList.add('up');
    questionItem.forEach(item => {
      item.classList.add(dataMark);
    });
  });
});

questionItem.forEach(item => {
  item.addEventListener('click', () => {
    if (numberArr.length > 0) {
      let numberItem = +(item.children[0].textContent) - 1;
      modal.classList.add('modal--active');
      let number = numberArr[numberItem];
      modalQuestionText.innerHTML = data[dataMark][number].question;
      answerText.innerHTML = data[dataMark][number].answer;
    }
  });
});

questionBtns.forEach(item => {
  item.addEventListener('click', () => {
    if(item.classList.contains('start')) {
      item.disabled = 'true';
      arrGeneretic(data[dataMark]);
    }
    console.log(numberArr);
    item.classList.add('question__btn--active');
  });
});




answerBtn.addEventListener('click', () => {
  answerText.style.opacity = '1.0';
});


// const start = () => {
//   arrGeneretic();
// };

// start();
