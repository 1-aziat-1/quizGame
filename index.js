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


const startProgramm = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const questionItemMark = document.querySelectorAll('.question__item-text');
const modal = document.querySelector('.modal');
const markBtns = document.querySelectorAll('.mark__btn');
const questionBtns = document.querySelectorAll('.question__btn');
const questionPoint = document.querySelectorAll('.question__item-point');
const questionResultPoint = document.querySelector('.question__result-point');
const questionResultMark = document.querySelector('.question__result-mark');
const modalQuestionText = document.querySelector('.modal__question-text');
const answerText = document.querySelector('.modal__answer-text');
const answerBtn = document.querySelector('.modal__answer-btn');
const modalBtnPoint = document.querySelectorAll('.modal__mark-item');
const btnStart = document.querySelector('.start');
const btnChange = document.querySelector('.change');
const btnGame = document.querySelector('.warning');
const modalGame = document.querySelector('.modal__game');
const modalGameQuestion = document.querySelector('.modal__game .modal__question-text');
const modalGameAnswer = document.querySelector('.modal__game .modal__answer-text');
const modalGameBtn = document.querySelectorAll('.modal__game-mark-item');
const timerMin = document.querySelector('.timer__minutes');
const timerSec = document.querySelector('.timer__seconds');

let numberQuestionItem = '';
let numberArr = [];
let localDataMark = '';
let dataMark = '';
let setintervalID = '';

// правила оценки

const arrMark = {
  dataFive : {
    "5" : 5,
    "3" : 2.5,
    "0" : 0,
  },
  dataFour : {
    "5" : 4,
    "3" : 2,
    "0" : 0,
  },
  dataThree : {
    "5" : 3,
    "3" : 1.5,
    "0" : 0,
  },
};

const arrPoint = {
  dataFive : ['dataFive','dataFive','dataFour','dataFour','dataThree','dataFive'],
  dataFour : ['dataFour','dataFour','dataThree','dataThree','dataThree','dataFour'],
  dataThree : ['dataThree','dataThree','dataThree','dataThree','dataThree','dataThree'],
};

let resultPoint = 0;

// создание массива чисел

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arrGeneretic = (mark) => {
  for (let i = 0; i < 6; ) {
    let chislo = getRandomInRange(0, data[arrPoint[mark][i]].length-1);
    if (!numberArr.includes(chislo)) {
      numberArr.push(chislo);
      i++;
    }
  }
};

//таймер 

const timer = (minutes, seconds, elemMin, elemSec) => {
  const intervalId = setInterval(() => {
    setintervalID = intervalId;
    if(seconds === 0) {
      elemMin.textContent = `0`;
      elemSec.textContent = `00`;
      clearInterval(intervalId);
      questionItemMark.forEach(item => item.style.display = 'none');
      return ;
    }
    if(seconds%60===0){
      minutes = minutes - 1;
      elemMin.textContent = minutes;
    }
    seconds = seconds - 1;
    if (seconds%60<10) {
      elemSec.textContent = `0${seconds%60}`;
    }else {
      elemSec.textContent = seconds%60;
    }
  },1000);

};


// запуск программы (страница 1 кнопка старт)

startProgramm.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});


// задаем цвет выбора вопроса (определяем оценку)

markBtns.forEach(item => {
  item.addEventListener('click', () => {
    dataMark = item.getAttribute('data-mark');
    markArr = arrPoint[dataMark];
    screens[1].classList.add('up');
    questionItemMark.forEach((markBtn, index) => {
        markBtn.classList.add(markArr[index]);
    });
    btnGame.disabled = 'true';
    if (item.classList.contains('mark__btn--three')){
      btnGame.style.display = 'none';
    }
  });
});


// задаем вопрос и ответ 

questionItemMark.forEach(item => {
  item.addEventListener('click', () => {
    if (numberArr.length > 0){
      modal.classList.add('modal--active');
      numberQuestionItem = +(item.textContent) - 1;
      let number = numberArr[numberQuestionItem];
      localDataMark = item.classList[1];
      modalQuestionText.innerHTML = data[localDataMark][number].question;
      answerText.innerHTML = data[localDataMark][number].answer;
    }
  });
});

// раскрытие модального окна

