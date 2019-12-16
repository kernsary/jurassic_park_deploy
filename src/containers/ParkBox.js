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

    this.getPaddocks = this.getPaddocks.bind(this)
    this.createDinosaur = this.createDinosaur.bind(this)
  }

  componentDidMount(){
    const request = new Request()
    request.get('/paddocks')
    .then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
  }

  getPaddocks(){
    const request1 = new Request()
    request1.get('/paddocks')
    .then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
  }

  createDinosaur(dinosaur){
    const request = new Request()
    request.post('/dinosaurs', dinosaur)
    this.getPaddocks()
  }

  render(){
    return(
      <div>
      <PaddockList paddocks={this.state.paddocks}
      />
      <DinosaurCreateForm paddocks={this.state.paddocks} createDinosaur={this.createDinosaur}/>
      </div>
    )
  }
}

export default ParkBox
