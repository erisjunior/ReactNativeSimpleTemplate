import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './pages/Home'

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      { ShowCase },
      {
        initialRouteName: userLogged ? 'Home' : 'Home'
      }
    )
  )

export default Routes
