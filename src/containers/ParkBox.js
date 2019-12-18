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
      showBoolean: false,
      chosenDinosaur: null
    }
    this.getPaddocks = this.getPaddocks.bind(this);
    this.handlePaddockPost = this.handlePaddockPost.bind(this);
    this.createDinosaur = this.createDinosaur.bind(this);
    this.deleteDinosaur = this.deleteDinosaur.bind(this);
    this.patchDinosaur = this.patchDinosaur.bind(this);
    this.toggleShowBoolean = this.toggleShowBoolean.bind(this);
    this.showMoveForm = this.showMoveForm.bind(this);
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

  toggleShowBoolean(){
    this.state.showBoolean ? this.setState({showBoolean: false}) : this.setState({showBoolean: true})
  }

  showMoveForm(id){
    this.setState({chosenDinosaur: id})
    this.toggleShowBoolean()
  }

  patchDinosaur(paddock){
    const request = new Request()
    request.patch("/dinosaurs/" + this.state.chosenDinosaur, paddock).then(()=>this.getPaddocks())
    this.toggleShowBoolean()
  }

  render(){

    return(
      <div>

      <PaddockCreateForm paddocks={this.state.paddocks}
      onFormSubmit={this.handlePaddockPost}/>
      <DinosaurCreateForm paddocks={this.state.paddocks}
      createDinosaur={this.createDinosaur}/>
      <MoveForm show={this.state.showBoolean} patchDinosaur={this.patchDinosaur} paddocks={this.state.paddocks}/>
      <PaddockList paddocks={this.state.paddocks}
      onDelete={this.deleteDinosaur}
      onMove={this.showMoveForm}
      />
      </div>
    )
  }
}

export default ParkBox
