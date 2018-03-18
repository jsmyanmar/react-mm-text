import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import { convertLibrarySelect } from './../../actions/LibrariesActions';
import 'react-select/dist/react-select.css';

class SelectorLayout extends Component {

  handleChange = (selectedOption) => {
    this.props.dispatch(convertLibrarySelect(selectedOption.value));
  }

  render() {
    const { library } = this.props.convertLibrary;
    const options = [
      { value: 'rabbit', label: 'Rabbit' },
      { value: 'knayi', label: 'Knayi' },
    ];

    return (
      <div>
        <Select
          name="form-field-name"
          value={library}
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
    convertLibrary: state.convertLibrary
  }
}

export default connect(mapStateToProps)(SelectorLayout);
