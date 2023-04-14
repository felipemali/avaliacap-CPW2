const url = 'https://api.tvmaze.com/search/shows?'
const query = 'girls'

fetch(url + new URLSearchParams({ q: query })).then((response) =>
  // COnverte a resposta do serviço para JSON
  response.json().then((results) => {
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
      const imageUrl = image ? image.medium : ''
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

      printShow(newShow)
    })
  })
)

const printShow = (show) => {
  const showCard = `
        <div>
            <p>Name: ${show.name}</p>
            <p>Type: ${show.type}</p>
            <p>Language: ${show.language}</p>
            <p>Genres: ${show.genres.join(', ')}</p>
            <p>Is running: ${show.isRunning ? 'Yes' : 'No'}</p>
            <p>Channel: ${show.channel}</p>
            <img src="${show.imageUrl}" alt="${show.name}">
        </div>
    `

  const showsDiv = document.getElementById('shows')
  showsDiv.insertAdjacentHTML('beforeend', showCard)
}
