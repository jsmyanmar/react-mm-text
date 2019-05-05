/**
 * Copyright (c) 2018-present, Javascript Myanmar Community.
 * All rights reserved.
 *
 * The code is licensed under the MIT license.
 *
 */

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

'use strict';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@babel/polyfill';

configure({ adapter: new Adapter() });

