//После того как страница полностью прогрузится
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Страница успешно запущена)");
    //Выдаёт рандомное приветсвие пользователю
    hello();
    //Через 3 секунды(3000 мс = 3 сек) появится кнопка для вхождения в соц сеть
    setTimeout(magicbutton, 3000);
    //magicbutton();
});

var cnt = {
    all : 0
};

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
//Кол-во всех приветствий: 29
function hello(){
    var main_text = document.createElement("h1");
    var greetings = ["Привет!","Добро пожаловать!","Рады видеть вас!", "Отлично выглядите :)",
    "Спасибо, что зашли!", "Мы любим вас! 🖤", "Приятных общений", "Спасибо, что пользуйтесь нашим сервисом💙",
    "Интересный факт: один из создателей платформы мечтает завести лису 🦊",
    "Подождите, пока загрузится страница (⌒‿⌒)","Зацените селфи! Сегодня сделал) 🦍", ThisDay(), "Вы снова здесь \n(づ｡◕‿‿◕｡)づ", dayMood()];

    let main_length = greetings.length;

    console.log(`Колличество обычных приветствий: ${main_length}`);
    main_text.textContent = greetings[getRandomInt(main_length)];
    document.getElementById("hi").appendChild(main_text);

    console.log(`Всего приветствий: ${cnt.all + main_length}`);
}

function ThisDay(){
    let date = new Date();
    let day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let hours = `${date.getHours()}:${date.getMinutes()}`;
    let year = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    return `Дата: ${year}, \nДень: ${day[date.getDay()]},\nЧасы: ${hours}`;
}

function dayMood(){
    //morning afternoon evening night
    let morning = ["Доброе утро!", "Надеемся, вы сегодня выспались (っ˘ω˘ς)", "Мы сделаи вам кофе (˘▽˘)っ♨", "Ну вот, опять утро ｡ﾟ･ (>﹏<) ･ﾟ｡",
    "Это снова вы (｡◕‿◕｡)"];
    let afternoon = ["Доброй день!", "Иногда работа утмляет (＃＞＜)", "Стараемся сделать ваш день лучше 🌝","Вы сегодня особенно выглядите 👉👈"];
    let evening = ["Добрый вечер!", "Интересный факт: скоро этот день закончится 😊", "🍫☕✨🎉"];
    let night = ["Доброй ночи!", "Не сидите до поздна (￣□￣」)", "Интересный факт: Иногда, ночью, приходит вдохновление 🌚"];

    let all = morning.length+afternoon.length+evening.length+night.length;

    console.log(`Колличество временных приветствий:
    \nУтро: ${morning.length}\nДень: ${afternoon.length}\nВечер: ${evening.length}\nНочь: ${night.length}
    \nВсего: ${all}`);

    cnt.all = all;

    let hour = new Date().getHours();

    if(hour >= 4 && hour < 13){
        return morning[getRandomInt(morning.length)];
    }
    else if(hour >= 13 && hour < 15){
        return afternoon[getRandomInt(afternoon.length)];
    }
    else if(hour >= 15 && hour < 21){
        return evening[getRandomInt(evening.length)];
    }
    else{
        return night[getRandomInt(night.length)];
    }
}