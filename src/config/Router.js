import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Home, Shop, Cart, Checkout } from '../container';
// import { NavBar } from '../components'
import Forms from '../container/Forms/Forms';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Forms} />
                {/* <Route exact path="/shop" component={Shop} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/checkout" component={Checkout} /> */}
            </Switch>
        </Router>
    )
}

export default AppRouter;