import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from './components/Navbar';


function App(){

    return
    <Router>
        <Navbar/>//Navbar

        <Route path = "/">
        //Home
        </Route>

        <Route>
        //Notes
        </Route >

        <Route path= " /create">
        //Create Notes 
        </Route>
    </Router>
    
       
    
   

}
export default App;