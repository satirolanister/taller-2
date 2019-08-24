
var f=new Date();
var fechaActual=(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
var fechaAnterior=(f.getDate()+'/'+ f.getMonth()  + "/" + f.getFullYear());
function restarDias(fecha, dias){
 fecha.setDate(fecha.getDate()+dias);
 return formatDate(fecha);
}


document.write('Fecha Actual '+fechaActual+'<br>');

document.write('Fecha menos 5 dias '+(f.getDate()-5) + "/" + (f.getMonth() +1) + "/" + f.getFullYear()+'<br>');

document.write('Fecha menos 10 dias '+(f.getDate()-10) + "/" + (f.getMonth() +1) + "/" + f.getFullYear()+'<br>');

document.write('Fecha del mes anterior '+fechaAnterior+'<br>');

document.write('Fecha con un año de más '+f.getDate()+'/'+ (f.getMonth()+1)  + "/" + (f.getFullYear()+1)+'<br>');

document.write('Fecha menos 30 dias '+restarDias(f,-30)+'<br>');