import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Productdescscreen from './screens/Productdescscreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path='/' component={Homescreen} exact />
        <Route path='/product/:id' component={Productdescscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
