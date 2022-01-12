// Imprimir impares 1-20

for(let i=1; i <= 20; i++){
  console.log(i);
} 

// Disminuir múltiplos de 3, del 0 al 100

for(let i=0; i <= 100; i++){
  if( i % 3 == 0){
    console.log(i);
  }
}

// Imprime la secuencia: 4, 2.5, 1, -0.5, -2, -3.5

for(let i = 4; i <= 4; i -= 1.5){
  if( i <= 4 && i >= -3.5){
    console.log(i);
  }
}

// Sigma -> sumar valores del 1 al 100

let sum = 0;

for(let i = 1; i <= 100; i++){
  sum += i;
}

console.log(sum);


// Factorial -> Multiplicar del 1 al 12 en una variable product

let product = 1;

for(let i = 1; i <= 12; i++){
  product *= i;
}

console.log(product);