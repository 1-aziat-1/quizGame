const data = {
  dataFive: [
    {
      id: 1,
      question: "5 В каком году Европейский Союз впервые ввел евро в качестве валюты? ",
      answer: "1999",
    },
    {
      id: 2,
      question: "5 Какой национальный цветок Японии? ",
      answer: " Сакура ",
    },
    {
      id: 3,
      question: "5 Сколько полос на флаге США? ",
      answer: "13",
    },
    {
      id: 4,
      question: "5 Какое национальное животное Австралии?",
      answer: " Красный кенгуру ",
    },
    {
      id: 5,
      question: "5 Сколько дней нужно, чтобы Земля совершила оборот вокруг Солнца?",
      answer: "365",
    },
    {
      id: 6,
      question: "5 В какой из следующих империй не было письменности: инков, ацтеков, египтян, римлян ",
      answer: " Инков ",
    },
    {
      id: 7,
      question: "5 До 1923 года как назывался турецкий город Стамбул?",
      answer: " Константинополь ",
    },
    {
      id: 8,
      question: "5 Кто открыл пенициллин?",
      answer: " Александр Флеминг ",
    },
    {
      id: 9,
      question: "5 В 1952 году президентом какой страны был предложен Альберт Эйнштейн ",
      answer: " Израиль ",
    },
    {
      id: 10,
      question: "5 Какое озеро часто называют жемчужиной итальянских озер?",
      answer: " Озеро Комо",
    },
  ],

  dataFour: [
    {
      id: 1,
      question: "4 Где находится самая маленькая кость в теле человека?",
      answer: " Ухо ",
    },
    {
      id: 2,
      question: "4 Как называется столица американского штата Калифорния ",
      answer: " Сакраменто ",
    },
    {
      id: 3,
      question: "4 Что длиннее, морская миля или географическая ",
      answer: " Географическая миля длиннее ",
    },
    {
      id: 4,
      question: "4 Какой элемент обозначается химическим символом Sn в периодической таблице ",
      answer: " Олово ",
    },
    {
      id: 5,
      question: "4 Из какого зерна делается японский спирт саке? ",
      answer: " Рис ",
    },
    {
      id: 6,
      question: "4 Какая валюта Дании ",
      answer: " Крона "
    },
    {
      id: 7,
      question: "4 Что противоположно материи ",
      answer: " Антивещество ",
    },
    {
      id: 8,
      question: "4 В какой части вашего тела вы найдете крестообразную связку ",
      answer: "(Колено ",
    },
    {
      id: 9,
      question: "4 Сколько элементов в периодической таблице?",
      answer: "118",
    },
  ],

  dataThree: [
    {
      id: 1,
      question: "3 Как зовут человека, запустившего eBay в 1995 году ",
      answer: " Пьер Омидьяр ",
    },
    {
      id: 2,
      question: "3 Что означает «www» в браузере веб-сайтов ",
      answer: " Всемирная паутина ",
    },
    {
      id: 3,
      question: "3 Сколько постоянных зубов у собаки ",
      answer: "42 зуба ",
    },
    {
      id: 4,
      question: "3 Какое животное можно увидеть на логотипе Porsche ",
      answer: " Лошадь ",
    },
    {
      id: 5,
      question: "3 На каком языке больше всего слов ",
      answer: " Английский ",
    },
    {
      id: 6,
      question: "3 Как называется животное, которое употребляет в пищу растения и мясо?",
      answer: " всеядное ",
    },
    {
      id: 7,
      question: "3 Какая кошка самая большая на планете ",
      answer: " тигр ",
    },
    {
      id: 8,
      question: "3 Какое сухопутное животное может открыть рот максимально широко ",
      answer: " бегемот ",
    },
  ],
};

