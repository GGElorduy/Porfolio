import './flags.css'

const changeLanguage = async (language) => {
  const textsToChange = document.querySelectorAll('[data-section]')

  const languageJSONpath = `./languages/${language}.json`
  const requestJson = await fetch(languageJSONpath)
  const text = await requestJson.json()
  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section
    const value = textToChange.dataset.value
    textToChange.innerHTML = text[section][value]
  }
}

const flagsElement = document.getElementById('flags')

export const printFlags = () => {
  const divFlags = document.createElement('div')
  divFlags.className = 'flags'
  divFlags.id = 'flags'

  const divFlag1 = document.createElement('div')
  divFlag1.className = 'flags-item'
  divFlag1.setAttribute('data-language', 'es_ES')

  const flag1 = document.createElement('img')
  flag1.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1726939793/Iconos/es_mmx5uo.svg'
  flag1.alt = 'flag'
  flag1.className = 'flag-image'

  const divFlag2 = document.createElement('div')
  divFlag2.className = 'flags-item'
  divFlag2.setAttribute('data-language', 'en_GB')

  const flag2 = document.createElement('img')
  flag2.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1726939792/Iconos/gb_ge2ham.svg'
  flag2.alt = 'flag'
  flag2.className = 'flag-image'

  divFlags.appendChild(divFlag1)
  divFlags.appendChild(divFlag2)
  divFlag1.appendChild(flag1)
  divFlag2.appendChild(flag2)
  document.querySelector('header').appendChild(divFlags)

  divFlags.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language)
  })
}
