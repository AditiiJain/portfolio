import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  Home,
  Error,
  Header,
  Footer,
  Skill,
  Education,
  Contact,
  Projects,
  Loader,
  HeaderSmall,
  ThemeToggler,
  Socials,
} from "./index";
import { AnimatePresence } from "framer-motion";
import ThemeContext from "./context/ThemeContext";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [theme, setTheme] = useState("dark");

  // const [load, setLoad] = useState(true);
  // useEffect(() => {
  //   setTimeout(()=>{setLoad(false)},3000)
  // }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AnimatePresence>
        <div
          className={`w-screen relative  ${
            theme == "dark"
              ? "bg-gray-700 text-darkHeading"
              : "bg-white text-gray-700"
          }`}
        >
          <ThemeToggler />
          <Socials />

          <div className="hidden lg:block">
            <Header />
          </div>

          <div className=" lg:hidden">
            <HeaderSmall />
          </div>
          <div className="ml-20">
            <Outlet />
            <Footer />
          </div>
        </div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/skills",
        element: <Skill />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


// home
// skills  
// projects
// work  -- blog  intern


