var numeros = new Array(10);

          
            for (let i = 0; i < numeros.length-1; i++) {
                  numeros [i]=parseInt(prompt('Ingrese un numero '+ i));
            }
          
          

        
        numeroMayor();
        numeroMenor();

function numeroMayor(){
  numeros.sort(function(a,b){return b-a});
  document.write("El numero mayor es: "+numeros[0])+' ';
}      

function numeroMenor(){
  numeros.sort(function(a,b){return a-b});
  document.write(" El numero menor es: "+numeros[0]);
}  
