var mouseEvent = "empty";
var Last_Position_Of_X, Last_Position_Of_Y;
canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("Canvas_input").value;
    width_of_line = document.getElementById("Width_input").value;
    mouseEvent = "mouseDown";
    canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var Current_Position_Of_X = e.clientX-canvas.offsetLeft;
    var Current_Position_Of_Y = e.clientY-canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(Last_Position_Of_X, Last_Position_Of_Y);
        ctx.lineTo(Current_Position_Of_X, Current_Position_Of_Y);
        ctx.stroke();
    }
    Last_Position_Of_X = Current_Position_Of_X;
    Last_Position_Of_Y = Current_Position_Of_Y;
}

}

function clearArea() {
    console.log("Hello");
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);  
}

canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e) {
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mouseup", my_mouse_up);
function my_mouse_up(e) {
    mouseEvent = "mouseUp";
}