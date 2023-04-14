import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Header from './components/layout/Header';

// PAGES
import WhoAreYou from './pages/WhoAreYou';
import Film from './pages/Film';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default function routes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        {/* <Route path="/quem_e_voce" element={<WhoAreYou />} />
        <Route path="/filme" element={<Film />} /> */}
      </Routes>
    </Router>
  );
}
