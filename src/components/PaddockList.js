import React from 'react'
import DinosaurList from './DinosaurList'

const PaddockList = (props) => {

  if (props.paddocks.length === 0) {
    return(<p>Loading ...</p>)
  }

  const paddockNodes = props.paddocks.map((paddock, index) => {
    return(
      <li key={index} className="paddock-item">
      <h3>{paddock.name}</h3>
      <DinosaurList dinosaurs={paddock.dinosaurs}
      />
      </li>
    )
  }
)

return (
  <ul className="paddock-list">
<<<<<<< HEAD
  {paddocks}
=======
  {paddockNodes}
>>>>>>> develop
  </ul>
)
}

export default PaddockList
