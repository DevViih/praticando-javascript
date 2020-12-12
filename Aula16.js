function parimpar(n){
 if(n%2==0){
    return 'par'
 } else if(n%2!=0){
    return 'impar'
 }
 }
  let res = parimpar(9)
  console.log(res)


//exercício2 
function soma(n1=0,n2=0){
  //Eu posso definir valores para os números mesmo eles estando dentro do parâmetro 
  return n1+n2
  
}console.log(soma(2,5))


//exercício 03
let v = function (X){
  return X*2 
  
}
console.log(v(5))


//exercio03
function fatorial(n){
  let fa = 1 
  for(c = n ; c > 1; c--){
    fat*=c
    return fat
  }
  
}

console.log(fatorial(5))


//exercício04