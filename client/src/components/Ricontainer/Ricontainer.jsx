import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { menuItem } from '../../utils/menuItem'
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { signout } from '../../utils/icons';

const Ricontainer = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const { active, setActive } = useGlobalContext()

  return (
    <RiStyled>
    <div className='gpt3__navbar-menu'>
    {toggleMenu
    ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
    : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
    }
    {toggleMenu && (
      <div className='ri-container scale-up-center'>
        <div className='gpt3__navbar-menu_container-links'>
        
        <div className='gpt3__navbar-menu_container-links-sign'>


        <ul className="menu-items">
                {menuItem.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>

     </div>
        </div>
        <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
      </div>
    )}
  </div>
  </RiStyled>
  )
}

const RiStyled = styled.div`
dispaly: none;

.ri-container {

    padding: 2rem;
    position: absolute;
    background-color: white;
    right: 0;
    top: 40px;
    margin-top: 1rem;
    min-width: 210px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0,0, 0,0.2);
}
`

export default Ricontainer
