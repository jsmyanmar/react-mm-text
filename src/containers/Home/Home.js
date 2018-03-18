import React, { Component } from 'react';
import SelectorLayout from './../SelectorLayout/SelectorLayout';
import OutputLayout from './../OutputLayout/OutputLayout';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className={"Home-layout"}>
          <SelectorLayout />
        </div>
        <div className={'Home-layout'}>
          <OutputLayout />
        </div>
      </div>
    );
  }
}

export default Home;
