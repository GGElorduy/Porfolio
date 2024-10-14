import './color.css'
export const colorFuntion = () => {
  const toggleColors = document.getElementById('toggle-colors')
  const rootStyes = document.documentElement.style
  toggleColors.addEventListener('click', (e) => {
    rootStyes.setProperty('--primary-color', e.target.dataset.color)
  })
}
export const printColor = () => {
  const divColors = document.createElement('div')
  const divColor1 = document.createElement('div')
  const divColor2 = document.createElement('div')
  const divColor3 = document.createElement('div')
  const divColor4 = document.createElement('div')

  divColors.id = 'toggle-colors'
  divColors.className = 'colors'

  divColor1.setAttribute('data-color', 'hsl(214, 84%, 56%)')
  divColor1.classList.add('colors_item')
  divColor1.classList.add('colors_item--blue')

  divColor2.setAttribute('data-color', 'hsl(128, 70%, 58%)')
  divColor2.classList.add('colors_item')
  divColor2.classList.add('colors_item--green')

  divColor3.setAttribute('data-color', 'hsl(288, 90%, 51%)')
  divColor3.classList.add('colors_item')
  divColor3.classList.add('colors_item--purple')

  divColor4.setAttribute('data-color', 'hsl(41, 100%, 53%)')
  divColor4.classList.add('colors_item')
  divColor4.classList.add('colors_item--orange')

  divColors.appendChild(divColor1)
  divColors.appendChild(divColor2)
  divColors.appendChild(divColor3)
  divColors.appendChild(divColor4)
  document.querySelector('header').appendChild(divColors)
  colorFuntion()
}
