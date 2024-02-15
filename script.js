///Создадим функцию для num_system.html для перевода чисел систем исчисления///
function convert() {
    let numberInput = document.getElementById('numberInput').value;
    let fromSystem = document.querySelector('input[name="fromSystem"]:checked').value;
    let toSystem = document.querySelector('input[name="toSystem"]:checked').value;
  
    let output = document.getElementById('output');
  
    let result = '';
  
    if (fromSystem === '2') {
      if (toSystem === '2') {
        result = numberInput;
      } else if (toSystem === '8') {
        result = parseInt(numberInput, 2).toString(8);
      } else if (toSystem === '10') {
        result = parseInt(numberInput, 2).toString(10);
      } else if (toSystem === '16') {
        result = parseInt(numberInput, 2).toString(16).toUpperCase();
      }
    } else if (fromSystem === '8') {
      if (toSystem === '2') {
        result = parseInt(numberInput, 8).toString(2);
      } else if (toSystem === '8') {
        result = numberInput;
      } else if (toSystem === '10') {
        result = parseInt(numberInput, 8).toString(10);
      } else if (toSystem === '16') {
        result = parseInt(numberInput, 8).toString(16).toUpperCase();
      }
    } else if (fromSystem === '10') {
      if (toSystem === '2') {
        result = parseInt(numberInput, 10).toString(2);
      } else if (toSystem === '8') {
        result = parseInt(numberInput, 10).toString(8);
      } else if (toSystem === '10') {
        result = numberInput;
      } else if (toSystem === '16') {
        result = parseInt(numberInput, 10).toString(16).toUpperCase();
      }
    } else if (fromSystem === '16') {
      if (toSystem === '2') {
        result = parseInt(numberInput, 16).toString(2);
      } else if (toSystem === '8') {
        result = parseInt(numberInput, 16).toString(8);
      } else if (toSystem === '10') {
        result = parseInt(numberInput, 16).toString(10);
      } else if (toSystem === '16') {
        result = numberInput;
      }
    }
  
    output.innerHTML = `Результат: <span id="numberResult">${result}</span>`;
    outputresult.innerHTML = `Вам нравится веб-приложение? Поделитесь с ним со своими друзьями!`;
} ///Конец функции///
  
///Создадим функцию для calculator.html///

///функция добавления элемента на экран калькулятора///
function Display(value) {
    document.getElementById('display').value += value;
}///Конец функции///

///функция очищения экрана калькулятора///
function Clear(){
    document.getElementById('display').value = "";
}///Конец функции///

///Функция равно, чтобы получить результат///
function Equally(){
    let exaple = document.getElementById('display').value;
    let result = eval(exaple);
    document.getElementById('display').value = result;
}///Конец функции///

///функция проценты///
function calculatePercentage(){
    let exaple = document.getElementById('display').value;
    let result = eval(exaple) / 100;
    document.getElementById('display').value = result;
}///Конец функции///

///Функция факториал///
function Factory(value){
  let num = parseFloat(document.getElementById('display').value);
  let result = 1;
  for (let i = 2; i <= num; i++){
    result *= i;
  }
  document.getElementById('display').value = result;
}
///Конец функции///

///Функция корень///
function Root(){
    let exaple = document.getElementById('display').value;
    let result = Math.sqrt(eval(exaple));
    document.getElementById('display').value = result;
}///Конец функции///

///Как же я устал! Начинают болеть глаза///


///Создадим функцию для disciminant.html для решения квадратных уравнений///
function discriminant(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    let discriminant = b * b - 4 * a * c;

    print = document.getElementById('print');

    print_x = document.getElementById('print_x');
    printt_x1 = document.getElementById('print_x1');
    printt_x2 = document.getElementById('print_x2');

    if (isNaN(discriminant)) {
        print.innerHTML = 'Пожалуйста, введите числовые значения для всех коэффициентов.';
    } else {
      print.innerHTML = 'Дискриминант: ' + discriminant;
    }
    if (discriminant > 0){
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        print_x.innerHTML = "В этом уравнении 2 корня";
        printt_x1.innerHTML = `x1:   ${x1.toFixed(2)}`;
        printt_x2.innerHTML = `x2:  ${x2.toFixed(2)}`;
    } else if (discriminant === 0){
        print_x.innerHTML = "В этом уравнении только 1 корень";
        let x = -b / (2 * a);
        printt_x1.innerHTML = `x: ${x.toFixed(2)}`;
      } else {
        print_x.innerHTML = `Корней нет, так как дисриминант меньше нуля.`;
      }
}///Конец функции///


