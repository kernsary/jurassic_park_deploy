import React, {Component} from 'react'

class FeedButton extends Component{

  constructor(props){
    super(props)
    this.state ={
      showBoolean: true,
      killTimer: setTimeout(()=>this.killDinoIfNotFed(), 10000)
    }

    this.toggleShowBoolean = this.toggleShowBoolean.bind(this)
    this.buttonDisappear = this.buttonDisappear.bind(this)
    this.killDinoIfNotFed = this.killDinoIfNotFed.bind(this)
  }

  toggleShowBoolean(){
    this.state.showBoolean ? this.setState({showBoolean: false}) : this.setState({showBoolean: true})
  }

  buttonDisappear(){
    clearTimeout(this.state.killTimer)
    this.toggleShowBoolean()
    setTimeout(()=>this.toggleShowBoolean(), 10000)
    this.setState({killTimer: setTimeout(()=>this.killDinoIfNotFed(), 20000)})
  }

  killDinoIfNotFed(){
    if(this.state.showBoolean){
      this.props.onDelete(this.props.id)
    }
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
