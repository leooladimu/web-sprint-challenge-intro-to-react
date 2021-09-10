import React from 'react';

const Character = props => {
  console.log(props)
  const { character } = props
  return (
    <div>
      <h1>{character}</h1>
    </div>
  )
}

export default Character;