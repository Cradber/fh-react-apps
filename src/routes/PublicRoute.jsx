import {Redirect, Route} from "react-router-dom";
import PropTypes from 'prop-types'

export const PublicRoute = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
               component={ props => (
                   !isAuth
                       ? <Component {...props} />
                       : <Redirect to="/" />
               )}>
        </Route>
    )
}

PublicRoute.propTypes = {
    isAuth: PropTypes,
    component: PropTypes.func.isRequired
}
