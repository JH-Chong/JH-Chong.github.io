/********************************************************************************/
/* Navigation
/********************************************************************************/
let side_menu_button_open = document.getElementById("side-menu-button");
let side_menu_button_close = document.getElementById("side-menu-close-button");
side_menu_button_open.addEventListener("click", ToggleSideMenu);
side_menu_button_close.addEventListener("click", ToggleSideMenu);

let opened = false
function ToggleSideMenu()
{
    console.log("Clicked");
    if (opened)
    {
        opened = false;
        document.getElementById("side-menu").style.left = "-15%";
    }
    else
    {
        opened = true;
        document.getElementById("side-menu").style.left = "0";
    }
}

setInterval(CheckScreenWidth, 20);

function CheckScreenWidth()
{
    if (opened && (window.innerWidth > 721))
    {
        opened = false;
        document.getElementById("side-menu").style.left = "-15%";
    }
}