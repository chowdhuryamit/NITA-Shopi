
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Help from './pages/Help';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;
