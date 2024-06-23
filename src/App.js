import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      name: 'Kishlay'
    }

    setUserInfo(data.name)
  }, [])

  console.log(appStore, "App Store")
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo} }>
      <div className='app'>
      <Header />
      <Outlet />
      {/** If path is / then render Body.jsx */}
      {/** If path is /about then render About.jsx */}
      {/** If path is /contact then render Contact.jsx */}
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/restaurant/:resId",
    element: <RestaurantMenu />,
  },
  {
    path: "/grocery",
    element: (
      <Suspense fallback={<Shimmer/>}>
        <Grocery />
      </Suspense>
    ),
  },
  {
    path: '/cart',
    element: <Cart/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    <AppLayout />
  </RouterProvider>
);
