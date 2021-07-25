Number.prototype.entre = function(inicio, fim){  //Creando esta funcion con Number.prototype para luego usar en la const imprimirResultado
    return this >= inicio && this <= fim //usando this porque existe Munber para accesar a esa otra funcion que retorna
}

const imprimirResultado = function (nota){
    if (nota.entre(9, 19)){
        console.log('Quadro de Honra')
    }else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
    }else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    }else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    }else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(3)
imprimirResultado(1)
imprimirResultado(4)