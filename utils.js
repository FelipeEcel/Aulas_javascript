export function saudacao(nome = 'Visitante') {
  console.log(`Olá, ${nome}`);
}

export const dobro = n => n * 2;

export const formatarMoeda = valor => 'R$ ' + valor.toFixed(2).replace('.', ',');

export function validarEmail(email) {
    return email.includes('@') && email.includes('.');