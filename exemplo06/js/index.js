const API_URL = 'https://api.tvmaze.com/search/shows?'
const $ = document.getElementById.bind(document)

const searchShows = (event) => {
  event.preventDefault()

  const query = $('query').value

  // '  banana   '.trim() ->  'banana'
  // '   '.trim() -> ''
  // 'Sidney Sousa'.trim() -> 'Sidney Sousa'
  if (query.trim()) {
    const loadingAnimation = `
        <img src="/img/loading.gif" alt="Procurando...">
    `
    $('shows-area').innerHTML = loadingAnimation

    fetch(API_URL + new URLSearchParams({ q: query })).then((response) =>
      // Converte a resposta do serviço para JSON
      response.json().then((results) => {
        $('shows-area').innerHTML = ''

        // Laço de repetição para tratar cada um dos shows
        results.forEach((r) => {
          //const show = r.show
          const { show } = r
          const {
            name,
            type,
            language,
            genres,
            status,
            image,
            network,
            webChannel,
          } = show

          const isRunning = status === 'Ended' ? false : true
          const imageUrl = image ? image.medium : '/img/noimage.png'
          const channel = network ? network.name : webChannel.name

          const newShow = {
            name,
            type,
            language,
            genres,
            isRunning,
            imageUrl,
            channel,
          }

          printCard(newShow)
        })
      })
    )
  }
}

const printCard = (show) => {
  const showCard = `
        <div class="show-card">
            <img src="${show.imageUrl}" alt="${show.name}">

            <h3>${show.name}</h3>
        </div>
    `

  const showsArea = $('shows-area')
  showsArea.insertAdjacentHTML('beforeend', showCard)
}
