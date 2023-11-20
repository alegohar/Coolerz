import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@Pages/Homepage";
import About from "@Pages/About";
import Contact from "@Pages/Contactus";
import Careers from "@Pages/Careers";
import CustForm from "@Pages/form-sweetalert"
import StopWatch from "@Pages/StopWatch";
import PostsItem from "@Pages/posts";
import Task from "@Pages/tasks";

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const router = createBrowserRouter([
   {
    path: "/",
    element: <Homepage></Homepage>,
  },

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
