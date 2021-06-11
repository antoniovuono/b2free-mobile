import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

export default createAppContainer(

      createSwitchNavigator({
        SignIn,
        SignUp,
        Dashboard,
      }),

);
