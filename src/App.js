import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import RouteSetup from './components/routes';

class App extends React.Component {
	render(){
		return (
			<BrowserRouter>
				<div className="App">
					<header className="App-header">
						<RouteSetup/>
					</header>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
