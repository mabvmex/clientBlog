// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// Admin Pages
import AdminHome from "../pages/admin/Index"; // (from index.js)
import AdminSignIn from "../pages/admin/SignIn";
import AdminUsers from "../pages/admin/Users";
import AdminMenuWeb from "../pages/admin/MenuWeb";
import AdminCourses from "../pages/admin/Courses";
import AdminBlog from "../pages/admin/Blog";

// Basic Pages
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";
import Courses from "../pages/Courses";
import Contact from "../pages/Contacto";

// Others
import Error404 from "../pages/Error404";
// import { Layout } from 'antd';

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false, // Siempre que la ruta /admin no cargará el componente Layout porque se usa 'exact: false'
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSignIn,
        exact: true,
      },
      {
        path: "/admin/users",
        component: AdminUsers,
        exact: true,
      },
      {
        path: "/admin/menu",
        component: AdminMenuWeb,
        exact: true,
      },
      {
        path: "/admin/courses",
        component: AdminCourses,
        exact: true,
      },
      {
        path: "/admin/blog",
        component: AdminBlog,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/contacto",
        component: Contact,
        exact: true,
      },
      {
        path: "/proyectos",
        component: Projects,
        exact: true,
      },
      {
        path: "/cursos",
        component: Courses,
        exact: true,
      },
      {
        path: "/blog",
        component: Blog,
        exact: true,
      },
      {
        path: "/blog/:url",
        component: Blog,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
