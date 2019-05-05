/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import MMText from './MMText';

const unicodeText = [
	'သီဟိုဠ်မှ ဉာဏ်ကြီးရှင်သည် အာယုဝဍ်ဎနဆေးညွှန်းစာကို ဇလွန်ဈေးဘေးဗာဒံပင်ထက် အဓိဋ္ဌာန်လျက် ဂဃနဏဖတ်ခဲ့သည်။'
];

const zawgyiText = [
	'သီဟိုဠ္မွ ဉာဏ္ႀကီးရွင္သည္ အာယုဝၯနေဆးၫႊန္းစာကို ဇလြန္ေဈးေဘး ဗာဒံပင္ထက္ အဓိ႒ာန္လ်က္ ဂဃနဏဖတ္ခဲ့သည္။'
];

// @TODO
// Add more method

describe('MMText component test with Enzyme "Unicode Section"', () => {
	it('should render correctly with only given unicode string', () => {
		const wrapper = shallow(<MMText text={unicodeText[0]} />);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('MMText component test with Enzyme "Zawgyi Section"', () => {
	it('should render correctly with given unicode string', () => {
		const wrapper = shallow(<MMText text={zawgyiText[0]} />);
		expect(wrapper).toMatchSnapshot();
	});
});
