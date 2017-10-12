import React from 'react'
import './second_example.css';
//import { Button, Icon, Input } from 'semantic-ui-react'

class SecondExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = { inputVal: ''};
      this.addMail = this.addMail.bind(this);
    }
  
    addMail() {
        this.input.value = ''
    }
  
    render() {
      return (
        <div className="subgrid-first">
            <div className="ui input" >
                <input  type="text" 
                        className="radiusRemover-right"
                        placeholder='someone@friend.com'
                        defaultValue=""
                        ref={ c => this.input = c } />
                <button type="submit" className="ui button radiusRemover-left" onClick={this.addMail}>Add</button>
            </div>
        </div>
      );
    }
  }

export default SecondExample