///Делаем функцию для смены темы с белой на чёрную, с чёрной на белую.///
function theme(){
    let body = document.body;
    body.classList.toggle('dark-mode');

     if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}
// Функция для сохранения текущей темы в Local Storage
function saveTheme() {
  let body = document.body;
  let theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

// Обработчик события, срабатывающий перед выгрузкой страницы
window.addEventListener('beforeunload', saveTheme);

// Функция для загрузки сохраненной темы из Local Storage и обновления состояния кнопки
function loadTheme() {
  let savedTheme = localStorage.getItem('theme');
  let body = document.body;
  let checkbox = document.getElementById('check');
  let buttonTheme = document.querySelector('.button-theme');

  if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      checkbox.checked = true;
  } else {
      body.classList.remove('dark-mode');
      checkbox.checked = false;
  }

  
  setTimeout(function() {
    buttonTheme.style.transition = 'width 0.5s'; 
  }, 100); 

  setTimeout(function() {
    buttonTheme.classList.remove('no-transition');
  }, 200);
}

loadTheme();

// Вызов функции загрузки темы при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
  loadTheme();
});

// Обновление состояния кнопки и темы при изменении состояния checkbox
document.getElementById('check').addEventListener('change', function() {
  theme();
  loadTheme();
  
});
function onload(){
  document.body.classList.toggle('dark-mode');
}




// Функция для открывания бокового меню

function hide() {
  let sidebar = document.querySelector('.sidebar');
  if (sidebar.classList.contains('close')) {
      sidebar.classList.remove('close');
  } else {
      sidebar.classList.add('close');
  }

  let main = document.querySelector('.close');
  if (main.classList.contains('close')){
    main.classList.remove('close');
  }
  else{
    main.classList.add('close');
  }
}


