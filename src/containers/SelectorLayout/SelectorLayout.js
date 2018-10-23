import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import ConvertSelector from './../../components/ConvertSelector/ConvertSelector';
import DetectSelector from './../../components/DetectSelector/DetectSelector';
import ShowFontSelector from './../../components/ShowFontSelector/ShowFontSelector';
import './SelectorLayout.css';

class SelectorLayout extends Component {
  render() {
    return (
      <div className={"Selector"}>
        <ConvertSelector />
        <DetectSelector/>
        <ShowFontSelector />
      </div>
    );
  }
}

export default SelectorLayout;
