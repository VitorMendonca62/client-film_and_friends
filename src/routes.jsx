import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import WhoAreYou from './pages/WhoAreYou';
import Film from './pages/Film';

export default function routes() {
  
  return (
    <Router>
      <Routes>
        <Route path="/quem_e_voce" element={<WhoAreYou />} />
        <Route path="/filme" element={<Film />} />
      </Routes>
    </Router>
  );
}
