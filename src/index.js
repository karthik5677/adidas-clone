
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreContext from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreContext>
        <App />
    </StoreContext>
 
    
  
);

