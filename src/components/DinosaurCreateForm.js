import React, {Component} from 'react'

class DinosaurCreateForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      species: "",
      foodType: "",
      paddock: null
    }

    this.handleSpecies = this.handleSpecies.bind(this)
    this.handleFoodType = this.handleFoodType.bind(this)
    this.handlePaddock= this.handlePaddock.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleSpecies(event){
    this.setState(
      {species: event.target.value}
    )
  }

  handleFoodType(event){
    this.setState(
      {foodType: event.target.value}
    )
  }

  handlePaddock(event){
    this.setState(
      {paddock: "http://localhost:8080/paddocks/" + event.target.value}
    )
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.createDinosaur(this.state)
  }

  render(){

    const paddockNodes = this.props.paddocks.map((paddock, index) => {
      return(
        <option key={index} value={paddock.id}>{paddock.name}</option>
      )
    }
  )

  return(
    <form onSubmit={this.handleSubmit}>
    <input type="text" onChange={this.handleSpecies}/>
    <select onChange={this.handleFoodType}>
    <option disabled selected>Choose food type</option>
    <option value="meat">Meat</option>
    <option value="plants">Plants</option>
    </select>
    <select onChange={this.handlePaddock}>
    <option disabled selected>Choose paddock</option>
      {paddockNodes}
    </select>
    <button type="submit">Save</button>
    </form>
  )
}

}

export default DinosaurCreateForm
