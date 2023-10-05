import React from "react";
import Logo from "@/public/assets/logoGroup.png";
import arabicFlag from "@/public/assets/arabicFlag.png";
import Image from "next/image";
import "@/app/styles/english/Navbar.scss";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="navbar">
          <div className="left">
            <div className="logo">
              <Image src={Logo} alt="Logo" />
            </div>
            <div className="menu">
              <a href="">ORDER ONLINE</a>
              <a href="">MENU</a>
              <a href="">OFFERS</a>
            </div>
          </div>
          <div className="right">
            <div className="language">
              <Image src={arabicFlag} />
              <p>عربي</p>
            </div>
            <div className="cart">
              <div className="cart_count">2</div>
              <BsCart3 color="#fff" fontSize={35} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
