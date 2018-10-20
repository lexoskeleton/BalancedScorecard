import Dashboard from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import Products from "../views/Products/Products";
import FileInput from "../views/FileInput/FileInput";
import PDFfile from "../views/PDFfile/PDFfile";

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
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/pdf",
    name: "PDF File",
    icon: "pe-7s-file",
    component: PDFfile
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
