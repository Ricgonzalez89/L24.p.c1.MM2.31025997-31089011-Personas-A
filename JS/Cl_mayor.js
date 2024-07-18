export default class Cl_mayor {
    constructor() {
        this.contPersonas = 0;
        this.contF = 0;
        this.contM = 0;
    }

    procesarPersonas (p){
         //Contar personas en general
         this.contPersonas++;

         //contador mujeres
         if (p.sexo == "F")  {
            this.contF++;
         }
         //Contador hombres
         if (p.sexo == "M")  {
            this.contM++;
    }
}

  CalPorcentajeMujeres() {
    return (this.contF*100)/ this.contPersonas;
  }
  mayorgenero() {
    if (this.contF > this.contM) 
        return "Hay más mujeres";
  else if (this.contM > this.contF)
    return "Hay más hombres";
else 
return "Ambos por igual";
}
}