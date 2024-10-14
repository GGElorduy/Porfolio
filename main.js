import { printColor } from './componentes/header/color/color'
import { printToggle } from './componentes/header/dark/dark'
import { printFlags } from './componentes/header/flags/flags'
import { printExperience } from './componentes/main/leftSection/experience/experience'
import { printProfile } from './componentes/main/leftSection/profile/profile'
import { printHobbies } from './componentes/main/leftSection/hobbies/hobies'
import { printSkill } from './componentes/main/rightSection/skills/skills'
import { skills, projects } from './data/data'
import { printProject } from './componentes/main/rightSection/projects/project'
// Header

printToggle()
printColor()
printFlags()

//main
//? left

printProfile()
printExperience()
printHobbies()

//! right

printSkill(skills.frontend)

printSkill(skills.language)

printSkill(skills.equipo)

printProject(projects.pinterest)
