//import './style.css'
import { toggle } from './componentes/header/darkmode/DarkMode.js'

const toggleTheme = document.getElementById('toggle-theme')
const toggleIcon = document.getElementById('toggle-icon')
const toggleText = document.getElementById('toggle-text')

const flagsElement = document.getElementById('flags')

const textsToChange = document.querySelectorAll('[data-section]')

const changeLanguage = async (language) => {
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

/* Dark Mode */
toggleTheme.addEventListener('click', () => toggle())
/* Primary Color */
const toggleColors = document.getElementById('toggle-colors')
const rootStyes = document.documentElement.style
toggleColors.addEventListener('click', (e) => {
  rootStyes.setProperty('--primary-color', e.target.dataset.color)
})
/*  */
