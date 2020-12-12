let valores = [8,1,7,4,2,9]
valores.sort()
var pos = valores.indexOf(7)
//indexOf procura valores dentro do array e retorna sua posição 
//sort organiza os valores do array em ordem crescente
/*  console.log("valores[0]")
for(let pos=0;pos<valores.length;pos++){
  console.log(`a posição ${pos} tem o valor ${valores[pos]}`)}*/
  for (let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
  }
