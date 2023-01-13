import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              <span>Men</span>
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              <span>Women</span>
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              <span>Children</span>
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            eShop
          </Link>
        </div>
        <div className="right">
          {" "}
          <div className="item"></div>
          <div className="item">
            <Link className="link" to="/">
              <span>About</span>
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              <span>Contact</span>
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              <span>Stores</span>
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
