import './skills.css'

export const printSkill = (x) => {
  const articleSkill = document.createElement('article')
  articleSkill.className = 'card'
  articleSkill.innerHTML = x
  document.querySelector('.column--right').appendChild(articleSkill)
}
