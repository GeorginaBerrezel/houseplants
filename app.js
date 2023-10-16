// Sélectionnez l'élément où la liste des plantes sera affichée
const plantList = document.querySelector(".main__plant-list");

// Créez un tableau de plantes
const plantData = [
    { name: "Fougère", type: "Feuillage", care: "Arrosage régulier" },
    { name: "Spathiphyllum", type: "Fleurs", care: "Arrosage modéré" },
    { name: "Cactus", type: "Succulent", care: "Arrosage occasionnel" },
];

// Parcourez le tableau de plantes et ajoutez-les à la liste
plantData.forEach((plant) => {
    const plantItem = document.createElement("div");
    plantItem.classList.add("plant-item");
    plantItem.innerHTML = `
        <h2>${plant.name}</h2>
        <p><strong>Type :</strong> ${plant.type}</p>
        <p><strong>Entretien :</strong> ${plant.care}</p>
    `;
    plantList.appendChild(plantItem);
});


// Sélectionnez le formulaire
const plantForm = document.getElementById("plant-form");

// Ajoutez un gestionnaire d'événements pour le formulaire
plantForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupérez les valeurs des champs du formulaire
    const plantName = document.getElementById("plant-name").value;
    const plantType = document.getElementById("plant-type").value;
    const plantCare = document.getElementById("plant-care").value;

    // Créez un objet représentant la nouvelle plante
    const newPlant = {
        name: plantName,
        type: plantType,
        care: plantCare,
    };

    // Ajoutez la nouvelle plante au tableau de données
    plantData.push(newPlant);

    // Réinitialisez le formulaire
    plantForm.reset();

    // Mettez à jour l'affichage de la liste des plantes
    renderPlantList();
});

// Fonction pour mettre à jour l'affichage de la liste des plantes
function renderPlantList() {
    // Sélectionnez l'élément où la liste des plantes est affichée
    const plantList = document.querySelector(".main__plant-list");

    // Effacez le contenu actuel
    plantList.innerHTML = "";

    // Parcourez le tableau de données et ajoutez chaque plante à la liste
    plantData.forEach((plant) => {
        const plantItem = document.createElement("div");
        plantItem.classList.add("plant-item");
        plantItem.innerHTML = `
            <h2>${plant.name}</h2>
            <p><strong>Type :</strong> ${plant.type}</p>
            <p><strong>Entretien :</strong> ${plant.care}</p>
        `;
        plantList.appendChild(plantItem);
    });
}
