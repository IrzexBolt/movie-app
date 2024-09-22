import React from 'react';
import assets from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const navigation = [
      {
        label: "TV Show",
        href: "tv"
      },
      {
        label: "Movies",
        href: "movie"
      }
    ]

  return (
    <header className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75'>
        <div className='contianer mx-auto px-3 flex items-center h-full'>
          <div>
            <img src={assets.HEADER_LOGO} alt="logo" width={120}/>
          </div>

          <nav className='hidden lg:flex items-center gap-1 ml-5'>
              {
                navigation.map((nav,index)=>{
                  return(
                    <div>
                      <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                        {nav.label}
                      </NavLink>
                    </div>
                  )
                }) 
              }
          </nav>
          <div></div>
        </div>
    </header>
  );
}

export default Header;
