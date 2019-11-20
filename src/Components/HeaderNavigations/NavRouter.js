import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import Catalog from '../Pages/Catalog';
import ExpandedCatalog from '../Pages/ExpandedCatalog';
import Info from '../Pages/Info';


export default function NavRouter() {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog' exact component={Catalog}/>  
            <Route path='/catalog/:id' exact component={Catalog}/>  
            <Route path='/more-info/:id' exact component={ExpandedCatalog}/>
            <Route exact path='/info' component={Info}/>
        </Switch>
    )
}
