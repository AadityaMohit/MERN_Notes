import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
      {/* NoteState se poore sbko wrap krne se ye phaayda huaa ki is NoteState k andr k variables ko hm poore line of components k andr me sue kr paaenge  */}
    <Router>
      <Navbar title="DeveLoper AadityaMohit" />
      <Alert message={"WELCOME TO DYNAMIC NOTES "}/>      
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router></NoteState>
  </>
  );
}

export default App;
