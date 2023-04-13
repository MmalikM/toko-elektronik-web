import { Outlet } from "react-router-dom";
import NewNavbar from "./Navbar";


export default function Layout() {
  return (
    <div>
      <NewNavbar />
      <Outlet />
    </div>
  );
}
