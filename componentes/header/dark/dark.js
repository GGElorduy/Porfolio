import './dark.css'

export const toggle = () => {
  const toggleIcon = document.getElementById('toggle-icon')
  const toggleText = document.getElementById('toggle-text')
  document.body.classList.toggle('dark')

  if (toggleIcon.src.includes('moon_pbnfvc9aiadf')) {
    toggleIcon.src =
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1726942244/Iconos/sun_i4m40gfcuzly_ro58bl.svg'
    toggleText.textContent = 'Light Mode'
  } else {
    toggleIcon.src =
      'https://res.cloudinary.com/dbnbfpype/image/upload/v1726942243/Iconos/moon_pbnfvc9aiadf_trrx0d.svg'
    toggleText.textContent = 'Dark Mode'
  }
}
export const printToggle = () => {
  const darkContainer = document.createElement('div')
  const divDark = document.createElement('div')
  const darkImg = document.createElement('img')
  const darkP = document.createElement('p')

  darkContainer.className = 'switches'
  divDark.className = 'toggle-theme'
  divDark.id = 'toggle-theme'
  darkImg.className = 'toggle-theme_icon'
  darkImg.id = 'toggle-icon'
  darkImg.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1726942243/Iconos/moon_pbnfvc9aiadf_trrx0d.svg'
  darkImg.alt = 'icon-theme'
  darkP.id = 'toggle-text'
  darkP.className = 'toggle-theme_text'
  darkP.textContent = 'Dark Mode'

  darkContainer.appendChild(divDark)
  divDark.appendChild(darkImg)
  divDark.appendChild(darkP)
  document.querySelector('header').appendChild(darkContainer)
  darkContainer.addEventListener('click', () => toggle())
}
