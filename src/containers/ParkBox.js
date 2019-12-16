import React, {Component} from 'react'
import Request from '../helpers/request'
import PaddockList from '../components/PaddockList'
import DinosaurCreateForm from '../components/DinosaurCreateForm'

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
      <div>
      <PaddockList paddocks={this.state.paddocks}
      />
      <DinosaurCreateForm />
      </div>
    )
  }
}

export default ParkBox
