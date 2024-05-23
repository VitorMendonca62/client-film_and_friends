import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';
import { Link } from 'react-router-dom';

// ICONS
import { GoChevronDown } from 'react-icons/go';
import { ImExit } from 'react-icons/im';
import { FaUserLarge } from 'react-icons/fa6';
import { MdInput } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa';
import { UserContext } from '../../context/user';

let lastValueScroll = 0;
function changeHeaderStyles(setVisibleMenu: Dispatch<SetStateAction<boolean>>) {
  const headerElement = document.querySelector('header');

  if (['/home'].includes(location.pathname)) {
    if (lastValueScroll < window.scrollY) {
      if (!headerElement?.classList.contains('-translate-y-full'))
        setVisibleMenu(false);
      headerElement?.classList.add('-translate-y-full');
    }
    if (lastValueScroll > window.scrollY) {
      headerElement?.classList.remove('-translate-y-full');
    }
    lastValueScroll = window.scrollY;

    if (window.scrollY > 350) {
      if (!headerElement?.classList.contains('bg-lightBlack'))
        headerElement?.classList.add('bg-lightBlack');
      return;
    }
    headerElement?.classList.remove('bg-lightBlack');
  } else {
    lastValueScroll = 0;
    headerElement?.classList.add('bg-lightBlack');
  }
}

export default function Header() {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const context = useContext<IUserContext | null>(UserContext);
  const user = context?.user;
  const logoutUser = context?.logoutUser;

  const isLogged = user?.isLogged;

  function handleChangePath() {
    lastValueScroll = 0;
    setVisibleMenu(false);
    const headerElement = document.querySelector('header');
    headerElement?.classList.add('bg-lightBlack');
  }

  useEffect(() => {
    window.addEventListener('scroll', () => changeHeaderStyles(setVisibleMenu));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="w-screen px-7 py-3.5 text-white z-50 fixed transition ease-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">
          <Link to="/home">
            Movies<span className="text-darkGreen ">And</span>Friends
          </Link>
        </h2>
        <div
          className="group flex items-center text-sm hover:bg-darkGreen py-2 px-3.5 hover:rounded-2xl cursor-pointer"
          onClick={() => setVisibleMenu(!visibleMenu)}
        >
          Olá,
          <span className="ml-1 text-darkGreen font-bold group-hover:text-white ">
            {user?.username}
          </span>
          <GoChevronDown className="ml-2" />
        </div>
      </div>
      {visibleMenu && (
        <nav className="absolute right-7 text-sm bg-black w-36 rounded-2xl animate-enableMenu overflow-hidden">
          <ul className="flex gap-y-1 flex-col py-2 px-2">
            {isLogged ? (
              <>
                <Link to="/meu-perfil" onClick={handleChangePath}>
                  <li className="flex items-center hover:bg-darkGreen hover:rounded-2xl px-4 py-2 cursor-pointer">
                    <FaUserLarge className="w-3 h-3 mr-2" /> Meu perfil
                  </li>
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    handleChangePath();
                    if (logoutUser) logoutUser();
                  }}
                >
                  <li className="flex items-center hover:bg-darkGreen hover:rounded-2xl px-4 py-2 cursor-pointer">
                    <ImExit className="w-3 h-3 mr-2" /> Sair
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/singin" onClick={handleChangePath}>
                  <li className="flex items-center hover:bg-darkGreen hover:rounded-2xl px-4 py-2 cursor-pointer">
                    <MdInput className="w-3 h-3 mr-2" /> Login
                  </li>
                </Link>
                <Link to="/singup" onClick={handleChangePath}>
                  <li className="flex items-center hover:bg-darkGreen hover:rounded-2xl px-4 py-2 cursor-pointer">
                    <FaUserPlus className="w-3 h-3 mr-2" /> Cadastro
                  </li>
                </Link>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
