import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onClickButton1 = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onClickButton2 = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    const className1 = firstName ? 'containerBox1' : null
    const text1 = firstName ? 'Joe' : null
    const className2 = lastName ? 'containerBox2' : null
    const text2 = lastName ? 'Jonas' : null
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="button-box">
            <button type="button" onClick={this.onClickButton1}>
              Show/Hide Firstname
            </button>
            <div className={className1}>
              <p className="para">{text1}</p>
            </div>
          </div>
          <div className="button-box">
            <button type="button" onClick={this.onClickButton2}>
              Show/Hide Lastname
            </button>
            <div className={className2}>
              <p className="para">{text2}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
