function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    
    result =0;
    if(arguments.length>0 && arguments.length!==1){
      for(let argument of arguments){  
        result=result*argument;
        return result
      }
    }else if (arguments.length===1) {
      return arguments;
    }
    else{
    return 0;
    };  
  
  }
  console.log(object);