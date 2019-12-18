import React, {Component} from 'react';


class PaddockCreateForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ""
    }

    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onFormSubmit(this.state);
    this.setState({name: ""})

  }

  render() {

  return (
    <div>
    <h2>Create a new paddock</h2>
    <form onSubmit={this.handleSubmit}>
    <h4><label id="name">Enter the paddock's name: </label></h4>
    <input id="name" type="text" placeholder="Name" name="name"
    onChange={this.handleName} value={this.state.name} />

    <button type="submit" >Save</button>
    </form>
    </div>
  )
}
}

export default PaddockCreateForm;
