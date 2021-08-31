import React, { Component } from 'react';  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import RoomPage from '../pages/RoomPage';
  import PlanPage from '../pages/PlanPage';
  import DishPage from '../pages/DishPage';
  import Home from '../pages/Home'

  
export class Header extends Component {  
    render() {  
        return (
            <div className='container'> 
            <Router>
                
                <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <button class="navbar-toggler text-uppercase font-weight-bold bg-secondary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="container">
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/Inicio">Inicio</Link></li>
                            <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/Habitaciones">Habitaciones</Link></li>
                            <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/Planes">Planes</Link></li>
                            <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/Platos">Platos</Link></li>
                            <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/Planes">Login</Link></li>
                        </ul>
                    </div>
                </div>
                </nav>
               
                <main>
                <Switch>
                    <Route path="/Inicio">
                        <Home />
                      </Route>
                      <Route path="/Habitaciones">
                        <RoomPage />
                      </Route>
                      <Route path="/Planes">
                        <PlanPage />
                      </Route>
                      <Route path="/Platos">
                        <DishPage />
                      </Route>
                    </Switch>
                  
                </main>
                </Router>
            </div>
            
        )
    }
}
export default Header  