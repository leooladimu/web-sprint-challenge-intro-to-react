import React, { useEffect, useState } from 'react';
import './App.css';
// import styled, { keyframes } from 'styled-components';
import axios from "axios";
import Character from "./components/Character";

const App = () => {
//   // Try to think through what state you'll need for this app before starting. Then build out
//   // the state properties here.
//   const [character, setCharacter] = useState([])
//   // Fetch characters from the API in an effect hook. Remember, anytime you have a 
//   // side effect in a component, you want to think about which state and/or props it should
//   // sync up with, if any.
//   useEffect(() => {
//     axios.get("https://swapi.dev/api/people") 
//     .then(res => {               
//       console.log(res)          
//       setCharacter(res.data)
//     })
//     .catch(er => console.log("Error!", er))
//   }, [])

//   return (
//     <div className="chr">
//       <h1 className="Header">Characters</h1>
//       {character.map(chr => (
//         <li key={chr.id} chr={chr}>
//           {chr.name}
//         </li>
//        ), [])} 
//     </div>
//   );
// }

// export default App;

const [people, setPeople] = useState([])

    useEffect(() => {
    axios.get("https://swapi.dev/api/people") 
    .then(res => {               
      console.log(res)          
      setPeople(res.data)
    })
    .catch(er => console.log("Error!", er))
  }, [])

return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {people.map(character => (
        <Character key={character.id} character={character}  propTwo={true} propThree={setPeople} />
      ), [])}
    </div>
  )
}

export default App;