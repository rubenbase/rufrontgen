import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import Page from "containers/LayoutContainers/Page";
import NotFoundPage from "pages/DefaultPages/NotFoundPage";

import { AuthRoute } from "@rufrontgen/controller";
import HomeView from "containers/home/ui/HomeView";

const loadable = loader =>
  Loadable({
    loader,
    delay: false,
    loading: () => null
  });

const loadableRoutes = {
  /* Auth Flow Routes */
  "/register": {
    component: loadable(() => import("screens/RegisterScreen"))
  },
  "/login": {
    component: loadable(
      () => import("screens/LoginScreen") /* webpackChunkName: "LoginChunk" */
    )
  },
  "/logout": {
    component: loadable(() => import("containers/logout"))
  },
  "/forgot-password": {
    component: loadable(() => import("screens/ForgotPasswordScreen"))
  },
  "/change-password/:key": {
    component: loadable(() => import("screens/ChangePasswordScreen"))
  },

  /* Listings Routes */
  "/listings": {
    component: loadable(() => import("screens/FindListingsScreen"))
  },
  "/listing/:listingId": {
    component: loadable(() => import("screens/ViewListingScreen"))
  },
  "/listing/:listingId/edit": {
    component: loadable(() => import("screens/EditListingScreen"))
  },
  "/create-listing": {
    component: loadable(() => import("screens/CreateListingScreen"))
  },

  /* Category Routes */
  "/create-categories": {
    component: loadable(() => import("screens/CreateCategoryScreen"))
  },
  "/categories": {
    component: loadable(() => import("screens/FindCategoryScreen"))
  },
  "/view-categories": {
    component: loadable(() => import("screens/ViewCategoryScreen"))
  },
  "/edit-categories": {
    component: loadable(() => import("screens/EditCategoryScreen"))
  },

  /* Legal Routes */
  "/legal": {
    component: loadable(() => import("containers/legal/LegalConnector"))
  },

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
