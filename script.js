import { PROJECTS } from "./PROJECTS.js";

const projectsArray = Object.keys(PROJECTS).map(key => ({
        name: PROJECTS[key].title,
        githubURL: PROJECTS[key].githubURL,
        description: PROJECTS[key].description,
        liveURL: PROJECTS[key].liveURL
    }));

const container = document.getElementById("container");

projectsArray.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project');
    projectCard.id = `${project.name}-project`;

    const projectTitle = document.createElement('h2');
    projectTitle.innerHTML = project.name;
    projectCard.appendChild(projectTitle);

    const githubURL = document.createElement('a');
    githubURL.innerHTML = 'Link to GitHub Repo';
    githubURL.setAttribute("href", project.githubURL);
    projectCard.appendChild(githubURL);

    const liveURL = document.createElement('a');
    liveURL.innerHTML = 'Live Demo';
    liveURL.setAttribute("href", project.liveURL);
    projectCard.appendChild(liveURL);
    
    const descriptionTitle = document.createElement('h3');
    descriptionTitle.innerText = 'Project Info';

    const description = document.createElement('p');
    description.id = `${project.name}-description`;
    description.innerText = project.description;
    projectCard.appendChild(descriptionTitle);
    projectCard.appendChild(description);

    container.appendChild(projectCard);
});

