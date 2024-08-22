fetch('metadata.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(resources => {
    const resourceBox = document.getElementById('oer');
    resources.forEach(resource => {
        const div = document.createElement('div');
        div.className = "col";
        const p = document.createElement('p');
        p.textContent = resource.title;
        div.appendChild(p);
        resourceBox.appendChild(div);
    });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });