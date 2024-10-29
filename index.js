function getResources() {
    //Selected language
    const selectedLang = document.querySelector('input[name="resourceLang"]:checked');
    // Clear Cards
    oer.innerHTML = "";
    // Read JSON Data
    fetch('metadata.json')
        .then(response => response.json())
        .then(jsonData => {
            const resourceBox = document.getElementById('oer');
            filteredData = "";
            if (selectedLang == null){
                filteredData = jsonData;
            } else {
                filteredData = selectedLang.value ? jsonData.filter(resource => resource.Language === selectedLang.value) : jsonData;
            }
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
    const selectedOption = document.querySelector('input[name="resourceLang"]:checked');
    if (selectedOption) {
        selectedOption.checked = false; // Clear selection
      }
    getResources();
}