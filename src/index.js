import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ballers/App';
import './ballers/@fortawesome/fontawesome-free/css/all.min.css';
import reportWebVitals from './ballers/reportWebVitals';
import Contact from './ballers/Contact';
import CoachPage from './ballers/CoachPage';
import DailyAccess from './ballers/DailyAccess';
import KidsClub from './ballers/KidsClub';
import LogIn from './ballers/LogIn';
import SignIn from './ballers/SignIn';
import ProfilePage from './ballers/ProfilePage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/ballers",
    element: <App/>,
  },
  {
    path: "/ballers/Contact",
    element: <Contact/>,
  },
  {
    path: "/ballers/CoachPage",
    element: <CoachPage/>,
  },
  {
    path: "/ballers/DailyAccess",
    element: <DailyAccess/>,
  },
  {
    path: "/ballers/KidsClub",
    element: <KidsClub/>,
  },
  {
    path: "/ballers/LogIn",
    element: <LogIn/>,
  },
  {
    path: "/ballers/SignIn",
    element: <SignIn/>,
  },
  {
    path: "/ballers/SignIn",
    element: <SignIn/>,
  },
  {
    path: "/ballers/ProfilePage",
    element: <ProfilePage/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
