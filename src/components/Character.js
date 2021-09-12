
import React from "react";
import { Container } from 'reactstrap';

const Character = props => {
  console.log(props)
  const { character } = props

return (
    <Container>
	<div className="char-list">
        <li key={character.id} character={character}>
          {character.name}
        </li>
</div>
</Container>
  )
}


export default Character;
