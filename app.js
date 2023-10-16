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
