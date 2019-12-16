import React from 'react'

const DinosaurList = (props) => {

  const dinosaurNodes =
  props.dinosaurs.map((dinosaur, index) => {
    return(
      <li key={index} className="dinosaur-item">
      <h4>{dinosaur.species}</h4>
      </li>
    )
  })

  return(
    <ul className="dinosaur-list">
    {dinosaurNodes}
    </ul>
  )
}

export default DinosaurList
