// URL'den timestamp parametresini al
        const url = new URL(window.location.href);
        const timestamp = url.searchParams.get('timestamp'); // timestamp değeri string olarak gelir

        // Harici JSON dosyasını oku
        fetch('metadata.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ağ hatası!');
                }
                return response.json();
            })
            .then(modules => {
                // Eşleşen modülü bul
                const matchedModule = modules.find(module => module.Timestamp.toString() === timestamp);

                // Bilgiyi ekrana yazdır
                const moduleInfoDiv = document.getElementById('module-info');
                if (matchedModule) {
                    moduleInfoDiv.innerHTML = `
                        <p><strong>Title:</strong> ${matchedModule.Title}</p>
                        <p><strong>Timestamp:</strong> ${matchedModule.Timestamp}</p>
                        <p><strong>Keywords:</strong> ${matchedModule.Keywords}</p>
                        <p><strong>Competence Area:</strong> ${matchedModule.CompetenceArea}</p>
                        <p><strong>Sub-Competence Area:</strong> ${matchedModule.SubCompetenceArea}</p>
                        <p><strong>Description:</strong> ${matchedModule.Description}</p>
                        <p><strong>Type:</strong> ${matchedModule.Type}</p>
                        <p><strong>Author (Creator):</strong> ${matchedModule.Author}</p>
                        <p><strong>Publisher:</strong> ${matchedModule.Publisher}</p>
                        <p><strong>License:</strong> ${matchedModule.License}</p>
                        <p><strong>Date:</strong> ${matchedModule.Date}</p>
                        <p><strong>Language:</strong> ${matchedModule.Language}</p>
                        <p><strong>Identifier:</strong> <a href="${matchedModule.Identifier}" target="_blank">${matchedModule.Identifier}</a></p>
                    `;
                } else {
                    moduleInfoDiv.innerHTML = `<p>Eşleşen kayıt bulunamadı.</p>`;
                }
            })
            .catch(error => {
                console.error('Hata:', error);
            });