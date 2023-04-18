
async function getData() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
      const data = await response.json();
      return { data };
    } catch (error) {
      console.log(error);
    }
  }
  
  async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return { data };
  }
  
  export default { getData, getPokemon };
  