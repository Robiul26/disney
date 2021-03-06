import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from "firebase/auth";
const Header = () => {
    const handleAuth = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
        }).catch((error) => {
            alert(error.message);
          });
    }
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="home" />
                <span>Home</span>
                </a>
                <a href="/search">
                    <img src="/images/search-icon.svg" alt="search" />
                <span>Search</span>
                </a>
                <a href="/watchlist">
                    <img src="/images/watchlist-icon.svg" alt="watchlist" />
                <span>Watchlist</span>
                </a>
                <a href="/original">
                    <img src="/images/original-icon.svg" alt="original" />
                <span>Originals</span>
                </a>
                <a href="/movie">
                    <img src="/images/movie-icon.svg" alt="movie" />
                <span>Movies</span>
                </a>
                <a href="/series">
                    <img src="/images/series-icon.svg" alt="series" />
                <span>Series</span>
                </a>
            </NavMenu>
            <Login onClick={handleAuth}>Login</Login>
        </Nav>
    );
};
const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;
const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

        img{
            display: block;
            width: 100%;
        }
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-flow: row nowrap;
    height: 100%;
    position: relative;
    padding: 0;
    margin: 0;
    margin-right: auto;
    margin-left: 25px;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        text-decoration: none;
        text-transform: uppercase;
        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }  
        span{
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
            &:before{
                background-color: rgb(249,249,249);
                border-radius: 0 0 4px 4px;
                bottom: -6px;
                content:'';
                height: 2px;
                left: 0;
                right: 0;
                width: auto;
                position: absolute;
                transform-origin:left center;
                transform:scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
        }  
        
        &:hover{
            span:before{
                transform:scaleX(1);
            }
        }
    }
    

    /* @media (max-width:768px){
        display: none;
    } */
`;

const Login = styled.a`
    background-color: rgb(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    cursor: pointer;
    transition: all .2s ease 0s;
    &:hover{
        background-color: #f9f9f9;
        color:#000;
        border-color: transparent;
    }
`;
export default Header;