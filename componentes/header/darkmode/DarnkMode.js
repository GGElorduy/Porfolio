import './DarkMode.css'

export const toggle = () => {
  const toggleTheme = document.getElementById('toggle-theme')
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
