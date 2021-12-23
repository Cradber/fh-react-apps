import {Redirect, Route, Switch} from "react-router-dom";
import {RegisterScreen} from "../components/auth/RegisterScreen";
import {LoginScreen} from "../components/auth/LoginScreen"

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/auth/login" component={LoginScreen} />
                <Route exact path="/auth/register" component={RegisterScreen} />
                <Redirect to="/auth/register" />
            </Switch>
        </div>
    )
}