/// конвертатор единиц измерения Unit_Converter.html,
///kak ya ustal. vot bi kod sam sebya pisal!
///Начало функции для конвератиции в Unit_Converter.html/// 
function count(){
  let numVelec = parseFloat(document.getElementById('numVelec').value);
  let magnitude = document.querySelector('input[name="magnitude"]:checked').value;

  let conclusion1 = document.getElementById('conclusion1');
  let conclusion2 = document.getElementById('conclusion2');
  let conclusion3 = document.getElementById('conclusion3');
  let conclusion4 = document.getElementById('conclusion4');
  let conclusion5 = document.getElementById('conclusion5');
  let conclusion6 = document.getElementById('conclusion6');
  let conclusion7 = document.getElementById('conclusion7');
  let conclusion8 = document.getElementById('conclusion8');

  let resultconsol1 = "";
  let resultconsol2 = "";
  let resultconsol3 = "";
  let resultconsol4 = "";
  let resultconsol5 = "";
  let resultconsol6 = "";
  let resultconsol7 = "";
  let resultconsol8 = "";

  if (isNaN(numVelec)){
    conclusion1.innerHTML = `Пожалуйста, введите числовое значение`;
  }
  else{
    if (magnitude === 'Длина'){
      resultconsol1 = numVelec * 1;
      resultconsol2 = numVelec / 1000;
      resultconsol3 = numVelec * 100;
      resultconsol4 = numVelec * 1000;
      resultconsol5 = numVelec * 1.09361;
      resultconsol6 = numVelec * 0.000621371;
      resultconsol7 = numVelec * 3.28084;
      resultconsol8 = numVelec * 39.3701;
      
      conclusion1.innerHTML = `${resultconsol1} М`;
      conclusion2.innerHTML = `${resultconsol2} Км`;
      conclusion3.innerHTML = `${resultconsol3} См`;
      conclusion4.innerHTML = `${resultconsol4} Мм`;
      conclusion5.innerHTML = `${resultconsol5} Ярд`;
      conclusion6.innerHTML = `${resultconsol6} Миль`;
      conclusion7.innerHTML = `${resultconsol7} Фут`;
      conclusion8.innerHTML = `${resultconsol8} Дюйм`;
    }
    else if (magnitude === "Время"){
      resultconsol1 = numVelec * 60;
      resultconsol2 = numVelec * 1;
      resultconsol3 = numVelec * 0.0166667;
      
      conclusion1.innerHTML = `${resultconsol1} Сек`;
      conclusion2.innerHTML = `${resultconsol2} Мин`;
      conclusion3.innerHTML = `${resultconsol3} Час`;   
      conclusion4.innerHTML = ``;
      conclusion5.innerHTML = ``;
      conclusion6.innerHTML = ``;
      conclusion7.innerHTML = ``;
      conclusion8.innerHTML = ``; 
    }
    else if (magnitude === "Объём"){
      resultconsol1 = numVelec * 1;
      resultconsol2 = numVelec * 1000;
      resultconsol3 = numVelec * 1000000;
      resultconsol4 = numVelec * 1e+6;
      resultconsol5 = numVelec / 1e+9;
      resultconsol6 = numVelec * 264.172;
      
      conclusion1.innerHTML = `${resultconsol1} М^3`;
      conclusion2.innerHTML = `${resultconsol2} Литр`;
      conclusion3.innerHTML = `${resultconsol3} Миллилитр`;
      conclusion4.innerHTML = `${resultconsol4} См^3`;
      conclusion5.innerHTML = `${resultconsol5} Км^3`;
      conclusion6.innerHTML = `${resultconsol6} Галлон`;
      conclusion7.innerHTML = ``;
      conclusion8.innerHTML = ``;
    }
    else if (magnitude === "Масса"){
      resultconsol1 = numVelec * 1;
      resultconsol2 = numVelec * 1000;
      resultconsol3 = numVelec / 100;
      resultconsol4 = numVelec * 1e+6;
      resultconsol5 = numVelec / 1000;
      resultconsol6 = numVelec * 2.205;
      
      conclusion1.innerHTML = `${resultconsol1} Кг`;
      conclusion2.innerHTML = `${resultconsol2} Грамм`;
      conclusion3.innerHTML = `${resultconsol3} Центнер`;
      conclusion4.innerHTML = `${resultconsol4} Мг`;
      conclusion5.innerHTML = `${resultconsol5} Тонн`;
      conclusion6.innerHTML = `${resultconsol6} Фунт`;
      conclusion7.innerHTML = ``;
      conclusion8.innerHTML = ``;
    }
    else if (magnitude === "Площадь"){
      resultconsol1 = numVelec * 1;
      resultconsol2 = numVelec * 10000;
      resultconsol3 = numVelec * 1000000;
      resultconsol4 = numVelec / 10000;
      resultconsol5 = numVelec / 100;
      
      conclusion1.innerHTML = `${resultconsol1} М^2`;
      conclusion2.innerHTML = `${resultconsol2} См^2`;
      conclusion3.innerHTML = `${resultconsol3} Мм^2`;
      conclusion4.innerHTML = `${resultconsol4} Гектар`;
      conclusion5.innerHTML = `${resultconsol5} Дм^2`;
      conclusion6.innerHTML = ``;
      conclusion7.innerHTML = ``;
      conclusion8.innerHTML = ``; 
    }
    else if (magnitude === "Скорость"){
      resultconsol1 = numVelec * 1;
      resultconsol2 = numVelec * 3.6;
      resultconsol3 = numVelec * 2,237;
      resultconsol4 = numVelec * 60;
      resultconsol5 = numVelec * 3600;
      
      conclusion1.innerHTML = `${resultconsol1} М/С`;
      conclusion2.innerHTML = `${resultconsol2} Км/Ч`;
      conclusion3.innerHTML = `${resultconsol3} Миль/Ч`;
      conclusion4.innerHTML = `${resultconsol4} М/Мин`;
      conclusion5.innerHTML = `${resultconsol5} М/Час`;
      conclusion6.innerHTML = ``;
      conclusion7.innerHTML = ``;
      conclusion8.innerHTML = ``; 
    }
    else if (magnitude === "Температура"){
      resultconsol1 = numVelec * 1;
      resultconsol2 = numVelec - 273.15;
      resultconsol3 = (numVelec - 273.15) *9 / 5 + 32;
      
      conclusion1.innerHTML = `${resultconsol1} Кельвин`;
      conclusion2.innerHTML = `${resultconsol2} Градус Цельсия`;
      conclusion3.innerHTML = `${resultconsol3} Градус Фаренгейта`;
      conclusion4.innerHTML = ``;
      conclusion5.innerHTML = ``;
      conclusion6.innerHTML = ``;
      conclusion7.innerHTML = ``;
      conclusion8.innerHTML = ``; 
    }
    else if (magnitude === "Давление"){
      resultconsol1 = numVelec * 1;
      resultconsol2 = numVelec / 100000;
      resultconsol3 = numVelec / 101300;
      resultconsol4 = numVelec / 1e+9;
      resultconsol5 = numVelec / 1e-6;
      resultconsol6 = numVelec / 1000;
      
      conclusion1.innerHTML = `${resultconsol1} Паскаль`;
      conclusion2.innerHTML = `${resultconsol2} Бар`;
      conclusion3.innerHTML = `${resultconsol3} Атмосфера`;
      conclusion4.innerHTML = `${resultconsol4} ГигаПаскаль`;
      conclusion5.innerHTML = `${resultconsol5} МегаПаскаль`;
      conclusion6.innerHTML = `${resultconsol6} КилоПаскаль`;
      conclusion7.innerHTML = ``;
      conclusion8.innerHTML = ``;
    }
    else if (magnitude === "Объём_информации"){
      resultconsol1 = numVelec * 1;
      resultconsol2 = numVelec * 8;
      resultconsol3 = numVelec / 1000;
      resultconsol4 = numVelec / 1e+6;
      resultconsol5 = numVelec / 1e+9;
      resultconsol6 = numVelec / 1e+12;
      
      conclusion1.innerHTML = `${resultconsol1} Байт`;
      conclusion2.innerHTML = `${resultconsol2} Бит`;
      conclusion3.innerHTML = `${resultconsol3} Килобайт`;
      conclusion4.innerHTML = `${resultconsol4} Мегабайт`;
      conclusion5.innerHTML = `${resultconsol5} Гигабайт`;
      conclusion6.innerHTML = `${resultconsol6} Терабайт`;
      conclusion7.innerHTML = ``;
      conclusion8.innerHTML = ``;
    }
    else if (magnitude === "Энергия"){
      resultconsol1 = numVelec * 1;
      resultconsol2 = numVelec / 1000;
      resultconsol3 = numVelec / 4184;
      resultconsol4 = numVelec / 3600;
      resultconsol5 = numVelec / 1000000;
      resultconsol6 = numVelec / 3.6e+6;
      
      conclusion1.innerHTML = `${resultconsol1} Джоуль`;
      conclusion2.innerHTML = `${resultconsol2} Килоджоуль`;
      conclusion3.innerHTML = `${resultconsol3} Килокалория`;
      conclusion4.innerHTML = `${resultconsol4} Ватт-час`;
      conclusion5.innerHTML = `${resultconsol5} Мегаджоуль`;
      conclusion6.innerHTML = `${resultconsol6} Килловат-час`;
      conclusion7.innerHTML = ``;
      conclusion8.innerHTML = ``;
    }
  }

}//Конец функции//


