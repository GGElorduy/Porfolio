//import './style.css'
/* import { toggle } from './componentes/header/darkmode/DarkMode.js'
import { changeLanguage } from './componentes/header/ChangeLanguage/ChangeLanguage.js'
 */
const toggleTheme = document.getElementById('toggle-theme')
const toggleIcon = document.getElementById('toggle-icon')
const toggleText = document.getElementById('toggle-text')

const flagsElement = document.getElementById('flags')

const textsToChange = document.querySelectorAll('[data-section]')

/* Dark Mode */

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

toggleTheme.addEventListener('click', () => toggle())
/* Primary Color */
const toggleColors = document.getElementById('toggle-colors')
const rootStyes = document.documentElement.style
toggleColors.addEventListener('click', (e) => {
  rootStyes.setProperty('--primary-color', e.target.dataset.color)
})
/*  Change Language*/

export const changeLanguage = async (language) => {
  const languageJSONpath = `./languages/${language}.json`
  const requestJson = await fetch(languageJSONpath)
  const text = await requestJson.json()
  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section
    const value = textToChange.dataset.value
    textToChange.innerHTML = text[section][value]
  }
}

flagsElement.addEventListener('click', (e) => {
  changeLanguage(e.target.parentElement.dataset.language)
})
