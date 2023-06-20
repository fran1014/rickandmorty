const btnSearch = document.querySelector("btn");
const sectionCharacters = document.querySelector("#characters");
const inputSearch = document.querySelector("#search");

btnSearch.addEventListener("click", getSearch);

function getSearch(event) {
  let search = inputSearch.value;
}

/**
 * printCharacters(pList,pDom)
 */

function printCharacters(pList, pDom) {
  pDom.innerHTML = "";
  pList.forEach((character) => printOneCharacter(character, pDom));
}

/*<article class="col-12 col-md-6 col-xl-4">

<div class="card mb-3 shadow">
    <div class="row g-0">
        <figure class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
        </figure>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Nombre del personaje</h5>
                <p class="card-text">Estado: <span class="alive">Vivo</span></p>
                <p class="card-text"><small class="text-body-secondary">Algun texto</small></p>
            </div>
        </div>
    </div>
</div>
</article>
*/

function printOneCharacter(pCharacter, pDom) {
  const article = document.createElement("article");
  article.classList.add("col-12", "col-md-6", "col-xl-4");
  article.dataset.id = pCharacter.id;

  const divCard = document.createElement("div");
  divCard.className = "card mb-3 shadow";

  const divRow = document.createElement("div");
  divRow.className = "row g-0";

  divRow.innerHTML = ` <figure class="col-md-4">
  <img src="${pCharacter.image}" class="img-fluid rounded-start" alt="${
    pCharacter.name
  }">
</figure>
<div class="col-md-8">
  <div class="card-body">
      <h5 class="card-title">${pCharacter.name}</h5>
      <p class="card-text">Estado: <span class="alive">${pCharacter.status.toLowerCase()}</span></p>
      <p class="card-text"><small class="text-body-secondary">Especie:${
        pCharacter.species
      } </small></p>
  </div>
</div>`;
}
