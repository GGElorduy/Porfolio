import './hobies.css'

export const printHobbies = () => {
  const articleHobbies = document.createElement('article')

  articleHobbies.classList.add('card')
  articleHobbies.classList.add('card-hobies')

  const title = document.createElement('h2')
  title.className = 'card_title'
  title.setAttribute('data-section', 'hobbies')
  title.setAttribute('data-value', 'title')
  title.textContent = 'Hobbies'
  const divImg = document.createElement('div')
  const img = document.createElement('img')
  divImg.className = 'card_image-container'
  img.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1726940010/Portfolio/paseando-perros_fhz8sd.jpg'

  img.alt = 'hobbie'
  const hobbieTitle = document.createElement('h3')
  hobbieTitle.className = 'Terapia de Mascotas'
  hobbieTitle.setAttribute('data-section', 'hobbies')
  hobbieTitle.setAttribute('data-value', 'first-hobbie-title')
  hobbieTitle.textContent = 'Terápia Asistida de Mascotas'
  const hobbieDescription = document.createElement('p')
  hobbieDescription.className = 'card_text'
  hobbieDescription.setAttribute('data-section', 'hobbies')
  hobbieDescription.setAttribute('data-value', 'first-hobbie-description')
  hobbieDescription.textContent =
    'La terapia asistida con animales utiliza la interacción con animales entrenados para mejorar la salud física, emocional y social de las personas. Se emplea en diversas terapias y puede ayudar a reducir el estrés, mejorar la autoestima y fomentar la socialización.'

  document.querySelector('.column--left').appendChild(articleHobbies)
  articleHobbies.appendChild(title)
  articleHobbies.appendChild(divImg)
  divImg.appendChild(img)
  articleHobbies.appendChild(hobbieTitle)
  articleHobbies.appendChild(hobbieDescription)
}
