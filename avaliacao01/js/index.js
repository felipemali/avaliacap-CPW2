const botaoSomar = document.getElementById('botao-somar')
botaoSomar.onclick = () => {
  const valorNumero1 = document.getElementById('numero1').value
  const valorNumero2 = document.getElementById('numero2').value
  const numero1 = Number(valorNumero1)
  const numero2 = Number(valorNumero2)
  const resultado = numero1 + numero2
  const spanResultado = document.getElementById('resultado')
  spanResultado.innerText = `${valorNumero1} + ${valorNumero2} = ${resultado}`
}
