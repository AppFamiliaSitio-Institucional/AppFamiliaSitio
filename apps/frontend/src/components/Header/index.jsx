import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavArea, NavBar, LogoImg, InfoAreaDesktop, BarraPesquisa, InfoAreaMobile, MobileMenu } from "./styled";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaSearch, FaWhatsapp } from "react-icons/fa"; // Ícones do Font Awesome
import { FaCartShopping, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import RedButton from "../RedButton";
import { ROUTES } from "../../routes/RoutesConstants";
import FamiliaDoSitioBorda from "../../assets/FamiliaDoSitioBorda.png";

function Header({pagina}) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [menuMobile, setMenuMobile] = useState(false);

  return(
    <NavBar>
      <NavArea>
        <div className="area1">
          <a href="/"><LogoImg src={FamiliaDoSitioBorda} /></a>
          <label className="page-name">{pagina}</label>
        </div>
        
        <InfoAreaDesktop>
          <div className="area1">
          <ul className="social-medias">
            <li><a href="https://www.instagram.com/cafedositio/" target="_blank"><FaInstagram color="black" size={20}/></a></li>
            <li><a href="https://www.facebook.com/cafedositio" target="_blank"><FaFacebook color="black" size={20}/></a></li>
            <li><a href="https://www.youtube.com/@cafedositio7991" target="_blank"><FaYoutube color="black" size={20}/></a></li>
            <li><a href="https://x.com/cafe_do_sitio" target="_blank"><FaXTwitter color="black" size={20}/></a></li>
            <li><a href="https://www.linkedin.com/company/cafedositio/" target="_blank"><FaLinkedin color="black" size={20}/></a></li>
          </ul>

          <BarraPesquisa>
            <input type="text" placeholder="Pesquisa..."/>
            <FaSearch className="search-icon" color="grey"/>
          </BarraPesquisa>
          
          <h1>COMPRE COM O SEU CNPJ</h1>

          <RedButton simbolo={<FaWhatsapp />} text={"(61) 2108-0108"}/>
          <RedButton simbolo={<FaCartShopping />} text={"Nossa Loja"}/>

          </div>

          <ul className="nav-list">
            <li><Link to={ROUTES.MAIN} style={{ color: isActive(ROUTES.MAIN) ? "#006343" : "black"}}>INICIO</Link></li>
            <li><Link to={ROUTES.NOSSOS_PRODUTOS} style={{ color: isActive(ROUTES.NOSSOS_PRODUTOS) ? "#006343" : "black"}}>NOSSOS PRODUTOS</Link></li>
            <li><Link to={ROUTES.HISTORIA} style={{ color: isActive(ROUTES.HISTORIA) ? "#006343" : "black"}}>NOSSA HISTÓRIA</Link></li>
            <li><Link to={ROUTES.BLOG} style={{ color: isActive(ROUTES.BLOG) ? "#006343" : "black"}}>BLOG</Link></li>
            <li><Link to={ROUTES.SITIO_VERDE} style={{ color: isActive(ROUTES.SITIO_VERDE) ? "#006343" : "black"}}>SÍTIO VERDE</Link></li>
            <li><Link to={ROUTES.VISITA} style={{ color: isActive(ROUTES.VISITA) ? "#006343" : "black"}}>VISITE A FÁBRICA</Link></li>
            <li><Link to={ROUTES.CONTATOS} style={{ color: isActive(ROUTES.CONTATOS) ? "#006343" : "black"}}>CONTATO</Link></li>
          </ul>
        </InfoAreaDesktop>

        <InfoAreaMobile>
          <div className="area2">
            <BarraPesquisa>
              <input type="text" placeholder="Pesquisa..."/>
              <FaSearch className="search-icon" color="grey"/>
            </BarraPesquisa>
          </div>
          <MdOutlineMenu size={40} className="menu-icon" onClick={() => setMenuMobile(true)}/>
        </InfoAreaMobile>
      </NavArea>

      {menuMobile && (
        <MobileMenu>
          <MdClose size={40} className="close-icon" onClick={() => setMenuMobile(false)} />
          <ul className="mobile-nav-list">
            <li><Link to={ROUTES.MAIN} onClick={() => setMenuMobile(false)}>INICIO</Link></li>
            <li><Link to={ROUTES.NOSSOS_PRODUTOS} onClick={() => setMenuMobile(false)}>NOSSOS PRODUTOS</Link></li>
            <li><Link to={ROUTES.HISTORIA} onClick={() => setMenuMobile(false)}>NOSSA HISTÓRIA</Link></li>
            <li><Link to={ROUTES.BLOG} onClick={() => setMenuMobile(false)}>BLOG</Link></li>
            <li><Link to={ROUTES.SITIO_VERDE} onClick={() => setMenuMobile(false)}>SÍTIO VERDE</Link></li>
            <li><Link to={ROUTES.VISITA} onClick={() => setMenuMobile(false)}>VISITE A FÁBRICA</Link></li>
            <li><Link to={ROUTES.CONTATOS} onClick={() => setMenuMobile(false)}>CONTATO</Link></li>
          </ul>
          <ul className="social-medias">
            <li><a href="https://www.instagram.com/cafedositio/" target="_blank"><FaInstagram className="icon"/></a></li>
            <li><a href="https://www.facebook.com/cafedositio" target="_blank"><FaFacebook className="icon"/></a></li>
            <li><a href="https://www.youtube.com/@cafedositio7991" target="_blank"><FaYoutube className="icon"/></a></li>
            <li><a href="https://x.com/cafe_do_sitio" target="_blank"><FaXTwitter className="icon"/></a></li>
            <li><a href="https://www.linkedin.com/company/cafedositio/" target="_blank"><FaLinkedin className="icon"/></a></li>
          </ul>
          <div className="Buttons">
            <RedButton simbolo={<FaCartShopping />} text={"Nossa Loja"}/>
            <RedButton simbolo={<FaWhatsapp />} text={"(61) 2108-0108"}/>
          </div>
        </MobileMenu>
      )}
    </NavBar>
  )
}

export default Header;