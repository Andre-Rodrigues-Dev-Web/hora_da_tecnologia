// components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineCodeSandbox, AiOutlineUser, AiOutlineStar, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai';
import { RiAdvertisementFill } from 'react-icons/ri';

const Nav = styled.nav`
  background-color: #fff;
  box-shadow: 1px 3px 6px 0 #33333321;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .brand {
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;

    svg {
      margin-right: 5px;
    }
  }

  .menu-items {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
      flex-direction: column;
      margin-top: 10px;
    }
  }

  .menu-item {
    margin: 0 10px;

    @media (max-width: 600px) {
      margin: 10px 0;
    }

    a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
      display: flex;
      align-items: center;
      transition: color 0.3s ease;

      svg {
        margin-right: 5px;
      }

      &:hover {
        color: #222;
      }
    }
  }

  .search-bar {
    input {
      padding: 8px;
      border: none;
      border-radius: 5px;
      margin-right: 10px;
    }

    button {
      padding: 8px 12px;
      background-color: #056cf2;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0b64d8;
      }
    }
  }
`;

const Menu = () => {
  return (
    <Nav>
      <Link to="/" className="brand">
        <AiOutlineClockCircle /> Hora da Tecnologia
      </Link>
      <ul className="menu-items">
        <li className="menu-item">
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/tecnologia">
            <AiOutlineCodeSandbox /> Tecnologia
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/negocios">
            <AiOutlineStar /> Negócios
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/sobre-nos">
            <AiOutlineUser /> Sobre Nós
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/anuncie">
            <RiAdvertisementFill /> Anuncie
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/contato">
            <AiOutlineMail /> Contato
          </Link>
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
      </div>
    </Nav>
  );
};

export default Menu;
