import Dashboard from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import Products from "../views/Products/Products";
import FileInput from "../views/FileInput/FileInput";
import PDFfile from "../views/PDFfile/PDFfile";
import Task from "../views/Task/Task";
// import Icons from "views/Icons/Icons";
// import Maps from "views/Maps/Maps";
// import Notifications from "views/Notifications/Notifications";
// import Upgrade from "views/Upgrade/Upgrade";

const dashboardRoutes = [
  {
    path: "/fileinput",
    name: "File Upload",
    icon: "pe-7s-upload",
    component: FileInput
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/products",
    name: "Products",
    icon: "pe-7s-note2",
    component: Products
  },
  {
    path: "/task",
    name: "Task",
    icon: "pe-7s-note",
    component: Task
  },
  {
    path: "/pdf",
    name: "PDF File",
    icon: "pe-7s-file",
    component: PDFfile
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },

  { redirect: true, path: "/", to: "/fileinput", name: "File Upload" }
];

export default dashboardRoutes;
