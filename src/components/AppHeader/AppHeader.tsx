import { Link } from "react-router-dom";

import Navbar from "../Navbar";

export default function AppHeader() {
  return (
    <header className="shadow-md">
      <div className="container flex items-center justify-between py-4">
        <Link className="text-3xl" to="/">
          Logo
        </Link>
        <Navbar/>
      </div>
    </header>
  );
}
