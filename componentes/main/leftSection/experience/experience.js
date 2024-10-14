import './experience.css'
export const printExperience = () => {
  const articleExperience = document.createElement('article')

  articleExperience.classList.add('card')
  articleExperience.classList.add('card-experience')
  const title = document.createElement('h2')
  articleExperience.appendChild(title)
  title.className = 'card_title'
  title.setAttribute('data-section', 'experience')
  title.setAttribute('data-value', 'title')
  title.textContent = 'Experiences'

  const divExperience1 = document.createElement('div')
  divExperience1.className = 'experience'
  const divExperience2 = document.createElement('div')
  divExperience2.className = 'experience'

  const imgExperience1 = document.createElement('img')
  imgExperience1.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1726940082/Iconos/vecteezy_tiktok-logo-png-tikok-icon-transparent-png-tikok-app-logo-png_18930573_yk6kso.png'
  imgExperience1.alt = 'logo'
  imgExperience1.className = 'experience-image'
  const divInfoExp1 = document.createElement('div')
  divInfoExp1.className = 'experience_info'
  const timeExp1 = document.createElement('p')
  timeExp1.textContent = 'Febrero 2020 - July 2023'
  timeExp1.className = 'experience_time'
  timeExp1.setAttribute('data-section', 'experience')
  timeExp1.setAttribute('data-value', 'first-job-dates')
  const titleExp1 = document.createElement('h3')
  titleExp1.textContent = 'Trust and Safety- Quality Analyst'
  titleExp1.className = 'experience_job'
  titleExp1.setAttribute('data-section', 'experience')
  titleExp1.setAttribute('data-value', 'first-job-title')
  const descriptionExp1 = document.createElement('p')
  descriptionExp1.textContent =
    'This role has the following duties and responsibilities. Support the Team Lead in managing the team when needed '
  descriptionExp1.className = 'experience_description'
  descriptionExp1.setAttribute('data-section', 'experience')
  descriptionExp1.setAttribute('data-value', 'first-job-description')

  /* segunda exp */
  const imgExperience2 = document.createElement('img')
  imgExperience2.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1726940068/Iconos/logo-youtube_suk7yl.png'
  imgExperience2.alt = 'logo'
  imgExperience2.className = 'experience-image'
  const divInfoExp2 = document.createElement('div')
  divInfoExp2.className = 'experience_info'
  const timeExp2 = document.createElement('p')
  timeExp2.textContent = 'Febrero 2017 - July 2019'
  timeExp2.className = 'experience_time'
  timeExp2.setAttribute('data-section', 'experience')
  timeExp2.setAttribute('data-value', 'last-job-dates')
  const titleExp2 = document.createElement('h3')
  titleExp2.textContent = 'Trust and Safety- Quality Analyst'
  titleExp2.className = 'experience_job'
  titleExp2.setAttribute('data-section', 'experience')
  titleExp2.setAttribute('data-value', 'last-job-title')

  const descriptionExp2 = document.createElement('p')
  descriptionExp2.textContent =
    'This role has the following duties and responsibilities. Support the Team Lead in managing the team when needed '
  descriptionExp2.className = 'experience_description'
  descriptionExp2.setAttribute('data-section', 'experience')
  descriptionExp2.setAttribute('data-value', 'last-job-description')

  articleExperience.appendChild(divExperience1)
  articleExperience.appendChild(divExperience2)

  divExperience1.appendChild(imgExperience1)
  divExperience1.appendChild(divInfoExp1)
  divInfoExp1.appendChild(timeExp1)
  divInfoExp1.appendChild(titleExp1)
  divInfoExp1.appendChild(descriptionExp1)

  divExperience2.appendChild(imgExperience2)
  divExperience2.appendChild(divInfoExp2)
  divInfoExp2.appendChild(timeExp2)
  divInfoExp2.appendChild(titleExp2)
  divInfoExp2.appendChild(descriptionExp2)
  document.querySelector('.column--left').appendChild(articleExperience)
}
