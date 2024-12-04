import { NavLink, Link } from "react-router-dom";

export default function AppHeader() {
  return (
    <header className="shadow-md">
      <div className="container flex justify-between py-4">
        <Link className="" to="/">
          Logo
        </Link>
        <nav className="flex gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todolist">TodoList</NavLink>
          <NavLink to="/activity">Activity</NavLink>
        </nav>
      </div>
    </header>
  );
}
