import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contactus";
import Careers from "../Pages/Careers";
import CustForm from "../Pages/form-sweetalert"
import StopWatch from "../pages/StopWatch";
import PostsItem from "../pages/posts";
import Task from "../pages/tasks";
const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const router = createBrowserRouter([
  
  {
    path: "/about",
    element: <About></About>,
  },

  {
    path: "/contactUs",
    element: <Contact />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/form-sweetalert",
    element: <CustForm />,
  },
  {
    path: "/StopWatch",
    element: <StopWatch />,
  },
  {
    path: "/posts/:id",
    element: <PostsItem />,
  }, 
  {
    path: "/tasks",
    element: <Task />,
  },
]);
export default router;
