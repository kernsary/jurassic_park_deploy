import React from 'react'
import DeleteButton from './DeleteButton'
import MoveButton from './MoveButton'
import FeedButton from './FeedButton'

const DinosaurList = (props) => {

  const dinosaurNodes =
  props.dinosaurs.map((dinosaur, index) => {
    return(
      <p key={index} className="dinosaur-item">
      <h4>{dinosaur.species}</h4>
      <FeedButton dinosaur={dinosaur} dinosaurs={props.dinosaurs} onDelete={props.onDelete}/>
      <DeleteButton id={dinosaur.id} onDelete={props.onDelete}/>
      <MoveButton id={dinosaur.id} foodType={dinosaur.foodType} onMove={props.onMove}/>
      </p>
    )
  })

  return(
    <div className="dinosaur-list">
    {dinosaurNodes}
    </div>
  )
}

export default DinosaurList
