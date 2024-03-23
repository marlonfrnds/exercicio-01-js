let numberOne = Number(prompt('Digite o primeiro número'))
let NumberTwo = Number(prompt('Digite o segundo número'))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = (numberOne / numberTwo).toFixed(2)
const restDiv = numberOne % numberTwo

let parOrImpar = sum % 2 == 0? 'Par' : 'Impar'
let checkEquals = numberOne === numberTwo ? 'são iguais' : 'são diferentes'

alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${mult}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${restDiv}`)
alert(`A soma dos dois números é ${parOrImpar}`)
alert(`Os dois números inseridos é ${checkEquals}`)
