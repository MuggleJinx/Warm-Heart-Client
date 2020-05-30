import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

// Components
import Navbar from './components/layout/Navbar'
import AuthRoute from './util/AuthRoute'
import themeObject from './util/theme'

// Pages
import user from './pages/user'
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'
import events from './pages/Events'
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme(themeObject)

// axios.defaults.baseURL = ''

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store} >
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={home} />
              <Route exact path='/users/:handle' component={user} />
              <Route exact path='/users/:handle/scream/:screamId' component={user} />
              <Route exact path='/events' component={events}  />
              <AuthRoute exact path='/login' component={login}  />
              <AuthRoute exact path='/signup' component={signup}  />
            </Switch>
          </div>    
          
          {/* <StickyFooter /> */}
          <br /><br /><br /><br /><br /><br />
          <footer>
        {/* <Typography variant="h6" align="center" gutterBottom>
          Wenzhou-Kean Univeristy <br />
        </Typography> */}
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Wenzhou-Kean Univeristy <br />
          Bo Kailin, Jin Xiaotian, Song Liang, Wu Siyuan <br />
          {"Copyright © "}
            Warm Heart {new Date().getFullYear()}
            {"."}
        </Typography>
        {/* <Copyright /> */}
      </footer>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
