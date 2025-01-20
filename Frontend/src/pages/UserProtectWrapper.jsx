import { useContext, useEffect } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

 useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  
  return <>{children}</>;
};

export default UserProtectWrapper;
// if user exists then render the children, else redirect to login page
// if user reloads the page, user data will be lost & the user will be redirected to login page, to avoid such case we depends on the token stored in the local storage