const screens = document.querySelectorAll('.screen');
const questionItemMark = document.querySelectorAll('.question__item-text');
// const overlay = document.querySelector('.overlay');
// const modal = document.querySelector('.modal');
const markBtns = document.querySelectorAll('.mark__btn');
const questionBtns = document.querySelectorAll('.question__btn');
const questionPoint = document.querySelectorAll('.question__item-point');
const questionResultPoint = document.querySelector('.question__result-point');
const questionResultMark = document.querySelector('.question__result-mark');
// const modalQuestionText = document.querySelector('.modal__question-text');
// const answerText = document.querySelector('.modal__answer-text');
const answerBtn = document.querySelector('.modal__answer-btn');
const modalBtnSPoint = document.querySelector('.modal__mark-list');
const modalBtnPoint = document.querySelectorAll('.modal__mark-item');
const btnStart = document.querySelector('.start');
const btnChange = document.querySelector('.change');
const btnGame = document.querySelector('.warning');
const modalGame = document.querySelector('.modal__game');
const modalGameQuestion = document.querySelector('.modal__game .modal__question-text');
// const modalMark = document.querySelector('.modal__game .modal__mark');
const modalGameAnswer = document.querySelector('.modal__game .modal__answer-text');
const modalGameBtn = document.querySelectorAll('.modal__game-mark-item');
const timerMin = document.querySelector('.timer__minutes');
const timerSec = document.querySelector('.timer__seconds');
const timerModMin = document.querySelector('.timer__modminutes');
const timerModSec = document.querySelector('.timer__modseconds');

let numberQuestionItem = '';
let numberArr = [];
let localDataMark = '';
let dataMark = '';
let setintervalID = '';
let mark = '';
let resultPoint = 0;
// правила оценки

const arrMark = {
  dataFive: {
    "5": 5,
    "3": 4,
    "0": 0,
  },
  dataFour: {
    "5": 4,
    "3": 3,
    "0": 0,
  },
  dataThree: {
    "5": 3,
    "3": 3,
    "0": 0,
  },
};

const arrPoint = {
  dataFive: ['dataFive', 'dataFive', 'dataFour', 'dataFour', 'dataThree', 'dataFive'],
  dataFour: ['dataFour', 'dataFour', 'dataThree', 'dataThree', 'dataThree', 'dataFour'],
  dataThree: ['dataThree', 'dataThree', 'dataThree', 'dataThree', 'dataThree', 'dataThree'],
};

//создание модального окна

const overlay = document.createElement('div');
overlay.className = 'overlay';

const modal = document.createElement('div');
modal.className = 'modal';

const modalContainer = document.createElement('div');
modalContainer.className = 'modal__container';

const modalQuestion = document.createElement('div');
modalQuestion.className = 'modal__question';

const modalQuestionTitle = document.createElement('p');
modalQuestionTitle.className = 'modal__question-title';
modalQuestionTitle.textContent = 'Вопрос:';

const modalQuestionText = document.createElement('p');
modalQuestionText.className = 'modal__question-text';

modalQuestion.append(modalQuestionTitle, modalQuestionText);

const modalAnswer = document.createElement('div');
modalAnswer.className = 'modal__answer';

const modalAnswerBtn = document.createElement('button');
modalAnswerBtn.className = 'modal__answer-btn';
modalAnswerBtn.textContent = 'Ответ';


const modalAnswerInner = document.createElement('div');
modalAnswerInner.className = 'modalAnswerInner';

const modalAnswerText = document.createElement('p');
modalAnswerText.className = 'modal__answer-text';
modalAnswerInner.append(modalAnswerText);

modalAnswer.append(modalAnswerBtn, modalAnswerInner);

const modalMark = document.createElement('div');
modalMark.className = 'modal__mark';

const modalMarkList = document.createElement('div');
modalMarkList.className = 'modal__mark-list';

const modalMarkItemFive = document.createElement('button');
modalMarkItemFive.className = 'modal__mark-item green';
modalMarkItemFive.setAttribute('data-point', '5');
modalMarkItemFive.textContent = 'Полный ответ';

const modalMarkItemFour = document.createElement('button');
modalMarkItemFour.className = 'modal__mark-item yellow';
modalMarkItemFour.setAttribute('data-point', '3');
modalMarkItemFour.textContent = 'Неполный';

const modalMarkItemTwo = document.createElement('button');
modalMarkItemTwo.className = 'modal__mark-item red';
modalMarkItemTwo.setAttribute('data-point', '0');
modalMarkItemTwo.textContent = 'Неверный';

modalMarkList.append(modalMarkItemFive, modalMarkItemFour, modalMarkItemTwo)
modalMark.append(modalMarkList);

