import React from 'react'

const DeleteButton = (props) => {

  const handleDelete = () => {
    props.onDelete(props.id)
  }

  return(
    <button onClick={handleDelete}>Remove dinosaur</button>
  )
}

export default DeleteButton
