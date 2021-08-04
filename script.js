
     let kilo = prompt("ingrese cuantos kilos de pollo quiere")

     switch(kilo){

        case (0):
           alert("el precio es de $30")
            break;
        case (2 < kilo && kilo <= 4):
           alert("el precio es de $50")
            break;

        case (5 < kilo && kilo <= 8):
           alert("el precio es de $100 o mas")
            break;
     }