import {Header} from "./Header";
import React from "react";
import {Outlet} from "react-router-dom";

export const Layout = () => <div className='app'>
  <Header />
  <Outlet />
</div>
