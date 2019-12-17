import React, {Component} from 'react'

class MoveForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      paddock: null
    }

    this.handlePaddock = this.handlePaddock.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handlePaddock(event){
    this.setState(
      {paddock: "http://localhost:8080/paddocks/" + event.target.value}
    )
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.patchDinosaur(this.state)
  }

  render(){

    const paddockNodes = this.props.paddocks.map((paddock, index) => {
      return(
        <option key={index} value={paddock.id}>{paddock.name}</option>
      )
    }
  )

  if(this.props.show){
    return(
      <div>
      <h1>Choose which paddock to move your dinosaur to</h1>
      <form onSubmit={this.handleSubmit}>
      <select onChange={this.handlePaddock}>
      <option disabled selected>Choose paddock</option>
      {paddockNodes}
      </select>
      <button type="submit">Move</button>
      </form>
      </div>
    )
  }
  return(
    <div></div>
  )
}

}

export default MoveForm
