

// fetch("pieces-autos.json")
// .then(response => response.json())
// .then(data => {
//     console.log("data", data)
// })

// Récupération des pièces depuis le fichier JSON
var reponse = await fetch('http://localhost:8081/pieces');
var pieces = await reponse.json();

const fiches = document.getElementById('fiches');

function listItems(data) {

    pieces.forEach(piece => {
        
        const containerItem  = document.createElement("div");
            containerItem.classList.add("container");
            containerItem.style.border = "solid black 2px";
            containerItem.style.boxShadow = "0px 0px 4px grey";
            containerItem.style.textAlign = "center";
            containerItem.style.width = "260px";

        const nameElt = document.createElement("h2");
                nameElt.textContent = `Nom : ${piece.nom}`;
        const priceElt = document.createElement("p");
            priceElt.textContent = `Prix : ${piece.prix} ${piece.prix < 35 ? " €" : " €€€"}`;
        const categoryElt = document.createElement("p");
            categoryElt.textContent = `Catégorie : ${piece.categorie ?? "Aucune catégorie"}`;

        const imgElt = document.createElement("img");
                imgElt.classList.add("image");
                imgElt.src = `${piece.image}`
                imgElt.alt = 'Image'

        const descriptionElt = document.createElement("p");
            descriptionElt.textContent = `Description : ${piece.description ?? "Aucune description"}`;

        const avisElt = document.createElement("a");
            avisElt.href = `avis.html?id=${piece.id}`;
            avisElt.textContent = "Avisclient"

                containerItem.appendChild(nameElt)
                containerItem.appendChild(priceElt)
                containerItem.appendChild(categoryElt)
                containerItem.appendChild(imgElt)
                containerItem.appendChild(descriptionElt)
                containerItem.appendChild(avisElt)

                fiches.appendChild(containerItem)
    });

}

listItems(pieces)


// 
const notAffordable = document.getElementById("notAffordable");

notAffordable.addEventListener("click", function() {
    pieces = pieces.filter((piece) => {
        return piece.prix > 35

    })

    // On vide la fiches
    fiches.innerHTML = "";

    listItems(pieces)
})


const descending = document.getElementById("descending");

descending.addEventListener("click", function() {
    pieces = pieces.sort((a, b) => {
        if (a.prix > b.prix) {
            return 1
        } else if(a.prix < b.prix) {
            return -1
        } else {
            return 0
        }

    })

    // On vide la fiches
    fiches.innerHTML = "";

    listItems(pieces)
})


const increasing = document.getElementById("increasing");

increasing.addEventListener("click", function() {
    pieces = pieces.sort((a, b) => {
        if (a.prix > b.prix) {
            return -1
        } else if(a.prix < b.prix) {
            return 1
        } else {
            return 0
        }

    })

    // On vide la fiches
    fiches.innerHTML = "";

    listItems(pieces)
})

const  names = pieces.map(item => item.nom);

console.log("names", names)


// Element avec description
const withDescription = document.getElementById("withDescription");
withDescription.addEventListener("click", function() {
    pieces = pieces.filter((piece) => {
        return piece.description != null

    })

    // On vide la fiches
    fiches.innerHTML = "";

    listItems(pieces)
})


var test = await fetch('http://localhost:8081/pieces');
var test2 = await test.json();

console.log("test", test2)






