const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

console.log(urlParams);

const pieceId = urlParams.get('id')


// Récupération d'avis par piece
var reponse = await fetch(`http://localhost:8081/pieces/${pieceId}/avis`);
var avis = await reponse.json();

const avisElt= document.getElementById("avis")


function showAvis(data) {

    data.forEach(item => {

        const cardElt = document.createElement('div')
            cardElt.classList.add("card")
            cardElt.style.margin = "10px"
        const cardHeaderElt = document.createElement('div')
            cardHeaderElt.classList.add("card-header")
            cardHeaderElt.textContent = `Auteur : ${item.utilisateur}`
        const cardBodyElt = document.createElement('div')
            cardBodyElt.classList.add("card-body")

        const cardTextElt = document.createElement('p')
            cardTextElt.classList.add("card-text")
            cardTextElt.textContent = `${item.commentaire}`

        const cardLinkElt = document.createElement('a')
            cardLinkElt.classList.add("btn")
            cardLinkElt.classList.add("btn-primary")
            
            cardLinkElt.href = "#"
            cardLinkElt.textContent = "Détail"

            cardBodyElt.appendChild(cardTextElt)
            cardBodyElt.appendChild(cardLinkElt)


            cardElt.appendChild(cardHeaderElt)
            cardElt.appendChild(cardBodyElt)
            avisElt.appendChild(cardElt)
        
    });

    
    

}

showAvis(avis)



