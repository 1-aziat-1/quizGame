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
    {
      id: 10,
      question: "4 Сколько элементов в периодической таблице?",
      answer: "119",
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
    {
      id: 9,
      question: "3 Какое сухопутное животное может открыть рот максимально широко ",
      answer: " бегемотsss ",
    },
    {
      id: 10,
      question: "3 Какое сухопутное животное может открыть рот максимально широко ",
      answer: " бегемот111 ",
    },
  ],
};

const screens = document.querySelectorAll('.screen');
const btnStart = document.querySelector('.seminar__btn-start');
const btnQuestion = document.querySelector('.seminar__btn-question');
const btnBack = document.querySelector('.seminar__question-wrapper>.mark__btn');
const oneText = document.querySelectorAll('.seminar__question-item-one>.text');
const twoText = document.querySelectorAll('.seminar__question-item-two>.text');
const timerModMin = document.querySelector('.timer__minutes');
const timerModSec = document.querySelector('.timer__seconds');
const form = document.querySelector('.seminar__form');

let seminarNum = 0;
let arrVar1 = [];
let arrVar2 = [];
let objCheck = {
  dataFive: [],
  dataFour: [],
  dataThree: [],
};

const  arrMark = ['dataFive', 'dataFour', 'dataFour', 'dataThree', 'dataThree','dataFive', 'dataFour', 'dataFour', 'dataThree', 'dataThree'];

const timer = (minutes, seconds, elemMin, elemSec) => {
  setintervalID = setInterval(() => {
    if (seconds === 0) {
      elemMin.textContent = `0`;
      elemSec.textContent = `00`;
      clearInterval(setintervalID);
      oneText.forEach(item => {
        item.textContent = '';
      });
      twoText.forEach(item => {
        item.textContent = '';
      });
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

function getRandomInRange(max) {
  return Math.floor(Math.random() * (max + 1));
}

const questNumbersGeneretics = (arrPush, arrCheck, num) => {
  for (let i = 0; i < 10;) {
    let chislo = getRandomInRange(num[arrMark[i]] - 1);
    if (!objCheck[arrMark[i]].includes(chislo)) {
      if (i < 5) {
        objCheck[arrMark[i]].push(chislo);
        arrPush.push(chislo);
        i++;
      } else {
        objCheck[arrMark[i]].push(chislo);
        arrCheck.push(chislo);
        i++;
      }
    }
  }
  arrVar1 = arrPush;
  arrVar2 = arrCheck;
};

const setQuestion = (arr, textItem) => {
  console.log(arr);
  textItem.forEach((item, index) => {
    item.textContent = data[arrMark[index]][arr[index]].question;
  });
};

const setAnswer = (arr, textItem) => {
  console.log(arr);
  textItem.forEach((item, index) => {
    item.textContent = data[arrMark[index]][arr[index]].answer;
  });
};

const startTest = (num) => {
  questNumbersGeneretics(arrVar1, arrVar2, num);
  if (arrVar1 && arrVar2) {
    setQuestion(arrVar1,oneText);
    setQuestion(arrVar2,twoText);
  }
  const seconds = 300;
  const minutes = Math.floor(seconds/60);
  timer(minutes, seconds, timerModMin, timerModSec);
};


btnQuestion.addEventListener('click', () => {
  if (arrVar1 && arrVar2) {
    setAnswer(arrVar1,oneText);
    setAnswer(arrVar2,twoText);
    clearInterval(setintervalID);
  }
});

//запуск программы
form.addEventListener('submit', (e) => {
  e.preventDefault();
  screens[0].classList.add('up');
  const data = new FormData(e.target);
  const newData = Object.fromEntries(data);
  startTest(newData);
});

btnBack.addEventListener('click', () => {
  screens[0].classList.remove('up');
  arrVar1 = [];
  arrVar2 = [];
  objCheck = {
    dataFive: [],
    dataFour: [],
    dataThree: [],
  };
  seminarNum = 0;
  clearInterval(setintervalID);
  timerModMin.textContent = '5';
  timerModSec.textContent = '00';
});








