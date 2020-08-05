//Variables iniciales
let arr = [];
let arrPrecios = [];
let max = 0;
let min = 1000000;
let autoMax;
let autoMin;
let autoY;

//Clase
class Car {
    constructor(Marca, Modelo, Puertas, Cilindrada, Precio) {
      this.Marca = Marca;
      this.Modelo = Modelo;
      this.Puertas = Puertas;
      this.Cilindrada = Cilindrada;
      this.Precio = Precio;
    }
}

//Base de datos
auto1 = new Car("Peugeot", "206", "4", "", "$200.000,00");
arr.push(auto1);
auto2 = new Car("Honda", "Titan", "", "125c", "$60.000,00");
arr.push(auto2);
auto3 = new Car("Peugeot", "208", "5", "", "$250.000,00");
arr.push(auto3);
auto4 = new Car("Yamaha", "YBR", "", "160c", "$80.500,50");
arr.push(auto4);

//Funciones
function a(){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < Object.keys(arr[i]).length; j++){
            if(arr[i][Object.keys(arr[i])[j]] == ""){
                delete arr[i][Object.keys(arr[i])[j]]
            }
        }
        console.log(`${Object.keys(arr[i])[0]}: ${Object.values(arr[i])[0]} // ${Object.keys(arr[i])[1]}: ${Object.values(arr[i])[1]} // ${Object.keys(arr[i])[2]}: ${Object.values(arr[i])[2]} // ${Object.keys(arr[i])[3]}: ${Object.values(arr[i])[3]}`)
    }    
}

function b(){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < Object.keys(arr[i]).length; j++){
            if(arr[i][Object.keys(arr[i])[j]].includes("Y")){
                autoY = `${arr[i][Object.keys(arr[i])[0]]} ${arr[i][Object.keys(arr[i])[1]]} ${arr[i][Object.keys(arr[i])[3]]}`
            }
            if(arr[i][Object.keys(arr[i])[j]].includes("$")){
                let precio = parseInt(arr[i][Object.keys(arr[i])[j]].replace("$","").replace(".","").replace(",00","").replace(",50",""));
                if(precio > max){
                    max = precio;
                    autoMax = `${arr[i][Object.keys(arr[i])[0]]} ${arr[i][Object.keys(arr[i])[1]]}` 
                }
                if(precio < min){
                    min = precio;
                    autoMin = `${arr[i][Object.keys(arr[i])[0]]} ${arr[i][Object.keys(arr[i])[1]]}`
                }
            }
        }
    }
    console.log(`Vehículo más caro: ${autoMax}`);
    console.log(`Vehículo más barato: ${autoMin}`);
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${autoY}`)
}

function c(){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < Object.keys(arr[i]).length; j++){
            if(arr[i][Object.keys(arr[i])[j]].includes("$")){
                precio = parseInt(arr[i][Object.keys(arr[i])[j]].replace("$","").replace(".","").replace(",00","").replace(",50",""))
                autoPrecio = `${arr[i][Object.keys(arr[i])[0]]} ${arr[i][Object.keys(arr[i])[1]]}`;
                objPrecio = {auto : autoPrecio, precio : precio};
                arrPrecios.push(objPrecio);
            }
        }
    }
    arrPrecios.sort(function (a, b) {
        if (a.precio < b.precio) {
          return 1;
        }
        if (a.precio > b.precio) {
          return -1;
        }
        return 0;
      });
    console.log(`Vehículos ordenados por precio de mayor a menor:`);
    console.log(arrPrecios[0].auto);
    console.log(arrPrecios[1].auto);
    console.log(arrPrecios[2].auto);
    console.log(arrPrecios[3].auto);
}


//Inicializaciones
a();
console.log("=============================");
b();
console.log("=============================");
c();

