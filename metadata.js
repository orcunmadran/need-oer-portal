// Read JSON Data
fetch('metadata.json')
    .then(response => response.json())
    .then(jsonData => {
        const resourceBox = document.getElementById('oer');
        // Create Cards
        jsonData.forEach(resource => {
            const card = document.createElement('div');
            card.className = 'col-md-4 mb-4';
            card.innerHTML = `
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${resource.title}</h5>
                                <p class="card-text">${resource.description}</p>
                                <a href="#" target="_blank" class="btn btn-outline-secondary">resource detail</a>
                                <a href=${resource.identifier} target="_blank" class="btn btn-outline-primary">go to resource</a>
                            </div>
                        </div>
                    `;
            resourceBox.appendChild(card);
        });
    })
    .catch(error => console.error('Veri yüklenirken hata oluştu:', error));