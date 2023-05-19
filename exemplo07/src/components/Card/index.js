import './styles.css'

export const renderCard = (container, logo, title) => {
  const htmlContent = `
        <div class="card">
            <img class="card-logo" src="${logo}" alt="${title}">
            
            <span class="card-title">${title}</span>
        </div>
    `

  container.insertAdjacentHTML('beforeend', htmlContent)
}
