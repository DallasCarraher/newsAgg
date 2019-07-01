import React, {Component} from 'react';

/**
|------------------------------------------------------------------------
| Clock Component - Simple Clock component with Hour:Minute:Seconds AM/PM 
|------------------------------------------------------------------------
*/

class Clock extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     date: new Date(),
    //   }
    // }
  
    // componentDidMount() {
    //   this.timerID = setInterval(
    //     () => this.tick(), 1000
    //   )
    // }
  
    // componentWillUnmount() {
    //   clearInterval(this.timerID)
    // }
  
    // tick() {
    //   this.setState({
    //     date: new Date()
    //   })
    // }
  
    render() {
      return (
        <div>
          <h2 style={{textAlign: 'center'}}>{this.props.date.toLocaleTimeString()}</h2>
        </div>
      )
    }
  }


export default Clock