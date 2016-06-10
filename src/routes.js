import { Router, Route, browserHistory } from 'react-router';
import Home from './components/Home';
import App from './components/App';

export default function createRoutes() {
	return (
		<Router history={ browserHistory }>
			<Route path="/" component={ Home }/>
			<Route path="/vr" component={ App }/>
		</Router>
	)
}
