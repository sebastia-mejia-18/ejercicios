//let SalarioAcumulado = 0
//for(let index = 1; index <= 10; index++ ){
 //if(index % 2 == 0){
  //let NumeroBase = prompt ('ingrese el numero 5')
  //let numeroMultiplicar = Number (prompt('ingrese un numero para mulpiplicar'))
  //numeroMultiplicar = numeroMultiplicar * NumeroBase
  //console.log ('El resultado de la multiplicacion es: ' + (numeroMultiplicar * index))
 //}
 //console.log ('5 x '+ index + ' = '+ (index*5))>
//}


//CICLO MIENTRAS
//let numero = 1
//while(numero <= 10){
// console.log ('5 x '+ numero + ' = '+ (numero*5))
// numero++
//}

//let numero = 1
//do{
 //console.log ('5 x '+ numero + ' = '+ (numero*5))
 //numero++
//}while(numero <= 10)


let repetir = true
let SalarioAcumulado = 0
let contadorSalarios = 0
while(repetir){
 let NombreEmpleado = prompt('ingrese el nombre del empleado')
 let SalarioEmpleado = Number (prompt('ingrese el salario'))
 SalarioAcumulado = SalarioAcumulado + SalarioEmpleado
 contadorSalarios++
 let opcion = prompt ('¿desea repetir el codigo?\n1-Si\n2-No')
 if(opcion== '2'){
  repetir = false
 }

}
console.log(contadorSalarios)
console.log(SalarioAcumulado / contadorSalarios)