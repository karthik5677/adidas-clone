import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Home from "./Home";
import Product from './Product';
import Men from './Men';
import Women from './Women';




function App() {
  return (
    <BrowserRouter>
    <div className="black"><br></br><br></br>
    </div>
    <div className="App">
        <ul>
            <li>
                <Link className='navitem' to="/home">Home</Link>
            </li>
            <li>
                <Link className='navitem' to="/product">Product</Link>
            </li>
            <li>
                <Link className='navitem' to="/Men">Men</Link>
            </li>
            <li>
                <Link className='navitem' to="/Women">Women</Link>
            </li>
            <li>
                <h5 className='nn'>Orders</h5>
            </li>
            <li>
                <h5 className='nn'>Signup</h5>
            </li>
            <li>
                <h5 className='nn'>Login</h5>
            </li>
        </ul>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/men" element={<Men/>}/>
            <Route path="/women" element={<Women/>}/>
        </Routes>
       
    </div>
    <div className='ui'>
        hello
    </div>
    
    </BrowserRouter>
   
    
    
  );
}

export default App;
