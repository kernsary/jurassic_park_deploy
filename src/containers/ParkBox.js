import React, {Component} from 'react'
import PaddockList from '../components/PaddockList';
import Request from '../helpers/request.js'
import PaddockCreateForm from "../components/PaddockCreateForm.js"
import DinosaurCreateForm from "../components/DinosaurCreateForm.js"
import MoveForm from "../components/MoveForm.js"

class ParkBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      paddocks: [],
      showMoveForm: false
    }
    this.getPaddocks = this.getPaddocks.bind(this);
    this.handlePaddockPost = this.handlePaddockPost.bind(this);
    this.createDinosaur = this.createDinosaur.bind(this);
    this.deleteDinosaur = this.deleteDinosaur.bind(this);
    this.moveDinosaur = this.moveDinosaur.bind(this);
    this.toggleShowForm = this.toggleShowForm.bind(this);
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

  moveDinosaur(id, paddock){

  }

  toggleShowForm(){
    this.state.showMoveForm ? this.setState({showMoveForm: false}) : this.setState({showMoveForm: true})
  }

  render(){
    return(
      <div>

      <PaddockCreateForm paddocks={this.state.paddocks}
      onFormSubmit={this.handlePaddockPost}/>
      <DinosaurCreateForm paddocks={this.state.paddocks}
      createDinosaur={this.createDinosaur}/>
      <MoveForm show={this.state.showMoveForm}/>
      <PaddockList paddocks={this.state.paddocks}
      onDelete={this.deleteDinosaur}
      onMove={this.toggleShowForm}
      />
      </div>
    )
  }
}

export default ParkBox
