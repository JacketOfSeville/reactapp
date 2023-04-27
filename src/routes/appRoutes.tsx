import { Dashboard } from "@mui/icons-material";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
        displayText: "Dashboard",
        icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
      {
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
            displayText: "Default"
        }
      }
    ]
  }
];

export default appRoutes;