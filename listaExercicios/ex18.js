const mudar = function (booleanos = [true, false]){
    const mudando = []

    for (const Booleano of booleanos){
        mudando.push (
            Booleano === true ? 'Concluido' : 'Pendente')
    }

    return mudando

}
console.log(mudar([true]))