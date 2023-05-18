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

const markBtns = document.querySelector('.mark__btn-list');
const resMarkCantainer = document.querySelector('.res__mark-cantainer');
const markBtnList = document.querySelector('.mark__btn-list');
const markTitle = document.querySelector('.mark__title');
const markRes = document.querySelector('.mark__res');
const back = resMarkCantainer.querySelector('.mark__btn--back');
// // правила оценки
const arrMark = {
  dataFive: {
    "5": 5,
    "3": 4,
    "0": 0,
  },
  dataFour: {
    "5": 4,
    "3": 4,
    "0": 2,
  },
  dataThree: {
    "5": 3,
    "3": 3,
    "0": 2,
  },
};


let resMark = 0;
let mark = 0;

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

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const newRandomQuestion = (mark) => {
  let chislo = getRandomInRange(0, data[mark].length - 1);
  return chislo;
};


const editOverlayNew = () => {
  const questionText = overlayNew.querySelector('.modal__question-text');
  const answerText = overlayNew.querySelector('.modal__answer-text');
  if (mark === 'dataFive') { mark = 'dataFour' }
  else if (mark === 'dataFour') { mark = 'dataThree' }
  let chislo = newRandomQuestion(mark);
  questionText.textContent = data[mark][chislo].question;
  answerText.textContent = data[mark][chislo].answer;
};

const opneNewModal = () => {
  overlay.remove();
  document.body.append(overlayNew);
  editOverlayNew();
};

overlayNew.addEventListener('click', ({ target }) => {
  const modalAnswerBtn = overlayNew.querySelector('.modal__answer-btn');
  const modalAnswerText = overlayNew.querySelector('.modal__answer-text');

  if (target.classList.contains('modal__close') ||
  !target.closest('.modal')) {
  overlayNew.remove();
  modalAnswerText.style.opacity = '0';
  }

  if (target === modalAnswerBtn) {
    modalAnswerText.style.opacity = '1';
  }

  if (target.classList.contains('modal__mark-item')) {
    const point = target.dataset.point;
    modalAnswerText.style.opacity = '0';
    overlayNew.remove();
    markRes.textContent = arrMark[mark][point];
    console.log(resMark);
  }
});

markBtns.addEventListener('click', ({
  target
}) => {
  if (!target.classList.contains('mark__btn--back')) {
    markBtnList.style.display = 'none';
    resMarkCantainer.style.display = 'flex';
    markTitle.textContent = 'Ваша оценка';
    mark = target.dataset.mark;
    let chislo = newRandomQuestion(mark);
    modalQuestionText.textContent = data[mark][chislo].question;
    modalAnswerText.textContent = data[mark][chislo].answer;
    document.body.append(overlay);
  }
});

// close модального окна

overlay.addEventListener('click', ({ target }) => {
  if (target === modalAnswerBtn) {
    modalAnswerText.style.opacity = '1';
  }

  if (target.classList.contains('modal__close') ||
    !target.closest('.modal')) {
    modalAnswerText.style.opacity = '0';
    overlay.remove();
  }

  if (target.matches('.modal__mark-item')) {
    const point = target.dataset.point;
    if (mark == 'dataThree') {
      markRes.textContent = arrMark[mark][point];
      overlay.remove();
      console.log(resMark);
    } else if (point > 0) {
      markRes.textContent = arrMark[mark][point];
      overlay.remove();
      console.log(resMark);
    } else {
      modalAnswerText.style.opacity = '0';
      opneNewModal();
    }
  }
});

back.addEventListener('click', () => {
  markBtnList.style.display = 'flex';
  resMarkCantainer.style.display = 'none';
  markTitle.textContent = 'Выберите оценку';
  modalAnswerText.style.opacity = '0';
});