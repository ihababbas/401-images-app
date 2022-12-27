import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CardData from './components/CardData.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import Header from './header';
import Footer from './footer'
import Row from 'react-bootstrap/Row';

function App() {
  let [total, settotal] = useState(0);

    const incrementtotal = () => {
      settotal(total+1)
    }
  return (
    <>
     <Header />
     <h2>Total Num of Likes : {total}</h2>
      <Row>
      <Router>
          <Routes>
            <Route 
              
              exact path="/"
              
              element={ 
               
                data.map((element) => (
                <CardData
                id = {element._id}
                title = {element.title}
                img = {element.image_url}
                incrementtotal = {incrementtotal}  
                   
                 />
            ))}
                
               
            >
            </Route>
          </Routes>
        </Router>
        </Row>
        <Footer/>
    </>
  );
}

export default App;