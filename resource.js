// Get ID from URL
        const url = new URL(window.location.href);
        const id = parseInt(url.searchParams.get('id'), 10); // convert ID to integer

        // Read JSON data
        fetch('metadata.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ağ hatası!');
                }
                return response.json();
            })
            .then(modules => {
                // Find matched ID
                const module = modules[id];

                // Show resource data
                const moduleInfoDiv = document.getElementById('module-info');
                if (module) {
                    moduleInfoDiv.innerHTML = `
                        <p><strong>Title:</strong> ${module.Title}</p>
                        <p><strong>Timestamp:</strong> ${module.Timestamp}</p>
                        <p><strong>Keywords:</strong> ${module.Keywords}</p>
                        <p><strong>Competence Area:</strong> ${module.CompetenceArea}</p>
                        <p><strong>Sub-Competence Area:</strong> ${module.SubCompetenceArea}</p>
                        <p><strong>Description:</strong> ${module.Description}</p>
                        <p><strong>Type:</strong> ${module.Type}</p>
                        <p><strong>Author (Creator):</strong> ${module.Author}</p>
                        <p><strong>Publisher:</strong> ${module.Publisher}</p>
                        <p><strong>License:</strong> ${module.License}</p>
                        <p><strong>Date:</strong> ${module.Date}</p>
                        <p><strong>Language:</strong> ${module.Language}</p>
                        <p><strong>Identifier:</strong> <a href="${module.Identifier}" target="_blank">${module.Identifier}</a></p>
                    `;
                } else {
                    moduleInfoDiv.innerHTML = `<p>Resource not found!</p>`;
                }
            })
            .catch(error => {
                console.error('Error: ', error);
            });