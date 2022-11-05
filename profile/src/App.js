import './App.css';
import Page from './screens/Page';
import Contact from './screens/Contact';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return ( 
    <div className="App ">
      <Router>
        <Routes>
          <Route path='/' element={<Page />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
