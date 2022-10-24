document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Страница успешно запущена)");
    setTimeout(magicbutton, 5000);
});

function magicbutton(){
    var act = document.createElement("form");
    act.action = "https://google.com";
    act.target = "_blank"
    var btn = document.createElement("input");
    btn.type = "button";
    btn.id = "magic_button";
    btn.value = "Магия";
    act.appendChild(btn);
    document.getElementById('magic').appendChild(act);
}

