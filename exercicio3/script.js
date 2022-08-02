// Exercicio 1
const number = [8,13,18]
const string = ["Olá","Oi","Chama no Xesque"]
const arrayMista = [8,13,18,"Levir","Brave",true,false]

//Exercicio 3
numberCopia = number.slice()
stringCopia = string.slice()
arrayMistaCopia = arrayMista.slice()

number.push(7)
console.log(number,numberCopia);
string.pop()
console.log(string,stringCopia);
arrayMista.splice(1,1)
console.log(arrayMista,arrayMistaCopia);