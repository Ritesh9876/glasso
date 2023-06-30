import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
