import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";
import AuthProvider from "./providers/AuthProvider";
import "./App.scss";

function App() {
  return (
  <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Router>
      </AuthProvider>
  );
}

function RouteWithSubRoutes(route) {
  // console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}

export default App;

/* SISTEMA DE RUTAS
<Router>
    <div className= 'app'>
      <h1>Sistema básico de rutas</h1>

      
      <Link to='/home'>Home</Link> <br></br>
      <Link to='/contact'>Contact</Link> <br></br>
      <Link to='/users'>Users</Link> <br></br>

      <Switch> 
       <Route exact path =  '/' component = {Landing}/> 
       <Route exact path =  '/home' component = {Home}/> 
       <Route exact path =  '/contact' component = {Contact}/> 
       <Route exact path =  '/users' component = {Users}/> 
       <Route  component = {Error404}/> 
      </Switch>
    </div>
    </Router>


     const test = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    
  );
}

function Landing() {
  return <h2> Estamos en el componente LANDING</h2>
}

function Home() {
  return <h2> Estamos en el componente HOME</h2>
}

function Contact() {
  return <h2> Estamos en el componente CONTACT</h2>
}

function Users() {
  return <h2> Estamos en el componente USERS</h2>
}

function Error404() {
  return <h2> ERROR 404 -xx Aquí va un perrito o algún meme xx- </h2>
}

*/
