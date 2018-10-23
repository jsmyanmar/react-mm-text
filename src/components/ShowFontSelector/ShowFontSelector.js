import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import { showFontSelect } from './../../actions/LibrariesActions';
import 'react-select/dist/react-select.css';

class ShowFontSelector extends Component {

  handleChange = (selectedOption) => {
    this.props.dispatch(showFontSelect(selectedOption.value));
  }

  render() {
    const { font } = this.props.showFont;
    const options = [
      { value: 'unicode', label: 'Unicode' },
      { value: 'zawgyi', label: 'Zawgyi' },
    ];

    return (
      <div>
        <h4> Font </h4>
        <Select
          name="form-field-name"
          value={font}
          onChange={this.handleChange}
          clearable={false}
          options={options}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showFont: state.showFont
  }
}

export default connect(mapStateToProps)(ShowFontSelector);
