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
    //Кнопка входа
    var btn_sign = document.createElement("button");
    btn_sign.append(document.createTextNode("Войти"));

    var act_sing = document.createElement("form");
    act_sing.action = "/message";
    act_sing.className = "sign_log_in"
    act_sing.id = "signin"
    act_sing.appendChild(btn_sign);
    document.getElementById('magic').appendChild(act_sing);

    //Кнопка регистрации
    var btn_log = document.createElement("button");
    btn_log.append(document.createTextNode("Зарегистрироваться"));

    var act_log = document.createElement("form");
    act_log.action = "/registration";
    act_log.appendChild(btn_log);
    act_log.className = "sign_log_in"
    act_log.id = "login";
    document.getElementById('magic').appendChild(act_log);
}

//Функция для выдачи рандомных чисел
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Функция для выдачи рандомных приветствий
function hello(){
    var main_text = document.createElement("h1");
    var greetings = ["Здравствуйте", "Добрый день", "Рады вас видеть!", "Добро пожаловать!", "Отлично выглядите :)", "Спасибо, что зашли!", "Мы любим вас! 🖤"];
    main_text.textContent = greetings[getRandomInt(greetings.length)];
    document.getElementById("hi").appendChild(main_text);
}
