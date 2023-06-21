const url = "https://rickandmortyapi.com/api/character";

async function getData(pUrl) {
  try {
    let response = await fetch(pUrl, {
      method: "Get",
    });
    let data = await response.json();
    return data;
  } catch (pErr) {
    return pErr;
  }
}
