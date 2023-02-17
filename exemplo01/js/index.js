const sentenceInput = document.getElementById('sentence')
const textCounterSpan = document.getElementById('text-counter')

sentenceInput.onkeyup = () => {
  const sentence = sentenceInput.value
  const counter = sentence.length
  textCounterSpan.innerText =
    counter > 0 ? `Quantidade de caracteres: ${counter}` : ''
}

const radicandInput = document.getElementById('radicand')
const squareRootSpan = document.getElementById('square-root')

radicandInput.oninput = () => {
  const radicandValue = radicandInput.value
  let squareRootResult = ''

  if (radicandValue) {
    const radicand = Number(radicandValue)
    const squareRoot = Math.sqrt(radicand)
    squareRootResult = `Raíz quadrada de ${radicand}: ${squareRoot}`
  }

  squareRootSpan.innerText = squareRootResult
}

const colorInput = document.getElementById('color-palette')
const colouredBox = document.getElementById('coloured-box')
colorInput.oninput = () => {
  const color = colorInput.value
  colouredBox.style.backgroundColor = color
}
