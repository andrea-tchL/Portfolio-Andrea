import { NavLink } from 'react-router-dom';


// c'est juste la barre de selection des pages
const NaviguationBar = () => {
  return (
    <header className='heade'>
      <NavLink to="/" className=" w-15 h-10 rounded-lg bg-white items-center justify-center font-bold flex  shadow-md">
        <p className="pink-gradient_text">Portfolio de ANDREA</p>
      </NavLink>
      <nav className='flex justify-end gap-3 font-bold'>
        <NavLink to='/About' className='text-white hover:text-green-600'>
          About
        </NavLink>
        <NavLink to='/Projects' className='text-white  hover:text-green-600'>
          Projects
        </NavLink>
        <NavLink to='/Contact' className='text-white  hover:text-green-600'>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default NaviguationBar;
