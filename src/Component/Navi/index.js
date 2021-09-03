import React, {useState} from 'react'
import { FiSearch, FiMenu } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'
import { NavWrap, NavLinks } from './NavStyle'
import { SideBarNav, SideBarWrap, SideIcon } from './SidebarStyle'
import * as AiIcons from 'react-icons/ai'
import SubMenu from './SunMenu'
import { SideData } from './data'

function Navigations() {

    const [Navbar, setNavbar] = useState(false);

    const [ Sidebar, setSidebar ] = useState(false);
    const showSideBar = () => setSidebar(!Sidebar)
    

    const changeBg = () => {
        if (window.scrollY >= 80){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBg);

    return (
        <>
            <NavWrap>
                <nav className={Navbar ? 'navbar active' : 'navbar'}>
                    <NavLinks>

                        <div className={Navbar ? 'logo active' : 'logo'} >
                            <p>LGU.gov</p>
                        </div>

                        <div className={Navbar ? 'icon active' : 'icon'}>
                            <FaTwitter className='twitter' />
                            <FiSearch className='search' />
                            <FiMenu className='menu' onClick={showSideBar}/>
                        </div>
                    </NavLinks>
                </nav>
            </NavWrap>

            <SideBarNav Sidebar={Sidebar}>
                <SideBarWrap>
                    <SideIcon>
                        <AiIcons.AiOutlineClose onClick={showSideBar} />
                    </SideIcon>

                    {SideData.map((item, index) => {
                        return(
                            <>
                                <SubMenu item={item} key={index} />
                            </>
                        )
                    })}
                </SideBarWrap>
            </SideBarNav>   

        </>
    )
}

export default Navigations
