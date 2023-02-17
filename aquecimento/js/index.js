//const container = document.getElementById('container')
const container = document.querySelector('#container')

const containerTitle = document.createElement('h2')
containerTitle.innerText = 'Bem vindo ao aquecimento!'
containerTitle.className = 'title'
container.appendChild(containerTitle)

const headerTitle = document.querySelector('header h1')
headerTitle.className = 'title'

const addPersonButton = document.createElement('button')
addPersonButton.innerText = 'Adicionar'
addPersonButton.className = 'person-button'
addPersonButton.type = 'button'
// <button type="button">Clique aqui</button>
container.appendChild(addPersonButton)

const clearListButton = document.createElement('button')
clearListButton.innerText = 'Limpar'
clearListButton.className = 'person-button'
clearListButton.type = 'button'
container.appendChild(clearListButton)

const peopleList = document.createElement('ul')
container.appendChild(peopleList)

// Cria uma arrow function
const addPerson = () => {
  const name = faker.name.findName()
  const personItem = document.createElement('li')
  personItem.innerText = name
  peopleList.appendChild(personItem)
}
addPersonButton.onclick = addPerson

const clearList = () => {
  peopleList.innerHTML = ''
}
clearListButton.onclick = clearList
//const firstPerson = document.querySelector('ul > li:nth-child(1)')
//peopleList.removeChild(firstPerson)
