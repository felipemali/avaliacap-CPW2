$(document).ready(() => {
  $('#contact-phone').mask('(00) 00000-0000')
})

const saveContact = (event) => {
  event.preventDefault()

  const name = document.getElementById('contact-name').value
  // const name = $('#contact-name').val()
  const phone = document.getElementById('contact-phone').value
  const email = document.getElementById('contact-email').value

  const contact = { name, phone, email }
  contacts.push(contact)
  storeContacts()
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

const storeContacts = () => {
  const contactsJson = JSON.stringify(contacts)
  localStorage.setItem('contacts', contactsJson)
}

// Nosso banco de dados fake (mas muito fake)
const contactsJson = localStorage.getItem('contacts')
const contacts = contactsJson ? JSON.parse(contactsJson) : []
// for (let i = 0; i < contacts.length; i++) {
//   printContact(contacts[i])
// }
contacts.forEach((c) => printContact(c))
