import { createBrowserRouter } from "react-router";

import Layout from "../presentation/templates/home/Layout";

import Dashboard from "../presentation/pages/Dashboard";
import Report from "../presentation/pages/Report";
import Prompts from "../presentation/pages/Prompts";
import CRM from "../presentation/pages/CRM";
import IAAgents from "../presentation/pages/IAAgents";
import Chats from "../presentation/pages/Chats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "report", element: <Report /> },
      { path: "prompts", element: <Prompts /> },
      { path: "crm", element: <CRM /> },
      { path: "agents", element: <IAAgents /> },
      { path: "chats", element: <Chats /> },
    ],
  },
]);

export default router;
