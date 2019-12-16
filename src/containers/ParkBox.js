import React, {Component} from 'react'
import PaddockList from '../components/PaddockList';
import Request from '../helpers/request.js'
import PaddockCreateForm from "../components/PaddockCreateForm.js"

class ParkBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      paddocks: [
        // {name: "Swamp",
        // dinosaurs: [
        //   {species: "T Rex", foodType: "meat"},
        //   {species: "T Rex", foodType: "meat"}
        // ]},
        // {name: "Mire",
        // dinosaurs: [
        //   {species: "Bronto", foodType: "plants"},
        //   {species: "Diplo", foodType: "plants"}
        // ]}
      ]
    }
    // this.dummyFunction = this.dummyFunction.bind(this);
  }

  componentDidMount(){
    const request = new Request()
    request.get('/paddocks')
    .then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
  }

  dummyFunction(){}

  render(){
    return(
      <div>
      <PaddockList paddocks={this.state.paddocks}
      />
      <PaddockCreateForm paddocks={this.state.paddocks}
      onHandleSubmit={this.dummyFunction}/>
      </div>
    )
  }
}

export default ParkBox
