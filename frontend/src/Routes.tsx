import Dashboard from 'paginas/Dashboard';
import Home from 'paginas/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Houtes = () => { /* função anonima passada para a variavel Houtes */
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />

                </Route>
                <Route path="/dashboard">
                    <Dashboard />

                </Route>

            </Switch>
        
        </BrowserRouter>
    );
}

export default Houtes;