function tratarErroElancar(erro) {
   // throw new Erro('...')
   // throw 10
   //throw true
   //throw 'message'
throw{
    name: erro.name,
    msg: erro.message,
    date: new Date
    }
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    }catch (e) {
        tratarErroElancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)
