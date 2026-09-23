const calcularTotal = function(precos=[]) {
    let total = 0
    
      for (const preco of precos) {
        total += preco
    }
    
    return total
    }
    console.log (`Resultado: ${calcularTotal(precos=[10, 10, 10, 10])}`)