export default function fazerPagamento() {
  // por enquanto está client side pq o server não ta querendo executar
  return {
    type: 'pagamentoCartao',
    payload: 'chamada feita com sucesso. Redux working, It seems you have got it '
  }
}
