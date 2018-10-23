import React, { Component } from 'react';
import { connect } from 'react-redux';
import MMText from 'react-mm-text'
import './OutputLayout.css';

class OutputLayout extends Component {


  render() {
    const { text } = this.props.mainTextValue;
    const { convertLibrary, detectLibrary, showFont } = this.props;

    return (
      <div className="Output-layout">
        {text ? (
          <p className={'Output-value'}>
            {
              <MMText
                text={text}
                showFont={showFont.font}
                conveter={convertLibrary.library}
                detector={detectLibrary.library} />
            }
          </p>): null}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    mainTextValue: state.mainTextValue,
    convertLibrary: state.convertLibrary,
    detectLibrary: state.detectLibrary,
    showFont: state.showFont
  }
}

export default connect(mapStateToProps)(OutputLayout);
