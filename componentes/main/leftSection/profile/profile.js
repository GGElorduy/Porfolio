import './profile.css'

export const printProfile = () => {
  const articleProfile = document.createElement('article')
  articleProfile.classList.add('card')
  articleProfile.classList.add('card--profile')
  const imageContainer = document.createElement('div')
  const img = document.createElement('img')
  imageContainer.className = 'card_image-container'
  img.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1726940010/Portfolio/profile_qgzsb4.jpg'
  img.alt = 'profile picture'

  articleProfile.appendChild(imageContainer)
  imageContainer.appendChild(img)

  const cardHead = document.createElement('div')
  cardHead.className = 'card_header'
  const h2 = document.createElement('h2')
  h2.className = 'card_title'
  h2.textContent = 'Freakpowar'
  const p = document.createElement('p')
  p.className = 'card_subtitle'
  p.setAttribute('data-section', 'profile')
  p.setAttribute('data-value', 'rol')
  p.textContent = 'Front-end Developer'
  articleProfile.appendChild(cardHead)
  cardHead.appendChild(h2)
  cardHead.appendChild(p)

  const cardBody = document.createElement('div')
  cardBody.className = 'card_body'

  const divLinkMail = document.createElement('div')
  const divLinkWa = document.createElement('div')
  const imgMail = document.createElement('img')
  const aMail = document.createElement('a')
  const imgWa = document.createElement('img')
  const aWa = document.createElement('a')

  divLinkMail.className = 'cardlink'
  divLinkWa.className = 'cardlink'
  imgMail.className = 'icon'
  imgWa.className = 'icon'

  imgMail.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1717408911/Iconos/gmail_abyzzs.png'
  imgMail.alt = 'mail'
  imgWa.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1717409611/Iconos/whatsapp_hzz4dy.png'
  imgWa.alt = 'whatsapp'
  aMail.href = 'mailto:gilguijarro.elorduy@gmail.com'
  aMail.textContent = 'gilguijarro.elorduy@gmail.com'
  aWa.href = 'tel:+34631597491'
  aWa.textContent = '+34631597491'
  articleProfile.appendChild(cardBody)
  cardBody.appendChild(divLinkMail)
  divLinkMail.appendChild(imgMail)
  divLinkMail.appendChild(aMail)
  cardBody.appendChild(divLinkWa)
  divLinkWa.appendChild(imgWa)
  divLinkWa.appendChild(aWa)
  const descriptionProfile = document.createElement('p')
  descriptionProfile.className = 'card_text'
  descriptionProfile.setAttribute('data-section', 'profile')
  descriptionProfile.setAttribute('data-value', 'description')
  descriptionProfile.textContent =
    'Mas de 3 años de experiencia en desarrollo web. Apasionado de las nuevas tecnologias y Star wars. En especial del ecosistema HTML y de los Wookkies.'
  cardBody.appendChild(descriptionProfile)
  document.querySelector('.column--left').appendChild(articleProfile)
}
