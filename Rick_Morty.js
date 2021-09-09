const RMDiv = document.querySelector(".RMDiv");

const rickMortyUrl = "https://rickandmortyapi.com/api/";

async function rickMortyCharacter(){
    const character = await(await fetch(rickMortyUrl+"character")).json();

    character.results.forEach(info => {
        const newDiv = document.createElement("div");
        
        newDiv.innerHTML = `<img src="${info.image}"/>
                            <h1>${info.name}</h1>
                            <h4>${info.species}</h4>
                            <h4>${info.status}</h4>
                            <h4>${info.origin.name}</h4>`;

        RMDiv.appendChild(newDiv);
    })   
};


rickMortyCharacter();