const modalClose = document.createElement('span');
modalClose.className = 'modal__close';

modalContainer.append(modalQuestion, modalAnswer, modalMark, modalClose);
modal.append(modalContainer);
overlay.append(modal);

const overlayNew = overlay.cloneNode(true);

// создание массива чисел

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const newRandomQuestion = (mark) => {
  let chislo = getRandomInRange(0, data[mark].length - 1);
  if (!numberArr.includes(chislo)) newRandomQuestion(mark);
  return chislo;
}

const questNumbersGeneretics = (markArr) => {
  for (let i = 0; numberArr.length < 5;) {
    let chislo = getRandomInRange(0, data[markArr[i]].length - 1);
    if (!numberArr.includes(chislo)) {
      i++;
      numberArr.push(chislo)
    }
  }
  return numberArr;
};

//таймер 

const timer = (minutes, seconds, elemMin, elemSec) => {
  setintervalID = setInterval(() => {
    if (seconds === 0) {
      elemMin.textContent = `0`;
      elemSec.textContent = `00`;
      clearInterval(setintervalID);
      questionItemMark.forEach(item => item.style.display = 'none');
      if (modalGame.classList.contains('is-active')) {
        modalMark.classList.remove('is-active');
      }
      return;
    }
    if (seconds % 60 === 0) {
      minutes = minutes - 1;
      elemMin.textContent = minutes;
    }
    seconds = seconds - 1;
    if (seconds % 60 < 10) {
      elemSec.textContent = `0${seconds % 60}`;
    } else {
      elemSec.textContent = seconds % 60;
    }
  }, 1000);
};

// задаем цвет выбора вопроса (определяем оценку)

markBtns.forEach(item => {
  item.addEventListener('click', () => {
    let markArr = arrPoint[item.dataset.mark];
    questNumbersGeneretics(markArr);
    screens[1].classList.add('up');
    questionItemMark.forEach((markBtn, index) => {
      markBtn.classList.add(markArr[index]);
      markBtn.setAttribute('data-mark', markArr[index])
    });
    btnGame.setAttribute('data-mark', item.dataset.mark)
    btnGame.disabled = 'true';
    btnGame.style.display = 'block';
    if (item.classList.contains('mark__btn--three')) {
      btnGame.style.display = 'none';
    }
  });
});

// клик на вопросы

questionItemMark.forEach(item => {
  item.addEventListener('click', ({ target }) => {
    if (!btnStart.disabled) return;
    if (numberArr.length > 0) {
      document.body.append(overlay);
      mark = target.dataset.mark;
      numberQuestionItem = +target.textContent - 1;
      modalQuestionText.textContent = data[mark][numberArr[numberQuestionItem]].question;
      modalAnswerText.textContent = data[mark][numberArr[numberQuestionItem]].answer;
    }
  });
});

const modalClicl = (target) => {

}

// close модального окна

overlay.addEventListener('click', ({ target }) => {
  if (target === modalAnswerBtn) {
    modalAnswerText.style.opacity = '1';
  }

  if (target.classList.contains('modal__close') ||
    !target.closest('.modal')) {
    overlay.remove();
    modalAnswerText.style.opacity = '0';
    modalMarkList.style.display = 'flex';
  }

  if (target.matches('.modal__mark-item')) {
    const point = target.dataset.point;
    if (point > 0) {
      doMark(point)
    } else if (mark !== 'dataThree') {
      opneNewModal();
    } else {
      doMark(0);
    }
  }
});

overlayNew.addEventListener('click', ({ target }) => {
  const modalAnswerBtn = overlayNew.querySelector('.modal__answer-btn');
  const modalAnswerText = overlayNew.querySelector('.modal__answer-text');

  if (target === modalAnswerBtn) {
    modalAnswerText.style.opacity = '1';
  }

  if (target.classList.contains('modal__mark-item')) {
    modalAnswerText.style.opacity = '0';
    overlayNew.remove();
  }

  if (target.matches('.modal__mark-item')) {
    const point = target.dataset.point;
    questionPoint.forEach((item, index) => {
      if (index === numberQuestionItem) {
        const resMark = arrMark[mark][point];
        item.textContent = resMark;
        resultPoint += resMark;
        questionResultPoint.textContent = resultPoint;
        item.classList.add('question__item-point--active');
      }
    })
    questionItemMark[numberQuestionItem].disabled = true;
    questionItemMark[numberQuestionItem].classList.add('question__item--disabled');
  }
})

