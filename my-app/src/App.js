
import './App.css';
import Parent from './components/Parent.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header';
import Footer from './footer'

function App() {

  return (
    <>
     <Header />
      <Router>
          <Routes>
            <Route 
              exact path="/"  
              element={ 
                <Parent />
           }
            >
            </Route>
          </Routes>
        </Router>
      
        <Footer/>
    </>
  );
}

export default App;