/**
 * Copyright (c) 2018-present, Javascript Myanmar Community.
 * All rights reserved.
 *
 * The code is licensed under the MIT license.
 *
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Rabbit from 'rabbit-node';
import knayi from 'knayi-myscript';
import google_myanmar_tools from 'myanmar-tools';

class MMText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: null,
      inputFont: null,
    };

    this._fontDetect =  this._fontDetect.bind(this);
    this._checkConveter = this._checkConveter.bind(this);
    this._convertWithRabbit = this._convertWithRabbit.bind(this);
    this._convertWithKnayi = this._convertWithKnayi.bind(this);
  }

  componentWillMount() {
    const {
      text,
      detector,
    } = this.props;

    this._fontDetect(text, detector);
  }

  componentDidMount() {
    const {
      conveter
    } = this.props;

    this._checkConveter(conveter);
  }


  /*
   * _fontDetect will detect font name.
   *
   * @params
   *  - text - for detect
   *  - library - for choice library
   */
  _fontDetect(text, library) {
    if (library === 'knayi') {
      const inputFont = knayi.fontDetect(text);
      this.setState({ inputFont })
    }

    if (library === 'myanmar-tools') {
      const zawgyiDetector = new google_myanmar_tools.ZawgyiDetector();
      const score = zawgyiDetector.getZawgyiProbability(text);

      if (score.toFixed(6) == '1') {
        this.setState({ inputFont: 'zawgyi' });
      } else {
        this.setState({ inputFont: 'unicode' });
      }
    }
  }

  /**
   * _fontConveter will convert with their choice library
   */
  _checkConveter(library) {
    if (library === 'rabbit') {
      this._convertWithRabbit();
    }

    if (library === 'knayi') {
      this._convertWithKnayi();
    }
  }

  /**
   * _convertWithRabbit will convert font with using `Rabbit-Node`
   *
   * rabbit-node
   *  - @url https://github.com/Rabbit-Converter/Rabbit-Node
   *
   */
  _convertWithRabbit() {
    const {
      text,
      showFont
    } = this.props;
    const {
      inputFont
    } = this.state;

    if (showFont === 'unicode' && inputFont === 'zawgyi') {
      const showText = Rabbit.zg2uni(text);
      this.setState({ showText });
    } else if (showFont === 'zawgyi' && inputFont === 'unicode') {
      const showText = Rabbit.uni2zg(text);
      this.setState({ showText });
    } else {
      this.setState({ showText: text });
    }
  }

  /**
   * _convertWithKnayi will convert font with using `knayi-myscript`
   *
   * knayi-myscript
   *  - @url https://github.com/greenlikeorange/knayi-myscript
   *
   */
  _convertWithKnayi() {
    const {
      text,
      showFont,
    } = this.props;
    const {
      inputFont,
    } = this.state;

    if (showFont === 'unicode' && inputFont === 'zawgyi') {
      const showText = knayi.fontConvert(text, 'unicode', 'zawgyi')
      this.setState({ showText });
    } else if (showFont === 'zawgyi' && inputFont === 'unicode') {
      const showText = knayi.fontConvert(text, 'zawgyi', 'unicode')
      this.setState({ showText });
    } else {
      this.setState({ showText: text });
    }
  }

  render() {
    const { showText } = this.state;

    if (showText) {
      return (showText);
    }

    return null;
  }
}

MMText.defaultProps = {
  detector: 'myanmar-tools',
  showFont: 'unicode',
  conveter: 'rabbit',
};

MMText.propTypes = {
  text: PropTypes.string.isRequired,
  detector: PropTypes.string,
  showFont: PropTypes.string,
  conveter: PropTypes.string,
};

export default MMText;
