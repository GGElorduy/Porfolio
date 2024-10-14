import './project.css'

export const printProject = (dataproject) => {
  const articlePorject = document.createElement('article')
  articlePorject.classList.add('card')
  articlePorject.classList.add('card-project')
  const divImg = document.createElement('div')
  divImg.className = 'card_image-container'

  const img = document.createElement('img')
  img.className = 'card-image'
  img.src = dataproject.img.link
  img.alt = dataproject.img.alt

  const divTags = document.createElement('div')
  const divProject = document.createElement('div')
  divProject.className = 'project'
  divTags.className = 'project_tags'
  divTags.innerHTML = dataproject.tags
  const title = document.createElement('h2')
  title.textContent = dataproject.name
  title.className = 'card_title'
  title.setAttribute('data-section', 'project')
  title.setAttribute('data-value', 'project1-title')
  articlePorject.appendChild(divImg)
  divImg.appendChild(img)
  articlePorject.appendChild(divProject)

  divProject.appendChild(divTags)
  divProject.appendChild(title)

  for (let index = 1; index <= 2; index++) {
    const p = document.createElement('p')
    p.className = 'card_text'
    p.setAttribute('data-section', 'project')
    p.setAttribute('data-value', `project${index}-text${index}`)
    p.textContent = dataproject.descripcion[index - 1]
    divProject.appendChild(p)
  }
  const divButtons = document.createElement('div')
  divButtons.className = 'buttons'

  for (let index = 1; index <= 2; index++) {
    const button = document.createElement('a')
    button.classList.add('button')
    button.classList.add(`button--${index}`)

    //! Aqui algo falla
    button.textContent = dataproject.buttons[index - 1][0]
    button.href = dataproject.buttons[index - 1][1]
    divButtons.appendChild(button)
  }

  divProject.appendChild(divButtons)
  document.querySelector('.column--right').appendChild(articlePorject)
}
