
import './ballers/App.css';
import FooterOne from './ballers/FooterOne';
import FooterTwo from './ballers/FooterTwo';
import HomePage from './ballers/HomePage';
import NavigationBar from './ballers/NavigationBar';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (

   
        <div className="App">
          <NavigationBar/>
          <HomePage/>
          
          <FooterTwo/>
          <FooterOne/>
        </div>
    
  );
}

export default App;
