let primeiroNome = "vinicius"
let ultimoNome = "porto"
let nomeCompleto = primeiroNome +  " " + ultimoNome
console.log(nomeCompleto)

let numero1 = 10
let numero2 = 20

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1/numero2
console.log(soma, subtracao, multiplicacao, divisao)

let estaChovendo = true
if(estaChovendo){
    console.log("esta chovendo")
}else{
    console.log("não esta chovendo")
}

let resposta = null
let nota

console.log(resposta, nota)


let idUnico = Symbol()
let produto ={
    [idUnico]: 123,
    nome: "camiseta"
}
console.log(produto[idUnico], produto.nome)

let numeroGrande = BigInt("7892134567890345678934567893456789567890")
let numero =
console.log(numeroGrande, numero2) 