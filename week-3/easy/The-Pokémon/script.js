async function getCards()
{
    
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/1')
    const response = await res.json()
    console.log(response);
}
getCards()