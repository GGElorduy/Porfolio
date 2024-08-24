import './Header.css'
import { data } from '../../data'

const data2 = [...data]
const namesArray = []

for (const language of data2) {
  {
    namesArray.push(data2[language].name)
    return namesArray
  }
}

export const setLanguage = () => {
  const languageSelect = document.getElementById('language')
  const navUl = document.querySelector('#navHeader')

  // Clear existing list items (prevents duplicates on language change)
  navUl.innerHTML = ''

  // Create options for each language in data
  for (const language in namesArray) {
    const option = document.createElement('option')
    option.value = language
    option.textContent = language.toUpperCase() // Display language in uppercase

    languageSelect.appendChild(option)
  }

  // Set initial language based on user preference (optional)
  const preferredLanguage = localStorage.getItem('preferredLanguage')
  if (preferredLanguage && data[preferredLanguage]) {
    languageSelect.value = preferredLanguage
  } else {
    // Default to English if no preference or language not found
    languageSelect.value = 'eng'
  }

  // Update navigation based on selected language
  updateNavigation(languageSelect.value)

  // Event listener for future language changes
  languageSelect.addEventListener('change', (event) => {
    updateNavigation(event.target.value)
    localStorage.setItem('preferredLanguage', event.target.value) // Store preference
  })
}

const updateNavigation = (selectedLanguage) => {
  const navUl = document.querySelector('header nav ul.ulHeader')

  navUl.innerHTML = '' // Clear existing list items again

  // Create list items for the selected language
  data[selectedLanguage].ulHeader.forEach((item) => {
    const listItem = document.createElement('li')
    listItem.textContent = item
    navUl.appendChild(listItem)
  })
}

window.addEventListener('DOMContentLoaded', setLanguage) // Call on page load
