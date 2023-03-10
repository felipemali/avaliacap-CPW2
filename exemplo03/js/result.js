const search = window.location.search
const params = new URLSearchParams(search)
const deltaS = params.get('deltaS')
const deltaT = params.get('deltaT')
console.log(deltaS, deltaT)
const sValue = deltaS !== '' ? Number(deltaS) : NaN
const tValue = deltaT !== '' ? Number(deltaT) : NaN
const resultValueSpan = document.getElementById('result-value')

if (!isNaN(sValue) && !isNaN(tValue) && tValue !== 0) {
  const avgSpeed = sValue / tValue
  resultValueSpan.innerText = `${avgSpeed} m/s`
} else {
  resultValueSpan.innerText = 'Valor indefinido (parâmetros inválidos)'
}
