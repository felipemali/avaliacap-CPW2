const $ = document.getElementById.bind(document)

const showJson = localStorage.getItem('show')
const show = JSON.parse(showJson)

$('poster').src = show.imageUrl
$('name').innerText = show.name
$('type').innerText = show.type
$('language').innerText = show.language
$('genres').innerText = show.genres.join(', ')
$('running').innerText = show.running ? 'Sim' : 'Não'
$('channel').innerText = show.channel
