import React from 'react';
import T from 'prop-types';
import BreakpointContainer from './BreakpointContainer';
import { ID_BROWSER } from './Context.js';

import '../css/debug.css';

// ------------------------
// Variables
// ------------------------

const DEBUG_BROWSER = process.env.NODE_ENV === 'development';

// NOTE: If you're going to change any CLASSES or SELECTORS, you'll
// need to also change the  corresponding variables in the SCSS file
const CLASSES = {
	CORE: 'bpc',
	BP_PREFIX: '-',
	DEBUG_MODIFIER: '-debug',
};

const SELECTORS = {
	BP_BROWSER: `${CLASSES.CORE}__browser`,
	BP_CONTENT: `${CLASSES.CORE}__content`,
	DEBUG_INDICATOR: `${CLASSES.CORE}__debugIndicator`,
	DEBUG_IDENTIFIER: `${CLASSES.CORE}__debugIdentifier`,
};

// ------------------------
// Export
// ------------------------

// Emulates media query functionality, and enables 'standalone' <Breakpoint/>
// Also provides backward-compatibility with DDBreakpoints original 'bp()' mixin
const BrowserContainer = ({ children, ...bpcProps }) => (
	<BreakpointContainer
		identifier={ID_BROWSER}
		className={SELECTORS.BP_BROWSER}
		debug={DEBUG_BROWSER}
		{...bpcProps}
	>
		{children}
	</BreakpointContainer>
);

BrowserContainer.propTypes = {
	children: T.node.isRequired,
};

export default BrowserContainer;