// оценка в модальном окне)

const doMark = (point) => {
  questionPoint.forEach((item, index) => {
    if (index === numberQuestionItem) {
      const resMark = arrMark[mark][point];
      item.textContent = resMark;
      resultPoint += resMark;
      questionResultPoint.textContent = resultPoint;
      item.classList.add('question__item-point--active');
    }
  })
  modalMarkList.style.display = 'none';
  questionItemMark[numberQuestionItem].disabled = true;
  questionItemMark[numberQuestionItem].classList.add('question__item--disabled');
};

const editOverlayNew = () => {
  const questionText = overlayNew.querySelector('.modal__question-text');
  const answerText = overlayNew.querySelector('.modal__answer-text');
  if (mark === 'dataFive') { mark = 'dataFour' }
  else if (mark === 'dataFour') { mark = 'dataThree' }
  let chislo = newRandomQuestion(mark);
  questionText.textContent = data[mark][chislo].question;
  answerText.textContent = data[mark][chislo].answer;
}

const opneNewModal = () => {
  overlay.remove()
  document.body.append(overlayNew);
  editOverlayNew();
}



// выставление оценки (кнопк в модальном окне) и выставление point

// modalBtnPoint.forEach(item => {

//   item.addEventListener('click', ({ target }) => {
//     point = item.getAttribute('data-point');
//     console.log(numberQuestionItem);
//     
//   });
// });

btnGame.addEventListener('click', () => {
  let mark = btnGame.dataset.mark;
  let chislo = newRandomQuestion(mark);
  clearInterval(setintervalID);
  questionItemMark.forEach(item => item.style.display = 'none');
  const seconds = 60;
  const minutes = 1;
  timer(minutes, seconds, timerModMin, timerModSec);
  modalGame.classList.add('is-active');
  modalGameQuestion.textContent = data[mark][chislo].question;
  modalGameAnswer.textContent = data[mark][chislo].answer;
});

modalGame.addEventListener('click', ({target}) => {
  console.log(target);
  if (target.classList.contains('modal__answer-btn')) {
    modalGameAnswer.style.opacity = '1.0';
    modalMark.style.display = 'none';
  }
  if (target.classList.contains('modal__close')){
    modalGame.classList.remove('is-active');
    modalGameAnswer.style.opacity = '0';
    clearInterval(setintervalID);
    btnGame.disabled = true;
  }
})

modalGameBtn.forEach(item => {
  item.addEventListener('click', () => {
    let mark = btnGame.dataset.mark;
    if (item.textContent === 'Правильный') {
      resultPoint += arrMark[mark]['5'];
      questionResultPoint.textContent = resultPoint;
    } else {
      resultPoint += -arrMark[mark]['5'];
      questionResultPoint.textContent = resultPoint;
    }
    clearInterval(setintervalID);
    modalGame.classList.remove('.is-active');
    btnGame.disabled = true;
  })
});

// выставление итоговой оценки 

questionResultMark.addEventListener('click', () => {
  if (questionResultPoint.textContent !== '') {
    if (resultPoint < 15) {
      questionResultMark.textContent = '2';
    }
    if (resultPoint >= 15 && resultPoint < 17) {
      questionResultMark.textContent = '3';
    }
    if (resultPoint >= 17 && resultPoint < 21) {
      questionResultMark.textContent = '4';
    }
    if (resultPoint >= 21) {
      questionResultMark.textContent = '5';
    }
  }
});

// Запуск приложения по кнопкам

btnStart.addEventListener('click', () => {
  btnStart.disabled = 'true';
  btnStart.classList.add('question__btn--active');
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
  timerModMin.textContent = '01';
  timerModSec.textContent = '00';
  clearInterval(setintervalID);
  btnGame.disabled = '';
  btnGame.style.display = 'block';
  modalGameAnswer.style.opacity = '0';
  modalMark.style.display = 'flex';
});

