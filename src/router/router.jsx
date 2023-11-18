import { createBrowserRouter } from "react-router-dom";
import Homepage from 'src/Pages/Homepage';
import About from "src/Pages/About";
import Contact from "src/Pages/Contactus";
import Careers from "src/Pages/Careers";
import CustForm from "src/Pages/form-sweetalert"
import StopWatch from "src/pages/StopWatch";
import PostsItem from "src/pages/posts";
import Task from "src/pages/tasks";
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
