import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InputLayout.css';

import { mainTextValueChange } from './../../actions/mainTextValueActions';

class InputLayout extends Component {

  handleChange = (text) => {
    this.props.dispatch(mainTextValueChange(text.target.value));

  }

  render() {
    const { text } = this.props.mainTextValue;

    return (
      <textarea
        id="Input-content"
        onChange={this.handleChange}
        defaultValue={text}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mainTextValue: state.mainTextValue
  }
}

export default connect(mapStateToProps)(InputLayout);
