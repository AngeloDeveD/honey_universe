//После того как страница полностью прогрузится
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Страница успешно запущена)");
    //Выдаёт рандомное приветсвие пользователю
    hello();
    //Через 3 секунды(3000 мс = 3 сек) появится кнопка для вхождения в соц сеть
    setTimeout(magicbutton, 3000);
    //magicbutton();
});

//Функция по созданию кнопки для вхождения в соц сеть
function magicbutton(){
    var btn = document.createElement("button");
    btn.id = "magic_button";
    //Создаётся текст кнопки
    btn.append(document.createTextNode("Войти"));
    var act = document.createElement("form");
    act.action = "/message";
    act.appendChild(btn);
    document.getElementById('magic').appendChild(act);
}

//Функция для выдачи рандомных чисел
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Функция для выдачи рандомных приветствий
function hello(){
    var main_text = document.createElement("h1");
    var greetings = ["Здравствуйте", "Добрый день", "Рады вас видеть!", "Добро пожаловать!", "Отлично сегодня выглядите :)", "Спасибо, что зашли!", "Мы любим вас! 🖤"];
    main_text.textContent = greetings[getRandomInt(greetings.length)];
    document.getElementById("hi").appendChild(main_text);
}