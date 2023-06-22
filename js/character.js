const characterSection = document.querySelector("#characterView");

const valoresUrl = window.location.search;
const urlParams = new URLSearchParams(valoresUrl);

let id = urlParams.get("id");
if (!id) {
  window.location.href = "index.html";
}
const urlCharacter = url + "/" + id;

//con este id tenemos que crear una url para hacer una peticion a la api.

async function getCharacter(pUrl) {
  //consultar a la API.
  try {
    let data = await getData(pUrl);
    printCharacter(data, characterSection);
  } catch (pErr) {
    console.log(pErr);
  }
}

/* <h3 class="card-title" > Nombre del personaje</h3 >
    <hr>
        <div class="row">
            <figure class="col">
                <img src="">
            </figure>
            <ul class="col">
                <li>Estado: </li>
                <li>Genero: </li>
            </ul>
        </div> 
*/

function printCharacter(pCharacter, pDom) {
  const h3 = document.createElement("h3");
  h3.classList.add("card-title");
  h3.textContent = pCharacter.name;
  const hr = document.createElement("hr");

  const div = document.createElement("div");
  div.classList.add("row");

  div.innerHTML = ` <figure class="col">
                            <img src="${pCharacter.image}">
                        </figure>
                        <ul class="col">
                            <li>Estado: ${pCharacter.status}</li>
                            <li>Genero: ${pCharacter.gender}</li>
                        </ul>`;
  pDom.append(h3, hr, div);
}

getCharacter(urlCharacter);
