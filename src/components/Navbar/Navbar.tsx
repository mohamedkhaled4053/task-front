import React from "react";
import "./style.scss";
import { InputAdornment, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { IoIosMail, IoMdNotifications } from "react-icons/io";
import { useAppSelector } from "../../hooks/hooks";

export const Navbar = () => {
  let { user } = useAppSelector((state) => state.user);
  return (
    <div className="navbar">
      <div className="welcome">Welcome {user?.name},</div>
      <div className="left">
        <TextField
          type="search"
          placeholder="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
          }}
        />
        <div className="icon">
          <IoMdNotifications />
          <span className="number">3</span>
        </div>
        <div className="icon">
          <IoIosMail />
          <span className="number">7</span>
        </div>
        <img
          className="account-img"
          src="https://placebear.com/500/500"
          alt="account"
        />
      </div>
    </div>
  );
};