modal.addEventListener('click', (event) => {
  let target = event.target;
  if (target.classList.contains('modal__close')){
    modal.classList.remove('modal--active');
    answerText.style.opacity = '0';
  }
});



// выставление оценки (кнопк в модальном окне) и выставление point

modalBtnPoint.forEach(item => {
  item.addEventListener('click', () => {
    point = item.getAttribute('data-point');
    questionPoint[numberQuestionItem].classList.add('question__item-point--active');
    questionPoint[numberQuestionItem].textContent = arrMark[localDataMark][point];
    resultPoint += arrMark[localDataMark][point];
    questionResultPoint.textContent =  resultPoint;
    modal.classList.remove('modal--active');
    questionItemMark[numberQuestionItem].disabled = true;
    questionItemMark[numberQuestionItem].classList.add('question__item--disabled');
    answerText.style.opacity = '0';
  });
});

btnGame.addEventListener('click', () => {
  modalGame.classList.add('modal--active');
  modalGameQuestion.textContent = data[dataMark][numberArr[5]].question;
  modalGameAnswer.textContent = data[dataMark][numberArr[5]].answer;
});

modalGame.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('modal__answer-btn')) {
    modalGameAnswer.style.opacity = '1.0';
  }
  if (target.classList.contains('modal__close')){
    modalGame.classList.remove('modal--active');
    modalGameAnswer.style.opacity = '0';
  }
})

modalGameBtn.forEach(item => {
  item.addEventListener('click', () => {
    if (item.textContent === 'Правильный') {
      resultPoint += arrMark[dataMark]['5'];
      questionResultPoint.textContent =  resultPoint;
    } else {
      resultPoint += -arrMark[dataMark]['5'];
      questionResultPoint.textContent =  resultPoint;
    }
    modalGame.classList.remove('modal--active');
    btnGame.disabled = true;
  })
});
// выставление итоговой оценки 

questionResultMark.addEventListener('click', () => {
  if(questionResultPoint.textContent !== ''){
    if (resultPoint < 12) {
      questionResultMark.textContent = '2';
    }
    if (resultPoint >=12 && resultPoint < 16) {
      questionResultMark.textContent = '3';
    }
    if (resultPoint >=16 && resultPoint < 20) {
      questionResultMark.textContent = '4';
    }
    if (resultPoint >= 20) {
      questionResultMark.textContent = '5';
    }
  }
});




// открытие ответа

answerBtn.addEventListener('click', () => {
  answerText.style.opacity = '1.0';
});



// Запуск приложения по кнопкам

btnStart.addEventListener('click', () => {
  btnStart.disabled = 'true';
  btnStart.classList.add('question__btn--active');
  arrGeneretic(dataMark);
  btnGame.disabled = '';
  const seconds = 180;
  const minutes = Math.floor(seconds/60);
  timer(minutes,seconds,timerMin,timerSec);
});

btnChange.addEventListener('click', () => {
  numberArr = [];
  btnStart.disabled = '';
  btnStart.classList.remove('question__btn--active');
  screens[1].classList.remove('up');
  questionItemMark.forEach(item => {
    item.className = 'question__item-text';
  });
  questionPoint.forEach(item => {
    item.classList.remove('question__item-point--active');
    item.textContent = '';
  });
  resultPoint = 0;
  questionResultPoint.textContent = '';
  questionResultMark.textContent = "оценка";
  questionItemMark.forEach(item => {
    item.disabled = '';
    item.classList.remove('question__item--disabled');
  });
  questionItemMark.forEach(item => item.style.display = 'block');
  timerMin.textContent = '03';
  timerSec.textContent = '00';
  clearInterval(setintervalID);
  btnGame.disabled = '';
  btnGame.style.display = 'block';
  modalGameAnswer.style.opacity = '0';
});

// btnRestart.addEventListener('click', () => {
//   numberArr = [];
//   btnStart.disabled = '';
//   btnStart.classList.remove('question__btn--active');
//   questionPoint.forEach(item => {
//     item.classList.remove('question__item-point--active');
//     item.textContent = '';
//   });
//   resultPoint = 0;
//   questionResultPoint.textContent = '';
//   questionResultMark.textContent = "оценка";
//   questionItemMark.forEach(item => {
//     item.disabled = '';
//     item.classList.remove('question__item--disabled');
//   });
// });


