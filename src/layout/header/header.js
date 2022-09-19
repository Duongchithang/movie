import logo from '../../asset/tmovie.png';
import React from 'react';
import styled from 'styled-components';
import publicRouter from '../../Route';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import style from './header.module.scss';
const ContainerImg = styled.div`
  width : 50px;
  height : 50px;
`
const Img = styled.img`
 width : 100%;
 height : 100%;
 object-fit : cover;
`
function Header() {
    // const menulist = useSelector(state=>state.user.MenuList);
    const { pathname } = useLocation();
    const active = publicRouter.findIndex((item,index)=>{
        return item.path === pathname;
    })
    return ( 
        <div>
            <div className={style.Header}>
                <ContainerImg className={style.HeaderTitle}>
                    <Img src={logo} alt=""/>
                    <span className={style.LogoText}>tMovies</span>
                </ContainerImg>
                <ul className={style.MenuList}>
                   { 
                       publicRouter.map((item,index)=>{
                        return <li className={`${style.MenuItem} ${index===active ? style.active : ''}`} key={index}><Link to={item.path} className={style.MenuItem}>{item.display}</Link></li>
                    })
                }
                </ul>
            </div>
        </div>
     );
}

export default Header;