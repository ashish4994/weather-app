import './App.css';
import Header from './components/header.component'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home.component';
import ToDo from './components/ToDo/ToDo.component';
import WeatherHome from './components/Weather/WeatherHome';

function App() {

  return (
<Router>
  <Header />
  <Routes>
        <Route exact path="/home" element ={<Home />} />
        <Route exact path="/to-do" element ={<ToDo />} />
        <Route exact path='/weather' element={<WeatherHome />} />
          </Routes>
  </Router>
  )
}

export default App;
