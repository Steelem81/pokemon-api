import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [allPokemon, setAllPokemon] = useState("");


  useEffect(()=> {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => {return response.json()})
    .then(response => {setAllPokemon(response.results)})
    .catch((err) => console.log("An error occured", err))
  }, []);

  return (


    <div>
      
        {
          allPokemon ?
          <ul>{allPokemon.map((item, i) => <li key={i}>{item.name}</li> )}</ul> :
        ''
      }
      
    </div>
  );
}

export default App;
