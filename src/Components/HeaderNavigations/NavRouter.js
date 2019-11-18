import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import Catalog from '../Pages/Catalog';
import ExpandedCatalog from '../Pages/ExpandedCatalog';

export default function NavRouter() {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog' exact component={Catalog}/>  
            <Route path='/catalog/more-info/:id' component={ExpandedCatalog}/>
        </Switch>
    )
}
