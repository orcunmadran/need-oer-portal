function getResources() {
    // Selected language
    const selectedLang = document.querySelector('input[name="resourceLang"]:checked');
    // Selected resource type
    const selectedResourceType = document.querySelector('input[name="resourceType"]:checked');
    // Selected resource sub competence area
    const selectedSubCompetenceArea = document.querySelector('input[name="subCompetenceArea"]:checked');
    // Selected resource competence area
    const selectedCompetenceArea = document.querySelector('input[name="competenceArea"]:checked');
    // Clear Cards
    oer.innerHTML = "";
    // Read JSON Data
    fetch('metadata.json')
        .then(response => response.json())
        .then(jsonData => {
            const resourceBox = document.getElementById('oer');
            const filteredData = jsonData.filter(resource => {
                    return (!selectedLang || resource.Language === selectedLang.value) &&
                           (!selectedResourceType || resource.Type.includes(selectedResourceType.value)) &&
                           (!selectedSubCompetenceArea || resource.SubCompetenceArea.includes(selectedSubCompetenceArea.value)) &&
                           (!selectedCompetenceArea || resource.CompetenceArea.includes(selectedCompetenceArea.value))
                });
            // Create Cards
            filteredData.forEach(resource => {
                const card = document.createElement('div');
                card.className = 'col-md-4 mb-4';
                card.innerHTML = `
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${resource.Title}</h5>
                                    <p class="card-text">${resource.Description}</p>
                                    <a href="#" target="_blank" class="btn btn-outline-secondary">resource detail</a>
                                    <a href=${resource.Identifier} target="_blank" class="btn btn-outline-primary">go to resource</a>
                                </div>
                            </div>
                        `;
                resourceBox.appendChild(card);
            });
        })
        .catch(error => console.error('Veri yüklenirken hata oluştu:', error));
}
function clearResources(){
    oer.innerHTML = "";
    const selectedOptionLanguage = document.querySelector('input[name="resourceLang"]:checked');
    const selectedOptionResourceType = document.querySelector('input[name="resourceType"]:checked');
    const selectedOptionSubCompetenceArea = document.querySelector('input[name="subCompetenceArea"]:checked');
    const selectedOptionCompetenceArea = document.querySelector('input[name="competenceArea"]:checked');
    if (selectedOptionLanguage) {
        selectedOptionLanguage.checked = false; // Clear selection
    }
    if (selectedOptionResourceType) {
        selectedOptionResourceType.checked = false; // Clear selection
    }
    if (selectedOptionSubCompetenceArea) {
        selectedOptionSubCompetenceArea.checked = false; // Clear selection
    }
    if (selectedOptionCompetenceArea) {
        selectedOptionCompetenceArea.checked = false; // Clear selection
    }
    getResources();
}