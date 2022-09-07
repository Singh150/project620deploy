import './App.css';
import Home from './components/Home';
import About from './components/About';
import Login  from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Logout from './components/Logout';
import {Route,Switch} from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
//import Images from './components/Images';
import Protectedroute from './ProtectedRoute';
import { useEffect, useState } from 'react';


function App() {

  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
  try {
    const res = await fetch('/auth' , {
      method : "GET",
      headers : {
        Accept : "application/json",
        "Content-Type" : "application/json"
      },
      Credentials : "include"
    });

    if(res.status === 200){
      setauth(true)
      setauth1(false)
    }
    if(res.status === 401){
      setauth(false)
      setauth1(true)
    }

  } catch (error){
    console.log(error)
  }
}

useEffect(() => {
  isLoggedIn();
}, []);
  return (
  <>
 
  <Navbar auth={auth1}/> 
<Switch>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/service" component={Services}/>
         <Protectedroute exact path="/logout" component={Logout} auth={auth}/>
        <Protectedroute exact path="/login" component={Login} auth={auth1} />
        <Protectedroute exact path="/register"  component={Register} auth={auth1} />

        </Switch>
<Footer/>
  

  </>
    );
   
}

export default App;
