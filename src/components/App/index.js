import React from 'react'
import 'aframe';
import { connect } from 'react-redux';

import SelectorPage from '../SelectorPage';

const App = ( props ) => {
	return (
		<div>
			<SelectorPage { ...props }/>
		</div>
	);
};

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps( state ) {
	return state;
}

function mapDispatchToProps( dispatch ) {
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( App );
