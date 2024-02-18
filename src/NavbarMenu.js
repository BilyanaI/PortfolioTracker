import './App.css';
import './styles.css';
import { useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { RxComponent1 } from "react-icons/rx";
import { MdBuild } from "react-icons/md";
import { Link } from 'react-router-dom';


function NavbarMenu() {
  const [open, setOpen] = useState(true)

  return (
    <div className={`bg-purple-900 h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-200 relative`}>
      <BsArrowLeftShort className={`bg-white text-purple-900 text-3xl 
                                      rounded-full absolute -right-3 top-9 border border-purple-900 cursor-pointer
                                      ${!open && 'rotate-180'} `}
        onClick={() => setOpen(!open)} />
      <ul className='pt-10'>
        <li className='text-gray-300  text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2' >
          <Link to='investments'>
            <span className='text-2xl block float-left'><RxComponent1 /></span>
            <span className={`text-base font-medium flex-1 p-2 duration-200 ${!open && 'hidden'}`}>Investments</span>
          </Link>
        </li>
        <li className='text-gray-300  text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2' >
          <Link to='/settings'>
            <span className='text-2xl block float-left'><MdBuild /></span>
            <span className={`text-base font-medium flex-1 p-2 duration-200  ${!open && 'hidden'}`}>Settings</span>
          </Link>
        </li>
      </ul>
    </div>

  );
}

export default NavbarMenu;

