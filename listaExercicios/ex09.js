const despedidas = (listaNomes) => {
  listaNomes.forEach(nome => console.log(`Até logo, ${nome}!`));
};

const clientes = ["Felipe", "Maria", "Lucas"];
despedidas(clientes);