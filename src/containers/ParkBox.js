import React, {Component} from 'react'
import Request from '../helpers/request'
import PaddockList from '../components/PaddockList'

class ParkBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      paddocks: [
        {name: "Swamp",
        dinosaurs: [
          {species: "T Rex", foodType: "meat"},
          {species: "T Rex", foodType: "meat"}
        ]},
        {name: "Mire",
        dinosaurs: [
          {species: "Bronto", foodType: "plants"},
          {species: "Diplo", foodType: "plants"}
        ]}
      ]
    }
  }

  // componentDidMount(){
  //   const request = new Request();
  //   request.get('http://localhost:8080/paddocks')
  //   .then(console.log(data))
  //   .then((data) => {
  //     this.setState({paddocks: data._embedded.paddocks})
  //   })
  // }

  render(){
    return(
      <div>
      <PaddockList paddocks={this.state.paddocks}
      />
      </div>
    )
  }
}

export default ParkBox