///Создаём функции для Squares_figures.html///

///После выбора фигуры делаем так, чтобы появилась другая картинка, формула, input для ввода///
document.getElementById('figurine').addEventListener('change', function(){
  let selefigur = this.value;
  let inputsDiv = document.getElementById('inputs');
  let inputsDiv2 = document.getElementById('inputs2');
  let inputsDiv3 = document.getElementById('inputs3');
  let inputsDiv4 = document.getElementById('inputs4');
  let formula = document.getElementById('formula');

  if (selefigur === "Квадрат"){
    
    document.getElementById('shape-img').src = "Квадрат.png";
    inputsDiv.innerHTML = '<label for="side">Введите длину стороны:</label><input type="number" id="side" class="numInpt">';
    inputsDiv2.innerHTML = "";
    inputsDiv3.innerHTML = "";
    inputsDiv4.innerHTML = "";
    formula.innerHTML = "Формула: S = a²";
  }
  else if (selefigur === "Прямоугольник"){
    
    document.getElementById("shape-img").src = "Прямоугольник.png";
    inputsDiv.innerHTML = '<label for="side">Введите длину стороны a:</label><input type="number" id="side" class="numInpt">';
    inputsDiv2.innerHTML = '<label for="side2">Введите длину стороны b:</label><input type="number" id="side2" class="numInpt">';
    inputsDiv3.innerHTML = "";
    inputsDiv4.innerHTML = "";
    formula.innerHTML = "Формула: S = ab";
  }
  else if (selefigur === "Параллелограм"){
    
    document.getElementById("shape-img").src = "Параллелограм.png";
    inputsDiv.innerHTML = '<label for="side">Введите длину стороны a:</label><input type="number" id="side" class="numInpt">';
    inputsDiv2.innerHTML = '<label for="h">Введите проведённую к стороне a высоту h:</label><input type="number" id="h" class="numInpt">';
    inputsDiv3.innerHTML = "";
    inputsDiv4.innerHTML = "";
    formula.innerHTML = "Формула: S = ah";
  }
  else if (selefigur === "Треугольник"){
  
    document.getElementById("shape-img").src = "Треугольник.png";
    inputsDiv.innerHTML = '<label for="side">Введите длину стороны a:</label><input type="number" id="side" class="numInpt">';
    inputsDiv2.innerHTML = '<label for="h">Введите проведённую к стороне a высоту h:</label><input type="number" id="h" class="numInpt">';
    inputsDiv3.innerHTML = "";
    inputsDiv4.innerHTML = "";
    formula.innerHTML = "Формула: S = ½(ah)";
  }
  else if (selefigur === "Трапеция"){
    
    document.getElementById("shape-img").src = "трапеция.png";
    inputsDiv.innerHTML = '<label for="side">Введите длину меньшего основания a:</label><input type="number" id="side" class="numInpt">';
    inputsDiv2.innerHTML = '<label for="side2">Введите длину большего основания b:</label><input type="number" id="side2" class="numInpt">';
    inputsDiv3.innerHTML = '<label for="h">>Введите проведённую к стороне b высоту h:</label><input type="number" id="h" class="numInpt">';
    inputsDiv4.innerHTML = "";
    formula.innerHTML = "Формула: S = (a+b)/2 * h";
  }
  else if (selefigur === "Ромб"){
    document.getElementById("shape-img").src = "Ромб.png";
    inputsDiv.innerHTML = '<label for="side">Введите длину меньшего основания a:</label><input type="number" id="side" class="numInpt">';
    inputsDiv2.innerHTML = '<label for="h">Введите проведённую к стороне a высоту h:</label><input type="number" id="h" class="numInpt"><hr  style="margin: 10px 0px;">';
    inputsDiv3.innerHTML = '<label for="d1">Введите первую диагональ d1:</label><input type="number" id="d1" class="numInpt">';
    inputsDiv4.innerHTML = '<label for="d2">Введите вторую диагональ d2:</label><input type="number" id="d2" class="numInpt">';
    formula.innerHTML = "Формула: S = (a+b)/2 * h или ½(d1*d2)";
    
  }
  else if (selefigur === "Круг"){
    document.getElementById('shape-img').src = "круг.png";
    inputsDiv.innerHTML = '<label for="r">Введите длину радиуса r:</label><input type="number" id="r" class="numInpt">';
    inputsDiv2.innerHTML = "";
    inputsDiv3.innerHTML = "";
    inputsDiv4.innerHTML = "";
    formula.innerHTML = "Формула: S = πr²";
  }
});

