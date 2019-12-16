import React, {Component} from 'react'

class DinosaurCreateForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      species: "",
      foodType: "",
      paddock: null
    }
  }

  render(){
    return(
      <form>
      <input type="text"/>
      <select>
      <option value="meat">Meat</option>
      <option value="plants">Plants</option>
      </select>
      <select>
      </select>
      </form>
    )
  }

}

export default DinosaurCreateForm
