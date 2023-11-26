import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logout, userLogin } from "../../features/userSlice";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let { loading, user } = useAppSelector((state) => state.user);
  let dispatch = useAppDispatch();

  let navigate = useNavigate();

  async function handleClick() {
    if (user) return dispatch(logout());
    let mockUser = { userName: "test@test.com", password: "aaaaa" };
    try {
      await dispatch(userLogin(mockUser));
      navigate("/");
    } catch (error) {}
  }

  return (
    <div className="page-placeholder home">
      <h1 className="gradiant-text">home</h1>
      <button onClick={handleClick}>
        {loading ? "loading" : user ? "logout" : "login"}
      </button>
    </div>
  );
};
