import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ConvertSelector from './../../components/ConvertSelector/ConvertSelector';
import './SelectorLayout.css';

class SelectorLayout extends Component {
  render() {
    return (
      <div className={"Selector"}>
        <ConvertSelector />
      </div>
    );
  }
}

export default SelectorLayout;