///Создаём функцию для вычисления плозади///
function Calculatearea(){
  let figurine = document.getElementById('figurine').value;
  let area;
  let areadem;

  if (figurine === "Квадрат"){
    let side = parseFloat(document.getElementById("side").value);
    area = side * side;
  }
  else if (figurine === "Прямоугольник"){
    let side = parseFloat(document.getElementById("side").value);
    let side2 = parseFloat(document.getElementById("side2").value);
    area = side * side2;
  }
  else if (figurine === "Параллелограм"){
    let side = parseFloat(document.getElementById("side").value);
    let h = parseFloat(document.getElementById('h').value);
    area = side * h;
  }
  else if (figurine === "Треугольник"){
    let side = parseFloat(document.getElementById("side").value);
    let h = parseFloat(document.getElementById('h').value);
    area = (side * h) / 2;
  }
  else if (figurine === "Трапеция"){
    let side = parseFloat(document.getElementById("side").value);
    let side2 = parseFloat(document.getElementById("side2").value);
    let h = parseFloat(document.getElementById('h').value);
    let sideall = side + side2;
    area = sideall / 2 * h; 
  }
  else if (figurine === "Ромб"){
    let side = parseFloat(document.getElementById("side").value);
    let h = parseFloat(document.getElementById("h").value);
    let d1 = parseFloat(document.getElementById("d1").value);
    let d2 = parseFloat(document.getElementById("d2").value);
    area = side * h;
    areadem = (d1 * d2) / 2;
  }
  else if (figurine === "Круг"){
    let r = parseFloat(document.getElementById('r').value);
    area = Math.PI * r * r;
  }

  document.getElementById('result_squares').innerHTML = `Площадь: ${(area).toFixed(2)}`;
  if (isNaN(areadem)){
    document.getElementById('result_squares2').innerHTML = ``;
  }
  else{
    document.getElementById('result_squares2').innerHTML = `Площадь трапеции по диагоналям: ${(areadem).toFixed(2)}`;
  }
}//Конец функции///


//Создаём функцию, при нажатии в браузере появляется окно, которое прощается//
function closeWindow(){
	if (confirm('Уже уходите? Вы действительно хотите закрыть страницу?')) {
		window.close();
	}
}












