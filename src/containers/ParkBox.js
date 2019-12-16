import React, {Component} from 'react'
import PaddockList from '../components/PaddockList';
import Request from '../helpers/request.js'
import PaddockCreateForm from "../components/PaddockCreateForm.js"

class ParkBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      paddocks: []
    }
    this.getPaddocks = this.getPaddocks.bind(this);
    this.handlePaddockPost = this.handlePaddockPost.bind(this);
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

  render(){
    return(
      <div>
      <PaddockList paddocks={this.state.paddocks}/>
      <PaddockCreateForm paddocks={this.state.paddocks}
      onFormSubmit={this.handlePaddockPost}/>
      </div>
    )
  }
}

export default ParkBox
