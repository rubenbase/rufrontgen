import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import Page from "containers/LayoutContainers/Page";
import NotFoundPage from "pages/DefaultPages/NotFoundPage";

import { AuthRoute } from "@rufrontgen/controller";
import HomeView from "containers/home/ui/HomeView";

/************************************
 *           R o u t e s
 ************************************/

const tmp_LoadingComponent = <div>Loading...</div>;

/****************** Auth Flow Routes ******************/
const Register = Loadable({
  loader: () =>
    import("screens/RegisterScreen" /* webpackChunkName: "RegisterChunk" */),
  loading: () => tmp_LoadingComponent
});

const Login = Loadable({
  loader: () =>
    import("screens/LoginScreen" /* webpackChunkName: "LoginChunk" */),
  loading: () => tmp_LoadingComponent
});

const Logout = Loadable({
  loader: () =>
    import("containers/logout" /* webpackChunkName: "LogoutChunk" */),
  loading: () => tmp_LoadingComponent
});

const ForgotPassword = Loadable({
  loader: () =>
    import("screens/ForgotPasswordScreen" /* webpackChunkName: "ForgotPasswordChunk" */),
  loading: () => tmp_LoadingComponent
});

const ChangePassword = Loadable({
  loader: () =>
    import("screens/ChangePasswordScreen" /* webpackChunkName: "ChangePasswordChunk" */),
  loading: () => tmp_LoadingComponent
});

/****************** Listings Routes ******************/
const Listings = Loadable({
  loader: () =>
    import("screens/FindListingsScreen" /* webpackChunkName: "ListingsChunk" */),
  loading: () => tmp_LoadingComponent
});

const Listing = Loadable({
  loader: () =>
    import("screens/ViewListingScreen" /* webpackChunkName: "ListingChunk" */),
  loading: () => tmp_LoadingComponent
});

const ListingEdit = Loadable({
  loader: () =>
    import("screens/EditListingScreen" /* webpackChunkName: "ListingEditChunk" */),
  loading: () => tmp_LoadingComponent
});

const ListingCreate = Loadable({
  loader: () =>
    import("screens/CreateListingScreen" /* webpackChunkName: "ListingCreateChunk" */),
  loading: () => tmp_LoadingComponent
});

/****************** Legal Routes ******************/
const Legal = Loadable({
  loader: () =>
    import("containers/legal/LegalConnector" /* webpackChunkName: "CategoryCreateChunk" */),
  loading: () => tmp_LoadingComponent
});

/****************** Category Routes ******************/
const CategoryCreate = Loadable({
  loader: () =>
    import("screens/CreateCategoryScreen" /* webpackChunkName: "CategoryCreateChunk" */),
  loading: () => tmp_LoadingComponent
});

/****************** Misc Routes ******************/
const Text = Loadable({
  loader: () =>
    import("screens/TextScreen" /* webpackChunkName: "TextChunk" */),
  loading: () => tmp_LoadingComponent
});

/****************** In Maintenance Routes ******************/
const Home2 = Loadable({
  loader: () =>
    import("screens/HomeScreen" /* webpackChunkName: "Home2Chunk" */),
  loading: () => tmp_LoadingComponent
});

class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact={true} path="/home" component={Home2} />

          {/* Auth Flow Routes */}
          <Route exact={true} path="/register" component={Register} />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/logout" component={Logout} />
          <Route
            exact={true}
            path="/forgot-password"
            component={ForgotPassword}
          />
          <Route
            exact={true}
            path="/change-password/:key"
            component={ChangePassword}
          />

          {/* Listings Routes */}
          <Route exact={true} path="/listings" component={Listings} />
          <Route exact={true} path="/listing/:listingId" component={Listing} />
          <AuthRoute
            exact={true}
            path="/listing/:listingId/edit"
            component={ListingEdit}
          />
          <AuthRoute
            exact={true}
            path="/create-listing"
            component={ListingCreate}
          />

          {/* Legal Routes */}
          <Route exact={true} path="/legal" component={Legal} />

          {/*Misc Routes */}
          <Route path="/m/" component={Text} />
          <Route
            render={() => (
              <Page>
                <NotFoundPage />
              </Page>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export { Routes };
