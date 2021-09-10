// import React from "react";

// const Character = props => {
//   console.log(props)
//   const { character } = props
//   return (
//     <div>
//       <h1>{character}</h1>
//     </div>
//   )
// }

// export default Character;

import React from "react";

const Character = props => {
  console.log(props)
  const { character } = props

return (
	<div className="char-list">
        {/* <h1 className="Header">Characters</h1> */}
        <li key={character.id} character={character}>
          {character.name}
        </li>
</div>
  )
}


export default Character;
