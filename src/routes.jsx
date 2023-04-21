import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Header from './components/layout/Header';

// PAGES
import Film from './pages/Film';
import Home from './pages/Home';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';

export default function routes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SingIn />} />
        <Route path="/cadastro" element={<SingUp />} />

        {/*<Route path="/filme" element={<Film />} /> */}
      </Routes>
    </Router>
  );
}
