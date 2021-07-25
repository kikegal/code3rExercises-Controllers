const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenme: 'Silva',
    idade: 29,
    peso: 60
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)  //Colocar la indicaci´´on del indice, en este caso "atributo" para que muestre el contenido del Objeto
}