import React from 'react'

const PaddockList = (props) => {

  if (props.paddocks.length === 0) {
    return(<p>Loading ...</p>)
  }

  const paddocks = props.paddocks.map((paddock, index) => {
    return(
      <li key={index} className="paddock-item">
      <h3>{paddock.name}</h3>
      </li>
    )

  }
)

return (
  <ul className="paddock-list">
  {paddocks}
  </ul>
)
}

export default PaddockList
