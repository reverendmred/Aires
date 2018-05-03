import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import './styles/searchBar.css';
import './styles/productList.css';
import './styles/spinner.css';
class App extends React.Component {

    render() {
        return (
            <div className="app">
                  <main>
                    <Switch>
                        <Route exact path='/'       component= {LoginPage} />
                    </Switch>
                </main>
            </div>

        );
    }
}

ReactDOM.render((<BrowserRouter>
                    <App />
                </BrowserRouter>), document.getElementById('app'));