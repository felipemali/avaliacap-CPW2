import { renderCard } from './components/Card'
import './style.css'

const app = document.getElementById('app')

renderCard(app, '/img/facebook.png', 'Entrar com Facebook')
renderCard(app, '/img/google.png', 'Entrar com Google')
renderCard(app, '/img/microsoft.png', 'Entrar com Microsoft')
renderCard(app, '/img/github.png', 'Entrar com Github')
