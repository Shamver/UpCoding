import 'bootstrap/dist/css/bootstrap.min.css';
 
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './App.jsx';

 
class MainPage extends React.Component {
 
    render() {
        return (
			<BrowserRouter history={history}>
                <Route render={({history}) => <App history={history}/>}/>
			</BrowserRouter>
        );
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));