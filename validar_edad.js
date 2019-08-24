function calcularEdad() {
   var d = document.getElementById("fecha").value;
   var inDate = new Date(d);
   var year = inDate.getFullYear();
   var f_actual = new Date();
   var f_anio = f_actual.getFullYear();
   var edad = f_anio - year;
   if(edad>=18)
   {
      document.getElementById("resulta").innerHTML=' Autorizado';
   }
   else if (edad<18) {
    document.getElementById("resulta").innerHTML= ' No autorizado'; 
   }
      
}; 