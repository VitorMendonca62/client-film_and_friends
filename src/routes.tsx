import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/layout/Header';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';
import App from './App';


export default function FuctionRoutes() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/singin' element={<SingIn/>} />
        <Route path='/singup' element={<SingUp/>} />
      </Routes>
    </BrowserRouter>
  )
}
