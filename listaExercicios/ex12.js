const notas = (notasAlunos=[9, 10, 7, 5, 3, 0]) => {

    for(const notas of notasAlunos)
        if(notas >=7)
            console.log(`Aprovado ${notas}`)

}
notas()