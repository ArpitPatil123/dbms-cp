import  {  useEffect } from "react";
import { useAppContext } from "../contextAPI/ContextProvider";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { state } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.user.role == null || state.user.role !== "Admin" ) {
      navigate("/login");
    }
  },[]);

  return children;
};

export default Protected;
