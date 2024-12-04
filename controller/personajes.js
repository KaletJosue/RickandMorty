async function getAllCharacters() {
    try {
        let url = 'https://rickandmortyapi.com/api/character';
        const container = document.getElementById('characters-container');

        while (url) {
            const response = await fetch(url);
            const data = await response.json();

            data.results.forEach(character => {
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('character-card');

                const img = document.createElement('img');
                img.src = character.image;
                img.alt = character.name;
                characterDiv.appendChild(img);

                const name = document.createElement('h2');
                name.textContent = character.name;
                characterDiv.appendChild(name);

                const description = document.createElement('p');
                description.textContent = `Species: ${character.species}, Gender: ${character.gender}, 
                Origin: ${character.origin.name}, Location: ${character.location.name}`;
                characterDiv.appendChild(description);

                container.appendChild(characterDiv);
            });

            url = data.info.next;
        }
    } catch (error) {
        console.error('Error obteniendo los personajes:', error);
    }
}

getAllCharacters();
