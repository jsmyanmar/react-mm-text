import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import { detectLibrarySelect } from './../../actions/LibrariesActions';
import 'react-select/dist/react-select.css';

class DetectSelector extends Component {

  handleChange = (selectedOption) => {
    this.props.dispatch(detectLibrarySelect(selectedOption.value));
  }

  render() {
    const { library } = this.props.detectLibrary;
    const options = [
      { value: 'myanmar-tools', label: 'Myanmar Tools' },
      { value: 'knayi', label: 'Knayi' },
    ];

    return (
      <div>
        <h4> Detector library </h4>
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
    detectLibrary: state.detectLibrary
  }
}

export default connect(mapStateToProps)(DetectSelector);
