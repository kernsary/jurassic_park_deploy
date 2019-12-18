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
      chosenDinosaur: null,
      livingDinosaurs: 0
    }
    this.getPaddocks = this.getPaddocks.bind(this);
    this.getDinosarus = this.getDinosaurs.bind(this);
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
    .then((data) => {this.setState({paddocks: data._embedded.paddocks})
    })
    .then(() => {this.getDinosaurs()})
  }

  getDinosaurs(){
    const request = new Request()
    request.get('/dinosaurs')
    .then((data) => {this.setState({livingDinosaurs: data._embedded.dinosaurs.length})})
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

    if(this.state.livingDinosaurs > 18){
      return(<h1>You win!</h1>)
    }

    return(
      <div className="body-wrapper">
      <div className="bar-wrapper">
      <div className="bar-item">
      <h1>DinoWorld</h1>
      <h3>Can you keep enough dinosaurs alive to win?</h3>
      <h3>They are hungry!</h3>
      <h3>Dinosaurs in park: {this.state.livingDinosaurs}</h3>
      </div>
      <PaddockCreateForm className="bar-item" paddocks={this.state.paddocks}
      onFormSubmit={this.handlePaddockPost}/>
      <DinosaurCreateForm className="bar-item"paddocks={this.state.paddocks}
      createDinosaur={this.createDinosaur}/>
      <MoveForm className="bar-item"show={this.state.showBoolean} patchDinosaur={this.patchDinosaur} paddocks={this.state.paddocks}/>
      </div>
      <div className="paddock-wrapper">
      <PaddockList paddocks={this.state.paddocks}
      onDelete={this.deleteDinosaur}
      onMove={this.showMoveForm}
      />
      </div>
      </div>
    )
  }
}

export default ParkBox
