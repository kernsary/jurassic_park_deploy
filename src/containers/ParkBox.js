import React, {Component} from 'react'
import PaddockList from '../components/PaddockList';
import Request from '../helpers/request.js'
import PaddockCreateForm from "../components/PaddockCreateForm.js"
import DinosaurCreateForm from "../components/DinosaurCreateForm.js"

class ParkBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      paddocks: []
    }
    this.getPaddocks = this.getPaddocks.bind(this);
    this.handlePaddockPost = this.handlePaddockPost.bind(this);
    this.createDinosaur = this.createDinosaur.bind(this);
    this.deleteDinosaur = this.deleteDinosaur.bind(this);
  }

  getPaddocks(){
    const request = new Request()
    request.get('/paddocks')
    .then((data) => {
      this.setState({paddocks: data._embedded.paddocks})
    })
  }

  componentDidMount(){
    this.getPaddocks()
  }

  handlePaddockPost(newPaddock){
    const request = new Request()
    request.post('/paddocks', newPaddock).then(()=>this.getPaddocks())

  }

  createDinosaur(newDinosaur){
    const request = new Request()
    request.post('/dinosaurs', newDinosaur).then(()=>this.getPaddocks())
  }

  deleteDinosaur(id){
    const request = new Request()
    request.delete('/dinosaurs/' + id).then(() => this.getPaddocks())
  }

  render(){
    return(
      <div>

      <PaddockCreateForm paddocks={this.state.paddocks}
      onFormSubmit={this.handlePaddockPost}/>
      <DinosaurCreateForm paddocks={this.state.paddocks}
      createDinosaur={this.createDinosaur}/>
      <PaddockList paddocks={this.state.paddocks} onDelete={this.deleteDinosaur}/>
      </div>
    )
  }
}

export default ParkBox
