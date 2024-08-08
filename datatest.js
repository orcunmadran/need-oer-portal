fetch('datatest.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(resources => {
    const resourcesContainer = document.getElementById('resources');
    resources.forEach(resource => {
      // Her kullanıcı için bir <p> etiketi oluştur
      const resourceElement = document.createElement('p');
      resourceElement.textContent = `
        Title: ${resource.title},
        Keywords: ${resource.keywords},
        Competence area: ${resource.competenceArea},
        Sub-competence area: ${resource.subCompetenceArea},
        Description: ${resource.description},
        Type: ${resource.type},
        Author: ${resource.author},
        Publisher: ${resource.publisher},
        License: ${resource.license},
        Date: ${resource.date},
        Language: ${resource.language},
        Identifier: ${resource.identifier}
        `;
      // <p> etiketini resourcesContainer içine ekle
      resourcesContainer.appendChild(resourceElement);
    });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });