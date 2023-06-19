import { Outlet } from "react-router-dom";

export default function Container() {
  return (
    <div className="flex">
      {/* <NavBar /> รอเขียน component นี้*/}  
      <Outlet />
    </div>
  );
}
