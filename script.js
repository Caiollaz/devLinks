function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
}

function renderLinks() {
  const projectsList = document.getElementById('projects-list');
  const personalLinksList = document.getElementById('personal-links-list');
  
  const projects = links.filter(link => link.type === LinkType.PROJECT);
  const personalLinks = links.filter(link => link.type === LinkType.PERSONAL);
  
  const projectsHTML = projects.map(project => `
    <li>
      <a href="${project.url}" target="_blank">
        Conheça ${project.name}
        ${project.status ? `<span class="status ${project.status}">${project.statusText}</span>` : ''}
      </a>
    </li>
  `).join('');
  
  const personalLinksHTML = personalLinks.map(link => `
    <li>
      <a href="${link.url}" target="_blank">
        Conheça ${link.name}
      </a>
    </li>
  `).join('');
  
  projectsList.innerHTML = projectsHTML;
  personalLinksList.innerHTML = personalLinksHTML;
}

// Não esqueça de chamar a função quando o documento carregar
document.addEventListener('DOMContentLoaded', renderLinks);
