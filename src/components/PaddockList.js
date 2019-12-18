import React from 'react'
import DinosaurList from './DinosaurList'

const PaddockList = (props) => {

  if (props.paddocks.length === 0) {
    return(<p>Loading ...</p>)
  }

  const paddockNodes = props.paddocks.map((paddock, index) => {
    return(
      <li key={index} className="paddock-item">
      <h4>{paddock.name}</h4>
      <DinosaurList dinosaurs={paddock.dinosaurs}
      onDelete={props.onDelete}
      onMove={props.onMove}
      />
      </li>
    )
  }
)

return (
  <div className="paddock-wrapper">
  {paddockNodes}
  </div>
)
}

export default PaddockList
