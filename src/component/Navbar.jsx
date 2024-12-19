import { useState } from 'react';

import { MdMenu, MdClose } from 'react-icons/md';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-average p-5">
      <ul className="flex justify-between items-center text-lg lg:text-xl relative">
        <li className="text-2xl">
          <a href="#Home">Ruang Belajar</a>
        </li>
        <li>
          <ul>
            <li
              className={`flex ${
                isOpen ? 'flex-col absolute right-0 top-0 pr-10' : 'hidden'
              } sm:flex-row sm:block sm:space-x-5 lg:gap-10`}
            >
              <a className='hover:text-dark-200/50' href="#About">About</a>
              <a className='hover:text-dark-200/50' href="#Event">Beasiswa</a>
              <a className='hover:text-dark-200/50' href="#Event">Event</a>
              <a className='hover:text-dark-200/50' href="#Testimoni">Testimoni</a>
              <a className='hover:text-dark-200/50' href="#Instruktur">Instruktur</a>
            </li>
          </ul>
        </li>
        <li className="hidden md:block">
          <a href="#">Login / Sign Up</a>
        </li>
        <li
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden z-50"
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
