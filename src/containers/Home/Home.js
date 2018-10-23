import React, { Component } from 'react';
import Header from './../../components/Header/Header';
import SelectorLayout from './../SelectorLayout/SelectorLayout';
import InputLayout from './../InputLayout/InputLayout';
import OutputLayout from './../OutputLayout/OutputLayout';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Home-layout-body">
          <div className={"Home-layout Home-layout-input"}>
            <SelectorLayout />
            <InputLayout />
          </div>
          <div className={'Home-layout Home-layout-output'}>
            <OutputLayout />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
