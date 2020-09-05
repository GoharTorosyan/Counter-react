import React from 'react';
import Button from "./Component/Button/buttons"

 class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      addBy: 1,
      min: 5,
      max: 50,
    }
  }



  handleIncrease = () => {
    if (this.state.count+this.state.addBy <= this.state.max && this.state.count+this.state.addBy >= this.state.min) {
      this.setState((prevState) => ({
        count: prevState.count + prevState.addBy
      }))
    }
  }

  handleDecrease = () => {
    if (this.state.count- this.state.addBy >= this.state.min ) {
      this.setState((prevState) => ( {
        count: prevState.count-prevState.addBy
      }))
    }
  }

  handleReset = () => {
    this.setState((prevState) => ({
      count: 0
    }))
  }


  handlebyMax =(e) => {
    const normalizedValue = Number(e.target.value);

    if (Number.isNaN(normalizedValue)) {
      throw new Error('Input should be a number!')
    }

    this.setState((prevState) => ({
      max: normalizedValue
    }))

  }

  handlebyMin =(e) => {
    const normalizedValue = Number(e.target.value);

    if (Number.isNaN(normalizedValue)) {
      throw new Error('Input should be a number!')
    }

    this.setState((prevState) => ({
      min: normalizedValue
    }))

  }

  handleAddBy = (e) => {
    const normalizedValue = Number(e.target.value);

    if (Number.isNaN(normalizedValue)) {
      throw new Error('Input should be a number!')
    }

    this.setState({
      addBy: normalizedValue
    })
  }

     render() {
      const {count}= this.state
         return (
             <div>
                 <Button name={count} onhandleIncrease ={this.handleIncrease} onhandleDecrease={this.handleDecrease} onhandleReset={this.handleReset}/>

                 <br />
                 <input onChange={this.handleAddBy} placeholder="Add by..." />
                 <input onChange={this.handlebyMin} value={this.state.min}  />
                 <input onChange={this.handlebyMax} value={this.state.max}  />
                 <p> <b> Result : {this.state.count} </b> </p>
             </div>
         )
     }
 }

 export default function App () {
  return <div>
    <h2>Counter App</h2>
    <Counter />
  </div>
}


