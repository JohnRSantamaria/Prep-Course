//clases
class Animal{
    /*El consructor es un método especial que se ejecuta
    en el momento de instanciar la clase.*/ 
    constructor(nombre,genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
    //Metodos
    sonar(){
        console.log("Hago sonidos por que SI!");        
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);    
    }
}



//Herencia en Clases- 
class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        super(nombre,genero);  //Es un metodo que manda a llamar a el constructor del la clase padre.
        this.tamanio = tamanio;        

    }
    //Sobre escritura
    sonar(){
        console.log(`soy un perro y hago Guauuu`);        
    }

    ladrar(){
       console.log("Guauuu Guauuu"); 
    }
}

const mini = new Animal("Mini","Hembra");
const scooby = new Perro("Scooby","Macho","Gigante");

console.log(mini);
console.log(scooby);

mini.saludar();
scooby.sonar();
scooby.ladrar();
