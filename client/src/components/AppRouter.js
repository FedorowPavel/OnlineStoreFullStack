import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import Shop from "../pages/Shop";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
  const {user} = useContext(Context)


  return (
    <div>
      <Routes>
        {user.isAuth && authRoutes.map(({path, Component})=>
          <Route path={path} element={Component} exact key={path}/>
        )}
        {publicRoutes.map(({path, Component})=>
          <Route path={path} element={Component} exact key={path}/>
        )}
        //redirect on incorrect path
        {/*<Route path="*" element={<Shop/>}/>*/}
      </Routes>
    </div>
  );
});

export default AppRouter;
