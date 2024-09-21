import './DarkMode.css'

export const toggle = () => {
  const toggleTheme = document.getElementById('toggle-theme')
  const toggleIcon = document.getElementById('toggle-icon')
  const toggleText = document.getElementById('toggle-text')
  document.body.classList.toggle('dark')

  if (toggleIcon.src.includes('moon.svg')) {
    toggleIcon.src = './assets/theme/sun.svg'
    toggleText.textContent = 'Light Mode'
  } else {
    toggleIcon.src = './assets/theme/moon.svg'
    toggleText.textContent = 'Dark Mode'
  }
}
