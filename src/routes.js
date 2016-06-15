import { Router, Route, browserHistory } from 'react-router';
import Home from './components/Home';
import App from './components/App';

export default function createRoutes() {
	return (
		<Router history={ browserHistory }>
			<Route path="/meet2/" component={ Home }/>
			<Route path="/meet2/vr" component={ App }/>
		</Router>
	)
}
