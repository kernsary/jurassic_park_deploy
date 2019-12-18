import React, {Component} from 'react'

class DinosaurCreateForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      species: "",
      foodType: "",
      paddock: null,
      selectedPaddockId: null
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
      {paddock: "http://localhost:8080/paddocks/" + event.target.value,
    selectedPaddockId: event.target.value}
    )
  }

  handleSubmit(event){
    event.preventDefault()
    const selectedPaddock = this.props.paddocks.filter(paddock => {
      return paddock.id == this.state.selectedPaddockId
    })[0]
    if(selectedPaddock.dinosaurs.length < 4)
    {this.props.createDinosaur({
      species: this.state.species,
      foodType: this.state.foodType,
      paddock: this.state.paddock
    })}
  }

  render(){

    const paddockNodes = this.props.paddocks
    .map((paddock, index) => {
      return(
        <option key={index} value={paddock.id}>{paddock.name}</option>
      )
    }
  )

  return(
    <div>
    <h2>Add a new dinosaur</h2>
    <h4>Max 4 to a paddock</h4>
    <form onSubmit={this.handleSubmit}>
    <h4><label id="species" value="species">Enter species: </label></h4>
    <input id="species" type="text" onChange={this.handleSpecies}/>
    <select onChange={this.handleFoodType}>
    <option disabled selected>Choose food type</option>
    <option value="meat">Meat</option>
    <option value="plants">Plants</option>
    </select>
    <br/>
    <select onChange={this.handlePaddock}>
    <option disabled selected>Choose paddock</option>
      {paddockNodes}
    </select>
    <button type="submit">Save</button>
    </form>
    </div>
  )
}

}

export default DinosaurCreateForm
