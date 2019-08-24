const ordenar = () => {
     let valores = document.getElementById("valores").value;
     let resultado = document.getElementById("resultado");

     resultado.insertAdjacentHTML("afterend", "<br>" + valores.split(" ").map(el => parseInt(el)).sort((a,b) => a-b).join (" "));
};

function validar(e) {
    var keynum = window.event ? window.event.keyCode : e.which;
    if((keynum == 8) || (keynum == 32))
    return true;

    return /\d/.test(String.fromCharCode(keynum));
};