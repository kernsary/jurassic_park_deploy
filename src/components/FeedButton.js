import React, {Component} from 'react'

class FeedButton extends Component{

  constructor(props){
    super(props)
    this.state ={
      showBoolean: true,
      killTimer: null
    }

    this.toggleShowBoolean = this.toggleShowBoolean.bind(this)
    this.buttonDisappear = this.buttonDisappear.bind(this)
    this.killDinoIfNotFed = this.killDinoIfNotFed.bind(this)
  }

  componentDidMount(){
    this.setState({killTimer: setTimeout(()=>this.killDinoIfNotFed(), 10000)})
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
      if(this.props.dinosaur.foodType === "meat" && this.props.dinosaurs.length >= 2){
        const otherDinos = this.props.dinosaurs.filter(dinosaur => dinosaur.id !== this.props.dinosaur.id)
        this.props.onDelete(otherDinos[0].id)
        this.buttonDisappear()
      }
      else {
        this.props.onDelete(this.props.dinosaur.id)
      }
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
