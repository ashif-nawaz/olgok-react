import React, { useContext, Suspense, lazy } from "react";
import CartProvider from "../store/CartProvider";
import Layout from "../components/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import AuthContext from "../store/auth-context";
import Spinner from "../components/UI/Spinner/Spinner";

const Home = lazy(() => import("../Pages/Home"));
const Rooms = lazy(() => import("../Pages/Rooms"));
const Gallery = lazy(() => import("../Pages/Gallery"));
const NearBy = lazy(() => import("../Pages/Near-By"));
const RoomDetails = lazy(() => import("../Pages/RoomDetails"));
const LoginPage = lazy(() => import("../Pages/Login"));
const OrdersPage = lazy(() => import("../Pages/Orders"));
const EditProfile = lazy(() => import("../Pages/EditProfile"));
const SignupPage = lazy(() => import("../Pages/Signup"));
const CartPage = lazy(() => import("../Pages/Cart"));

const App = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <ErrorBoundary>
      <CartProvider>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/rooms" exact>
                <Rooms />
              </Route>
              <Route path="/rooms/:roomId" exact>
                <RoomDetails />
              </Route>
              <Route path="/gallery" exact>
                <Gallery />
              </Route>
              <Route path="/nearby" exact>
                <NearBy />
              </Route>
              <Route path="/signup" exact>
                {!authCtx.isLoggedIn ? <SignupPage /> : <Redirect to="/" />}
              </Route>
              <Route path="/login" exact>
                {!authCtx.isLoggedIn ? <LoginPage /> : <Redirect to="/" />}
              </Route>
              <Route path="/orders" exact>
                {authCtx.isLoggedIn ? <OrdersPage /> : <Redirect to="/login" />}
              </Route>
              <Route path="/cart">
                {authCtx.isLoggedIn ? <CartPage /> : <Redirect to="/login" />}
              </Route>
              <Route path="/edit-profile" exact>
                {authCtx.isLoggedIn ? (
                  <EditProfile />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>
              <Route path="*">
                <h1>Page not found</h1>
              </Route>
            </Switch>
          </Suspense>
        </Layout>
      </CartProvider>
    </ErrorBoundary>
  );
};

export default App;
