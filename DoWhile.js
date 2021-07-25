function getElementAleatorioEntre (min, max){
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor)
}
let opcao = 0

do {                            // se ejecutará  primero el bloco y luego la condición while
    opcao = getElementAleatorioEntre (-1, 5)
    console.log(`A escolha foi ${opcao}`)
} while (opcao != -1)
console.log('Fim')