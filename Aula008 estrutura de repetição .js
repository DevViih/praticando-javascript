//condição simples
var vel = '60.5'
console.log(`A velocidade do seu carro é ${vel}km/h`)
if (vel >60){
  console.log('você ultapassou o limite de velocidade,MULTADO')}
console.log('dirija sempre usando cinto de segurança')

//condição composta
var pais = 'EUA'
if (pais=='Brasil') {
  console.log('Brasileiro')
} else{
  console.log('estrangeiro')
}

//condições aninhadas
var idade = 22
if (idade < 18){
  
  console.log('não vota')
  
}else if (idade >=16 && idade > 65 ){
  
  console.log('voto opcional')
  
}else if (idade >= 18){
  
  console.log('voto obrigatorio')
}



//exercício 02 condições aninhadas
var agora = new Date()
var hora = agora.getHours()/*esse comando pega a hora atual do servidor*/
console.log(`agora são ${hora}horas`)

if (hora < 12){
  
  console.log('bom dia')
  
}
else if (hora <= 18){
  
  console.log('boa tarde')
}
else if (hora > 18 ){
  
  console.log('boa noite')
  
}


//condições múltiplas 
var agora = new Date()
var diaSem = agora.getDay()
switch('dia da semana'){
  case 0 
 : console.log('domingo')
  break
   
   case 1 
 :  console.log('segunda')
   break
   
   case 2 
 :  console.log('terça')
   break
   
   //assim sucessivamente....
   
   
   default 
   :console.log('dia invalido')
   break
   //default é utilizado caso aja algum erro ou especifique algo q não tem no código ou seja uma case
}

