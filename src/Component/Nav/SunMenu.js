import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SideBarLink = styled(Link)`
    color: #4E6E79;
    display: flex;
    text-decoration: none;
    flex-direction: column;
    font-size: 28px;
    text-align: left;
    justify-content: space-between;
    padding: 10px 20px;

  .bar{
      display: flex;
  }
    
    :hover{
        background-color: #252831;
        border-right: 4px solid white;
        cursor: pointer;
        color: white;
    }
`;

const SideBarLabel = styled.span`
    
`;

const DropdownLink = styled(Link)`
    background: white;
    height: 60px;
    padding-left: 4rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #4E6E79;
    font-size: 18px;

    &:hover {
        background-color: #252831;
        cursor: pointer;
        color: white;
    }
`;

function SunMenu({ item }) {

    const [subNav, setSubNav] = useState(false);
    const showSubNav = () => setSubNav(!subNav);

    return (
        <>
            <SideBarLink to={item.path} onClick={item.subnav && showSubNav}>

                <div className='bar'>
                    <SideBarLabel>{item.title}</SideBarLabel>
                
                    <div>
                        {item.subnav && subNav
                        ? item.iconOpened
                        : item.subnav
                        ? item.iconClosed
                        : null}
                    </div>
                </div>
            </SideBarLink>

            {subNav && item.subnav.map((item, index) => {
                return(
                    <>
                        <DropdownLink to={item.path} key={index}>
                            <SideBarLabel>
                                {item.title}
                            </SideBarLabel>
                        </DropdownLink> 
                    </>
                )
            })}
        </>
    )
}

export default SunMenu
