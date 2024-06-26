color= "black";
width_of_line = 1;
bcolor="white";

canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var last_position_of_x, last_position_of_y;

var width=screen.width;

new_width = screen.width - 70;
new_height = screen.height - 300;

if(width < 992)
    {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
    bcolor=document.getElementById("bg_color").value;
    document.getElementById("myCanvas").style.backgroundColor=bcolor;

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}


canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){
current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft
current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_position_of_x, last_position_of_y);

    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();


    last_position_of_x = current_position_of_mouse_x
    last_position_of_y = current_position_of_mouse_y
}

function clearArea()
{
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}
