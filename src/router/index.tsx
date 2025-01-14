import { createBrowserRouter } from "react-router-dom";

import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import TodoList from "@/pages/TodoList";
import Activity from "@/pages/Activity";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: "todolist",
        element: <TodoList />,
      },
      {
        path: "activity",
        element: <Activity />,
      }
    ]
  },
]);

export default router;
