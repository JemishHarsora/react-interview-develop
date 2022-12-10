import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Spinner from "./shared/Spinner";
import PrivateRoute from "./components/PrivateRoute";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Products = lazy(() => import("./pages/Products"));

const Error404 = lazy(() => import("./pages/error-pages/Error404"));
const Error500 = lazy(() => import("./pages/error-pages/Error500"));

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/products" component={Products} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="*" component={Error404} />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
