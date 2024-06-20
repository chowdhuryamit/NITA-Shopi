import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import OldProduct from './pages/OldProduct';
import NewProduct from './pages/NewProduct';
import AutoService from './pages/AutoService';
import RestaurantService from './pages/RestaurantService';
import About from './pages/About';
import Help from './pages/Help';
import Signin from './pages/Signin';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/OldProduct" element={<OldProduct />} />
          <Route path="/NewProduct" element={<NewProduct />} />
          <Route path="/AutoService" element={<AutoService />} />
          <Route path="/RestaurantService" element={<RestaurantService />} />
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Signin" element={<Signin/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
       <br />
       <br />
       <Footer /> 
    </Router>
  );
};

export default App;

