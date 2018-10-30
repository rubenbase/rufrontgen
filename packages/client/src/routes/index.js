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

const loadableRoutes = {
  /* Category Routes */
  // "/create-categories": {
  //   component: loadable(() => import("screens/CreateCategoryScreen"))
  // },
  // "/categories": {
  //   component: loadable(() => import("screens/FindCategoryScreen"))
  // },
  // "/view-categories": {
  //   component: loadable(() => import("screens/ViewCategoryScreen"))
  // },
  // "/edit-categories": {
  //   component: loadable(() => import("screens/EditCategoryScreen"))
  // },

  /* Legal Routes */
  // "/legal": {
  //   component: loadable(() => import("containers/legal/LegalConnector"))
  // },

  /* Misc Routes */
  "/m/": {
    component: loadable(() => import("screens/TextScreen")),
    exact: false
  },

  /* In maintenance Routes */
  "/home": {
    component: loadable(() => import("screens/HomeScreen"))
  }
};

class Routes extends React.PureComponent {
  timeoutId = null;

  componentDidMount() {
    this.timeoutId = setTimeout(
      () =>
        Object.keys(loadableRoutes).forEach(path =>
          loadableRoutes[path].component.preload()
        ),
      2000 // load after 5 sec
    );
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
          {Object.keys(loadableRoutes).map(path => {
            const { exact, ...props } = loadableRoutes[path];
            props.exact = exact === void 0 || exact || false; // set true as default
            console.log(props.exact);
            return <Route key={path} path={path} {...props} />;
          })}
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

export { loadableRoutes };
export { Routes };

// export const Routes = () => (
//   <BrowserRouter>
//     <Switch>
{
  /* <Route exact={true} path="/" component={HomeView} /> */
}
{
  /* <Route exact={true} path="/home" component={Home} /> */
}

{
  /* Auth Flow Routes */
}
{
  /* <Route exact={true} path="/register" component={RegisterScreen} />
      <Route exact={true} path="/login" component={LoginScreen} />
      <Route exact={true} path="/logout" component={Logout} />
      <Route
        exact={true}
        path="/forgot-password"
        component={ForgotPasswordScreen}
      />
      <Route
        exact={true}
        path="/change-password/:key"
        component={ChangePasswordScreen}
      /> */
}

{
  /* Listings Routes */
}
{
  /* <Route exact={true} path="/listings" component={FindListingsScreen} />
      <Route
        exact={true}
        path="/listing/:listingId"
        component={ViewListingScreen}
      />
      <AuthRoute
        exact={true}
        path="/listing/:listingId/edit"
        component={EditListingScreen}
      />

      <AuthRoute
        exact={true}
        path="/create-listing"
        component={CreateListingScreen}
      /> */
}

{
  /* Category Routes */
}
{
  /* <Route
        exact={true}
        path="/create-categories"
        component={CreateCategoryScreen}
      />

      <Route exact={true} path="/categories" component={FindCategoryScreen} />

      <Route
        exact={true}
        path="/view-categories"
        component={ViewCategoryScreen}
      />

      <Route
        exact={true}
        path="/edit-categories"
        component={EditCategoryScreen}
      /> */
}

{
  /* Legal Routes */
}
// <Route exact={true} path="/legal" component={LegalConnector} />

{
  /* Misc Routes */
}
// <Route path="/m/" component={TextScreen} />
//     </Switch>
//   </BrowserRouter>
// );
