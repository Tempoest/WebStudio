var modal = document.getElementsByClassName('modal')[0];
var btn = document.getElementsByClassName('hero-button')[0];
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = 'block';
}
span.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none'; 
    }
}