import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import {PrivateRoute} from "./PrivateRoute";
import {PublicRoute} from "./PublicRoute";

import {LoginScreen} from "../components/login/LoginScreen";
import {DashboardRouter} from "./DashboardRouter";
import {useContext} from "react";
import {AuthContext} from "../auth/AuthContext";

export const AppRouter = () => {
    const {user} = useContext(AuthContext)

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact
                                 path={"/login"}
                                 component={LoginScreen}
                                 isAuth={user.logged} />
                    <PrivateRoute path={"/"}
                                  component={DashboardRouter}
                                  isAuth={user.logged} />
                </Switch>
            </div>
        </Router>
    );
}