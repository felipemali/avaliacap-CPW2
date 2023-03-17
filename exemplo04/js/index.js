$(document).ready(() => {
  $('#contact-phone').mask('(00) 00000-0000')
})

// Nosso banco de dados fake (mas muito fake)
const contacts = []

const saveContact = (event) => {
  event.preventDefault()

  const name = document.getElementById('contact-name').value
  // const name = $('#contact-name').val()
  const phone = document.getElementById('contact-phone').value
  const email = document.getElementById('contact-email').value

  const contact = { name, phone, email }
  contacts.push(contact)
  printContact(contact)
  clearForm()
}

const clearForm = () => {
  // document.getElementById('contact-form').reset()
  const contactForm = document.getElementById('contact-form')
  contactForm.reset()
}

const printContact = (contact) => {
  const { name, phone, email } = contact

  const contactCardValue = `
    <div class='contact-card'>
        <div class='contact-row'>
            <span class='first-letter'>
                ${name.charAt(0).toUpperCase()}
            </span>
            <span class='contact-name'>
                ${name.substring(1)}
            </span>
        </div>

        <div class='contact-row'>
            <span class='contact-metadata'>
                ${phone}
            </span>
        </div>

        <div class='contact-row'>
            <span class='contact-metadata'>
                ${email}
            </span>
        </div>
    </div>
  `

  const contactsArea = document.getElementById('contacts-area')
  contactsArea.insertAdjacentHTML('afterbegin', contactCardValue)
}
