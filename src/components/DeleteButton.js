import React from 'react'

const DeleteButton = (props) => {

  const handleDelete = () => {
    props.onDelete(props.id)
  }

  return(
    <button onClick={handleDelete}>Kill</button>
  )
}

export default DeleteButton
