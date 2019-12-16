import React, {Component} from 'react';


class PaddockCreateForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ""
  }

    this.handleName = this.handleName.bind(this);

  }

  handleName(event){
    this.setState({name: event.target.value})
  }

handleSubmit(event) {
    event.preventDefault();
    const newPaddock = {
      name: this.state.name
    }
    this.props.onFormSubmit(newPaddock);
  }

  render() {



    const paddocks = this.props.paddocks.map((paddock, index) => {
      return(
        <li key={index} className="paddock-item">
        <h3>{paddock.name}</h3>
        </li>
      )

    }
  )

    return (
        <div>
          <form>
          <input type="text" placeholder="Name" name="name"
          onChange={this.handleName} value={this.state.name} />

        <button type="submit">Save</button>
        </form>
        </div>
      )
  }
}

export default PaddockCreateForm;
