import Header from './components/Header'
import Home from './pages/Home'
import './App.css'

function App() {

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

 
