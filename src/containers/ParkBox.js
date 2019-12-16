import React, {Component} from 'react'
import Request from '../helpers/request.js'

class ParkBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      paddocks: []
    }
  }

  componentDidMount(){
    const request = new Request()
    request.get('/paddocks')
    .then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
  }

  render(){
    return(
      <p>This is the ParkBox</p>
    )
  }
}

export default ParkBox
