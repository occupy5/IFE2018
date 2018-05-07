var el = document.getElementById("target");
var btn = document.getElementById("btn");

btn.onclick = function() {
    el.classList.toggle("underline");
}