import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useLocation,
} from 'react-router-dom';

// import { useLocation } from 'react-router';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import {isAuthenticated} from './services/auth';

import Page from './Page';

import {Menu} from './components/Menu';

import {Welcome} from './pages/Welcome';
import {Login} from './pages/Login';
import {Register} from './pages/Register';
import {ForgotPassword} from './pages/ForgotPassword';
import {NewPassword} from './pages/NewPassword';

import {Home} from './pages/UserPages/Home';
import {Completed} from './pages/UserPages/Completed';
import {Profile} from './pages/UserPages/Profile';
import {EditProfile} from './pages/UserPages/EditProfile';
import {EditPassword} from './pages/UserPages/EditPassword';
import {Calendar} from './pages/UserPages/Calendar';
import {EditSubjects} from './pages/UserPages/EditSubjects';

const PrivateRoute = ({component: Component, title, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Page title={title}>
          <Component {...props} />
        </Page>
      ) : (
        <Redirect to={{pathname: '/', state: {from: props.location}}} />
      )
    }
  />
);

const DirectRoute = ({component: Component, title, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Redirect to={{pathname: '/home', state: {from: props.location}}} />
      ) : (
        <Page title={title}>
          <Component {...props} />
        </Page>
      )
    }
  />
);

const privateRoutes = [
  {
    path: '/home',
    exact: true,
    title: 'Descomplicador',
    component: Home,
    key: 1,
  },
  {
    path: '/profile',
    exact: true,
    title: 'Perfil - Descomplicador',
    component: Profile,
    key: 2,
  },
  {
    path: '/profile/edit',
    exact: true,
    title: 'Editar Perfil - Descomplicador',
    component: EditProfile,
    key: 3,
  },
  {
    path: '/profile/edit/editpassword',
    exact: true,
    title: 'Editar Senha - Descomplicador',
    component: EditPassword,
    key: 4,
  },
  {
    path: '/profile/edit/subjects',
    exact: true,
    title: 'Editar Senha - Descomplicador',
    component: EditSubjects,
    key: 4,
  },
  {
    path: '/overdue',
    exact: true,
    title: 'Tarefas Completas - Descomplicador',
    component: Completed,
    key: 5,
  },
  {
    path: '/calendar',
    exact: true,
    title: 'Calendário - Descomplicador',
    component: Calendar,
    key: 6,
  },
];

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="*">
        <AnimatedRoutes />
      </Route>
    </BrowserRouter>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  const hasMenu = !!privateRoutes.find(
    (route) =>
      route.path === location.pathname &&
      location.pathname !== '/profile/edit/editpassword',
  );

  return (
    <TransitionGroup>
      {hasMenu ? <Menu activePage={location.pathname} /> : null}
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <DirectRoute
            path="/"
            exact
            title="Bem-vindo ao Descomplicador"
            component={Welcome}
          />

          <DirectRoute
            path="/login"
            exact
            title="Login - Descomplicador"
            component={Login}
          />

          <DirectRoute
            path="/forgotpassword"
            exact
            title="Esqueci a senha - Descomplicador"
            component={ForgotPassword}
          />

          <DirectRoute
            path="/newpassword"
            exact
            title="Nova senha - Descomplicador"
            component={NewPassword}
          />

          <DirectRoute
            path="/register"
            exact
            title="Registro - Descomplicador"
            component={Register}
          />

          {privateRoutes.map((routeProps) => (
            <PrivateRoute {...routeProps} hasMenu={hasMenu} />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
