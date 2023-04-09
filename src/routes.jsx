import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// PAGES
import WhoAreYou from './pages/WhoAreYou';
import Film from './pages/Film';

const Home = () => {
  return <Link to="/quem_e_voce">HOME</Link>;
};

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem_e_voce" element={<WhoAreYou />} />
        <Route path="/filme" element={<Film />} />
      </Routes>
    </Router>
  );
}
