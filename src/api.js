export default async function getCharacter(page, quantity) {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const response = await fetch(url);
  const data = await response.json();

  if (
    data.results &&
    data.results.length > 0 &&
    quantity <= data.results.length
  ) {
    data.results = data.results.slice(0, quantity);
  }

  return data;
}
