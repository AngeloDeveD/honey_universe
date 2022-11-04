document.addEventListener("DOMContentLoaded", changeColor());

//0 - светлая тема, 1 - темная тема (default: 0)
var count_color = 0;

function changeColor()
{
    var light = document.createElement("img");
    light.src = "images/icons/sun.png";
    light.id = "images";

    document.getElementById("light").appendChild(light);
}