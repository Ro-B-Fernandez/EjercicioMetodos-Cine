// Cine

 let cantButacas: number = Number(prompt("Ingrese la cantidad de butacas: "));
 let butacas: boolean [] = new Array(cantButacas);
 let butacasDesocupadas: number = 0;
 let indice: number;

 for(indice = 0; indice < cantButacas; indice ++) {
   butacas[indice] = Boolean(prompt("La butaca " + (indice+1) + " esta ocupada?. (Si es NO, deje el recuadro vacío)"));
   if (butacas[indice] === false) {
    butacasDesocupadas++;
   }
 }
 console.log("La cantidad de butacas desocupadas es: " + butacasDesocupadas)

