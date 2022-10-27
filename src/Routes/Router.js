import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Courses from "../Pages/Course/Courses";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Reset from "../Pages/Login/Reset";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://funta-learning-server.vercel.app/courses"),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("https://funta-learning-server.vercel.app/courses"),
      },
      {
        path: "courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://funta-learning-server.vercel.app/courses"),
      },
      {
        path: "category/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(
            `https://funta-learning-server.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "course-details/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(
            `https://funta-learning-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "course-checkout/:id",
        element: (
          <PrivetRoute>
            <CheckOut></CheckOut>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://funta-learning-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "reset",
        element: <Reset></Reset>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);
