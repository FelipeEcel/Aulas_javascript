const prompt = require(`prompt-sync`)()

let nomeItem = [`Espada das Sombras`, `Asas Douradas`, `Capacete Neon`, `Pet Dragão`, `Skin Cyberpunk`]
let precoItem = [99, 325, 400, 600, 700]
let estoqueItem = [10, 7, 6, 4, 1]
let id = [1, 2, 3, 4, 5]
const finalVetor = 100

function raridades(preco) {
    if (preco >= 400) {
        return `Lendário`
    }
    else if (preco >= 150) {
        return `Raro`
    }
    else {
        return `Comum`
    }
}

function registrar() {
    console.clear()

    let i = 0
    let posicao = -1

    for (i = 0; i < finalVetor; i++) {
        if (nomeItem[i] === undefined && posicao === -1) {
            posicao = i
        }
    }

    console.log(`+------------------------------+`)
    console.log(`| REGISTRAR ITEM |`)
    console.log(`+------------------------------+`)

    nomeItem[posicao] = prompt(`Nome do item: `)
    precoItem[posicao] = Number(prompt(`Preço do item: `))
    estoqueItem[posicao] = Number(prompt(`Quantidade em estoque: `))
    id[posicao] = posicao + 1

    console.log(`Item cadastrado com sucesso!`)
    prompt(`ENTER para voltar: `)
}

function comprar() {
    console.clear()

    console.log(`+------------------------------+`)
    console.log(`| CATÁLOGO |`)
    console.log(`+------------------------------+`)

    let i = 0
    for (i = 0; i < finalVetor; i++) {
        if (nomeItem[i] === undefined) {
            continue
        }
        console.log(`ID ${id[i]} - ${nomeItem[i]} - R$ ${precoItem[i]} - Estoque ${estoqueItem[i]} - ${raridades(precoItem[i])}`)
    }

    const idCompra = Number(prompt(`\nID do item que deseja comprar: `))
    let indice = -1

    for (i = 0; i < finalVetor; i++) {
        if (id[i] === idCompra) {
            indice = i
        }
    }

    if (indice === -1) {
        console.log(`Item não encontrado!`)
    }
    else if (estoqueItem[indice] <= 0) {
        console.log(`Sem estoque!`)
    }
    else {
        const quantidade = Number(prompt(`Quantidade: `))
        const total = quantidade * precoItem[indice]
        estoqueItem[indice] = estoqueItem[indice] - quantidade

        console.log(`Compra realizada! Total: R$ ${total}`)
    }

    prompt(`ENTER para voltar: `)
}

function excluir() {
    console.clear()

    const idExclusao = Number(prompt(`ID do item que deseja excluir: `))

    let i = 0
    for (i = 0; i < finalVetor; i++) {
        if (id[i] === idExclusao) {
            delete nomeItem[i]
            delete precoItem[i]
            delete estoqueItem[i]
            delete id[i]
        }
    }

    console.log(`Item excluído!`)
    prompt(`ENTER para voltar: `)
}

function telaInicial() {
    console.clear()
    console.log(`+------------------------------+`)
    console.log(`| LOJA |`)
    console.log(`+------------------------------+`)
    console.log(`| 1 - Comprar item |`)
    console.log(`| 2 - Adicionar item |`)
    console.log(`| 3 - Excluir item |`)
    console.log(`| 4 - Sair |`)
    console.log(`+------------------------------+`)
}

let opcao = 0

while (opcao !== 4) {
    telaInicial()
    opcao = Number(prompt(`Opção: `))

    if (opcao === 1) {
        comprar()
    }
    else if (opcao === 2) {
        registrar()
    }
    else if (opcao === 3) {
        excluir()
    }
}