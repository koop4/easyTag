import React from 'react'
import './btn.css';

class ButtonExampleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('dingdingding', this.state.clicked)
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));
  }

  render() {
    let active = this.state.clicked ? 'ui label striked whitey' : 'ui label olive whitey';
    return (
      <a className={active} onClick={this.handleClick}>
        <i className="mail icon whitey"></i>
          email@something.com
      </a>
    );
  }
}

export default ButtonExampleButton
