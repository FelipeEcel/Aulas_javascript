const loja = valorCompra => valorCompra >= 150 ? `Frete Gratis` : `Cobrar frete`

console.log(loja(100))