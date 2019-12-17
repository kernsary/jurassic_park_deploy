import React, {Component} from 'react'

class FeedButton extends Component{

  constructor(props){
    super(props)
    this.state ={
      showBoolean: true
    }

    this.toggleShowBoolean = this.toggleShowBoolean.bind(this)
    this.buttonDisappear = this.buttonDisappear.bind(this)
  }

  toggleShowBoolean(){
    this.state.showBoolean ? this.setState({showBoolean: false}) : this.setState({showBoolean: true})
  }

  buttonDisappear(){
    this.toggleShowBoolean()
    setTimeout(()=>this.toggleShowBoolean(), 30000)
  }

render(){
  if(this.state.showBoolean){
  return(
    <button onClick={this.buttonDisappear}>Feed me!</button>
  )
}
return(
  <p>Fed</p>
)
}

}

export default FeedButton
