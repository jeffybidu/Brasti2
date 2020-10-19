import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Home from './pages/Inicio';
import Logon from './pages/Logon';
import Cadastro from './pages/Cad';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
export default function Routes(){
  return(
    <BrowserRouter>
 
    <Switch>
    <Route path="/"exact component={Home}/>
    <Route path="/login"exact component={Logon}/> 
    <Route path="/c"exact component={Cadastro}/>
    <Route path="/register" component={Register}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/incidents/new" component={NewIncident}/>
    </Switch>
    </BrowserRouter>
  );
}