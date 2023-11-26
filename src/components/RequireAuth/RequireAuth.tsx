import React, { ReactNode } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Navigate } from "react-router-dom";

type Props = { children: ReactNode };

export const RequireAuth = ({ children }: Props) => {
  let { user } = useAppSelector((state) => state.user);
  if (!user) return <Navigate to={"/home"}></Navigate>;
  return <div>{children}</div>;
};
