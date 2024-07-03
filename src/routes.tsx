import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/layout/Header';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';
import App from './App';
import { useEffect, useContext } from 'react';
import Room from './pages/Room';
import { SocketContext } from './context/socket';
import { ISocketContext } from './types/socket';

export default function FuctionRoutes() {
  const context = useContext<ISocketContext | null>(
    SocketContext,
  ) as ISocketContext;
  const { isNotChangeInUrl, url } = context;

  if (url !== location.href) {
    isNotChangeInUrl(location.href);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/sala/:id" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}
