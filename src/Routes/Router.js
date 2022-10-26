import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Courses from "../Pages/Course/Courses";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Register from "../Pages/Register/Register";

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
        path: "login",
        element: <Login></Login>,
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
