const listaVIP = (nomes=['Felipe'], nomeBuscado='Felipe') => {

    for (const nome of nomes) {
      if (nome === nomeBuscado) {
        return true
      }
    }
    return false
  }
  
  console.log(listaVIP(['Felipe']))