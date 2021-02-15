import { projects } from "./projects.js"

export const  createProjectCards = () => {
  projects.forEach(project => {
    const projectsContainer = document.getElementById('projects-container');
    const card = document.createElement('div');
    card.id = project.title;
    card.classList.add('project-card')
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    card.appendChild(imgContainer);
    card.appendChild(infoContainer);

    /* imgContainer.style.cssText = `
      background: ${project.imgURL} no-repeat;
    `; */

    const projectTitle = document.createElement('h3');
    projectTitle.classList.add('project-title');
    projectTitle.innerText = project.title;

    const technologies = document.createElement('div');
    technologies.classList.add('technologies');
    project.technology.forEach(tech => {
      const techContainer = document.createElement('span');
      techContainer.classList.add('tech');
      techContainer.innerText = tech;

      switch (tech) {
        case 'html':
          techContainer.style.cssText = `
            background-color: #e34c26;
          `;
          break;
        case 'css':
          techContainer.style.cssText = `
            background-color: #264de4;
            color: #f1faee;
          `;
          break;
        case 'CSS Grid':
          techContainer.style.cssText = `
            background-color: #264de4;
            color: #f1faee;
          `;
          break;
        case 'sass':
          techContainer.style.cssText = `background-color: #cd6799`;
          break;
        case 'javascript':
          techContainer.style.cssText = `background-color: #f0db4f`;
          break;
        case 'ReactJS':
          techContainer.style.cssText = `background-color: #61DBFB`;
          break;
        case 'Twitter API':
          techContainer.style.cssText = `background-color: #00acee`;
          break;
        case 'ruby':
          techContainer.style.cssText = `
            background-color: #cc0000;
            color: #f1faee;
          `;
          break;
        default:
          techContainer.style.cssText = `background-color: #a8dadc`;
          break;
      }

      technologies.appendChild(techContainer);
    })

    infoContainer.appendChild(projectTitle);
    infoContainer.appendChild(technologies);

    projectsContainer.appendChild(card);
  })
}