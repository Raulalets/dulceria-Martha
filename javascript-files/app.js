//INICIALIZACIÓN DE LOS ELEMENTOS JS DE MATERIALIZE
//INICIALIZACIÓN DEL SLIDER
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
        indicators: false,
        height: 500,
        duration: 500,
        interval: 3500
    });
});
//INICIALIZACIÓN DE LAS OPCIONES
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});