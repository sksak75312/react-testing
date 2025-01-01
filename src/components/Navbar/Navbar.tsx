import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-4">
      <NavLink to="/" className="px-4 py-2 hover:bg-[#1A252F] hover:text-white">
        Home
      </NavLink>
      <NavLink
        to="/todolist"
        className="px-4 py-2 hover:bg-[#1A252F] hover:text-white"
      >
        TodoList
      </NavLink>
      <NavLink
        to="/activity"
        className="px-4 py-2 hover:bg-[#1A252F] hover:text-white"
      >
        Activity
      </NavLink>
    </nav>
  );
}
