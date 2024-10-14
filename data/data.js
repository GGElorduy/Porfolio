export const skills = {
  frontend: `<h2 class="card_title" data-section="habilidades" data-value="skill2-title">Diseño Front End</h2><small>Lvl</small><div class="skills_header"><span class="skills_start-level">0</span><span class="skills_start-level">5</span></div><div class="skills"><div class="skills_item"><p class="skills_tech">HTML</p><div 1  class="skills_bar skills_bar--70"></div></div><div class="skills_item"><p class="skills_tech">CSS</p><div class="skills_bar skills_bar--60"></div></div><div 2  class="skills_item"><p class="skills_tech">JS</p><div 3  class="skills_bar skills_bar--70"></div></div><div class="skills_item"><p class="skills_tech">React</p><div class="skills_bar skills_bar--20"></div></div><div 4  class="skills_item"><p class="skills_tech">PHP</p><div class="skills_bar skills_bar--10"></div></div></div>`,
  language: `<h2 class="card_title" data-section="habilidades" data-value="skill1-title">Idiomas</h2><small>Lvl</small><div class="skills_header"><span class="skills_start-level">0</span><span class="skills_start-level">5</span></div><div class="skills"><div class="skills_item"><p class="skills_tech" 1  data-section="habilidades" data-value="Firs-skill1">Inglés</p><div class="skills_bar skills_bar--80"></div></div><div class="skills_item"><p class="skills_tech" data-section="habilidades" data-value="Second-skill1">Español</p><div class="skills_bar skills_bar--100"></div></div><div class="skills_item"><p class="skills_tech" data-section="habilidades" data-value="Thirth-skill1">Portugués</p><div class="skills_bar skills_bar--60"></div></div></div>   
`,
  equipo: `<h2 class="card_title" data-section="habilidades" data-value="skill3-title">Trabajo en equipo</h2><small>Lvl</small><div class="skills_header"><span class="skills_start-level">0</span><span class="skills_start-level">5</span></div><div class="skills"><div class="skills_item"><p class="skills_tech" 1  data-section="habilidades" data-value="Firs-skill3">Trabajo Individual</p><div class="skills_bar skills_bar--90"></div></div><div class="skills_item"><p class="skills_tech" data-section="habilidades" data-value="Second-skill3">Trabajo en equipo</p><div class="skills_bar skills_bar--100"></div></div></div>   
`
}
export const projects = {
  pinterest: {
    name: 'Réplica de pinterest',
    img: {
      link: 'https://res.cloudinary.com/dbnbfpype/image/upload/v1717237257/Proyects/ScreenShot_Tool_-20240601121946_cpwe7s.png',
      alt: 'Réplica de pinterest'
    },
    tags: `<span class="project_tag">#HTML</span><span class="project_tag">#CSS</span><span class="project_tag">#JS</span><span class="project_tag">#Responsive</span>  `,
    descripcion: [
      'Esta página nos permite ver diferentes tipos de imágenes mediante la búsqueda que realice un usuario.Un proyecto hecho con VITE, hecho a través de componentes para repartir y reutilizar mejor nuestro código. Se utiliza la API de unsplash para realizar las peticiones y que nos permita obtener diferentes imágenes según al búsqueda.',
      `Incorpora funcionalidades como creacion de cuenta y guardado de elementos`
    ],
    buttons: [
      ['Demo', 'https://photo-galery-unshplash-jgg.netlify.app/'],
      ['Code', 'https://github.com/GGElorduy/Photo-Galery-Unshplash.git']
    ]
  }
}
