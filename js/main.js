const btnSearch = document.querySelector("#btn");
const sectionCharacters = document.querySelector("#characters");
const inputSearch = document.querySelector("#search");
const btnPrev = document.querySelector("#prev");
const btnNext = document.querySelector("#next");
let urlNext = "";
let urlPrev = "";

btnSearch.addEventListener("click", getSearch);
btnNext.addEventListener("click", gotoPage);
btnPrev.addEventListener("click", gotoPage);

async function gotoPage(event) {
  let url = event.target.innerText === "NEXT" ? urlNext : urlPrev;
  let data = await getData(url);
  chargeButtons(data);
  printCharacters(data.results, sectionCharacters);
}

async function getSearch(event) {
  try {
    let search = inputSearch.value;
    let urlsearch = url + "/?name=" + search;
    let data = await getData(urlsearch);
    printCharacters(data.results, sectionCharacters);
    inputSearch.value = "";
  } catch (pErr) {
    console.log(pErr);
  }
}

/**
 * printCharacters(pList, pDom)
 */

function printCharacters(pList, pDom) {
  pDom.innerHTML = "";
  pList.forEach((character) => printOneCharacter(character, pDom));
}

/*
     <article class="col-12 col-md-6 col-xl-4">

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

  divRow.innerHTML = `<figure class="col-md-4">
                                <img src="${
                                  pCharacter.image
                                }" class="img-fluid rounded-start" alt="${
    pCharacter.name
  }">
                            </figure>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${
                                      pCharacter.name
                                    }</h5>
                                    <p class="card-text">Estado: <span class="${pCharacter.status.toLowerCase()}">${
    pCharacter.status
  }</span></p>
                                    <p class="card-text"><small class="text-body-secondary">Especie: ${
                                      pCharacter.species
                                    }</small></p>
                                    <a class="btn btn-sm btn-warning" href="character.html?id=${
                                      pCharacter.id
                                    }">Más info</a>
                                </div>
                            </div>`;

  divCard.appendChild(divRow);
  article.appendChild(divCard);

  pDom.appendChild(article);
}

async function init() {
  try {
    let data = await getData(url);
    chargeButtons(data);
    printCharacters(data.results, sectionCharacters);
  } catch (pErr) {
    console.log(pErr);
  }
}

function chargeButtons(pData) {
  urlNext = pData.info.next;
  urlPrev = pData.info.prev;
  if (!urlPrev) {
    btnPrev.disabled = true;
  } else if (!urlNext) {
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
}

init();
