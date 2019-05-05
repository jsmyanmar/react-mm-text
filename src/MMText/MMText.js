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
import { zg2uni, uni2zg } from 'rabbit-node';
import knayi from 'knayi-myscript';
import google_myanmar_tools from 'myanmar-tools';

class MMText extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showText: null,
			inputFont: null
		};

		this.fontDetect = this.fontDetect.bind(this);
		this.checkConveter = this.checkConveter.bind(this);
		this.convertWithRabbit = this.convertWithRabbit.bind(this);
		this.convertWithKnayi = this.convertWithKnayi.bind(this);
	}


	async componentWillMount() {
		const {
			text,
			detector,
			conveter
		} = this.props;

		await this.fontDetect(text, detector);
		await this.checkConveter(conveter);
	}

	componentWillReceiveProps(nextProps) {
		if ((nextProps.text !== this.props.text) ||
			(nextProps.conveter !== this.props.conveter) ||
			(nextProps.detector !== this.props.detector) ||
			(nextProps.showFont !== this.props.showFont)
		) {
			this.setState({
				showText: null,
				inputFont: null
			}, async () => {
				await this.fontDetect(nextProps.text, nextProps.detector);
				await this.checkConveter(nextProps.conveter);
			});
		}
	}

	/**
	 * Font detect
	 * @param {string} text - The string to detect font.
	 * @param {string} library - The name of detect library.
	 */
	fontDetect(text, library) {
		if (library === 'knayi') {
			const inputFont = knayi.fontDetect(text);
			this.setState({ inputFont });
		}

		if (library === 'myanmar-tools') {
			const zawgyiDetector = new google_myanmar_tools.ZawgyiDetector();
			const score = zawgyiDetector.getZawgyiProbability(text);
			// eslint-disable-next-line eqeqeq
			if (score.toFixed(6) == '1') {
				this.setState({ inputFont: 'zawgyi' });
			} else {
				this.setState({ inputFont: 'unicode' });
			}
		}
	}

	/**
	 * Library chosen
	 */
	checkConveter(library) {
		if (library === 'rabbit') { this.convertWithRabbit(); }
		if (library === 'knayi') { this.convertWithKnayi(); }
	}

	/**
	 * Font convert with `rabbit-node`.
	 *
	 * rabbit-node
	 *  - @url https://github.com/Rabbit-Converter/Rabbit-Node
	 *
	 */
	convertWithRabbit() {
		const { inputFont } = this.state;
		const { text, showFont } = this.props;
		if (showFont === 'unicode' && inputFont === 'zawgyi') {
			const showText = zg2uni(text);
			this.setState({ showText });
		} else if (showFont === 'zawgyi' && inputFont === 'unicode') {
			const showText = uni2zg(text);
			this.setState({ showText });
		} else {
			this.setState({ showText: text });
		}
	}

	/**
	 * Font convert with `knayi-myscript`.
	 *
	 * knayi-myscript
	 *  - @url https://github.com/greenlikeorange/knayi-myscript
	 *
	 */
	convertWithKnayi() {
		const { text, showFont } = this.props;
		const { inputFont } = this.state;

		if (showFont === 'unicode' && inputFont === 'zawgyi') {
			const showText = knayi.fontConvert(text, 'unicode', 'zawgyi');
			this.setState({ showText });
		} else if (showFont === 'zawgyi' && inputFont === 'unicode') {
			const showText = knayi.fontConvert(text, 'zawgyi', 'unicode');
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
	conveter: 'rabbit'
};

MMText.propTypes = {
	text: PropTypes.string.isRequired,
	detector: PropTypes.string,
	showFont: PropTypes.string,
	conveter: PropTypes.string
};

export default MMText;
