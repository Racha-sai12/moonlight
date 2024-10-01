import HomePage from './components/HomePage';
import Author from './components/Author';

import logo from './logo.svg';
import './styles/tailwind.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Poem from './components/Poem';

function App() {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/author/:name" element={<Author />} />
        <Route path="/poem/:title" element={<Poem />} />

      </Routes>
  </Router>
  );
}

export default App;
