import { projects } from "./projects.js";

export const createProjectCards = () => {
  projects.forEach((project) => {
    const projectsContainer = document.getElementById("projects-container");

    /* Creates project card */
    const card = document.createElement("div");
    card.id = project.title;
    card.classList.add("project-card");
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    card.appendChild(imgContainer);
    card.appendChild(infoContainer);

    /* Adds the screenshots as background image */
    imgContainer.style.cssText = `
      background: url(${project.imgURL}) no-repeat;
      background-size: 100%;
      background-color: #a8dadc;
    `;

    /* Adds the project title */
    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("project-title");
    projectTitle.innerText = project.title;

    /* Adds the technologies used */
    const technologies = document.createElement("div");
    technologies.classList.add("technologies");
    project.technology.forEach((tech) => {
      const techContainer = document.createElement("span");
      techContainer.classList.add("tech");
      techContainer.innerText = tech;

      switch (tech) {
        case "html":
          techContainer.style.cssText = `
            background-color: #e34c26;
          `;
          break;
        case "css":
          techContainer.style.cssText = `
            background-color: #264de4;
            color: #f1faee;
          `;
          break;
        case "CSS Grid":
          techContainer.style.cssText = `
            background-color: #264de4;
            color: #f1faee;
          `;
          break;
        case "sass":
          techContainer.style.cssText = `background-color: #cd6799`;
          break;
        case "javascript":
          techContainer.style.cssText = `background-color: #f0db4f`;
          break;
        case "ReactJS":
          techContainer.style.cssText = `background-color: #61DBFB`;
          break;
        case "Twitter API":
          techContainer.style.cssText = `background-color: #00acee`;
          break;
        case "ruby":
          techContainer.style.cssText = `
            background-color: #cc0000;
            color: #f1faee;
          `;
          break;
        case "webpack":
          techContainer.style.cssText = `background-color: #1C78C0`;
          break;

        default:
          techContainer.style.cssText = `background-color: #a8dadc`;
          break;
      }

      technologies.appendChild(techContainer);
    });

    infoContainer.appendChild(projectTitle);
    infoContainer.appendChild(technologies);

    /* Adds the hover buttons */
    const hoverBtns = document.createElement("div");
    hoverBtns.classList.add("hover-btns");
    const liveDemoBtn = document.createElement("a");
    liveDemoBtn.href = project.projectURL;
    liveDemoBtn.setAttribute("target", "_blank");
    liveDemoBtn.classList.add("live-demo-btn");
    liveDemoBtn.innerText = "Live Demo";
    const viewGithubBtn = document.createElement("a");
    viewGithubBtn.href = project.repoURL;
    viewGithubBtn.setAttribute("target", "_blank");
    viewGithubBtn.classList.add("view-github-btn");
    viewGithubBtn.innerText = "Source Code";

    hoverBtns.appendChild(liveDemoBtn);
    hoverBtns.appendChild(viewGithubBtn);
    card.appendChild(hoverBtns);

    projectsContainer.appendChild(card);

    /* Shows/hides the live demo and view Gihub buttons */
    card.addEventListener("mouseenter", () => {
      card.style.cssText = `
      filter: grayscale(1);
      `;
      liveDemoBtn.style.cssText = "display: block";
      viewGithubBtn.style.cssText = "display: block";
    });
    card.addEventListener("mouseleave", () => {
      card.style.cssText = `
        filter: grayscale(0);
      `;
      liveDemoBtn.style.cssText = "display: none";
      viewGithubBtn.style.cssText = "display: none";
    });
  });
};
