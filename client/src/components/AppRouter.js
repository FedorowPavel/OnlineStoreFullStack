import React from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import Shop from "../pages/Shop";

const AppRouter = () => {
  const isAuth = false
  return (
    <div>
      <Routes>
        {isAuth && authRoutes.map(({path, Component})=>
          <Route path={path} element={Component} exact key={path}/>
        )}
        {publicRoutes.map(({path, Component})=>
          <Route path={path} element={Component} exact key={path}/>
        )}
        //redirect on incorrect path
        <Route path="*" element={<Shop/>}/>
      </Routes>
    </div>
  );
};

export default AppRouter;
