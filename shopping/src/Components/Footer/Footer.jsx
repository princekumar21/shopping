import React from "react";
import paymentImage from "../../assets/6220ac7d912013c51947f9c6.png";
import { Link } from "react-router-dom";
import "./Footer.scss";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
const Footer = () => {
  return (
    <div class="footer">
      <div className="top">
        <div className="items">
          <h3>Prducts</h3>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
        </div>
        <div className="items">
          <h3>About Us</h3>
          <span>Store</span>
          <span>Shoes</span>
        </div>

        <div className="items">
          <h3>Support</h3>
          <span>Contact Us</span>
          <span>FAQ</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">
            <Link className="link" to="/">
              eShop
            </Link>
          </div>
          <div className="copyright">
            <CopyrightOutlinedIcon fontSize="small" />
          </div>
        </div>
        <div classname="right">
          <img src={paymentImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
